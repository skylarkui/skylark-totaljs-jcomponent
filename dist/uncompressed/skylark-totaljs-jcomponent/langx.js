define([
	"skylark-langx/langx",
	"./jc",
	"./langx/localCompare",
	"./langx/regexp",
	"./langx/now",
	"./langx/statics",
	"./langx/ArrayEx",
	"./langx/DateEx",
	"./langx/NumberEx",
	"./langx/StringEx"
],function(slangx,jc,localCompare,regexp,now,statics){

	var MD = {
		jsoncompress : false,
		jsondate : true
	};

	function async(arr, fn, done) {
		var item = arr.shift();
		if (item == null) {
			return done && done();
		}
		fn(item, function() {
			async(arr, fn, done);
		});
	}


	function clone(obj, path) {

		var type = typeof(obj);
		switch (type) {
			case 'number':
			case 'boolean':
				return obj;
			case 'string':
				return path ? obj : clone(get(obj), true);
		}

		if (obj == null)
			return obj;

		if (obj instanceof Date)
			return new Date(obj.getTime());

		return parse(JSON.stringify(obj));
	}

	function copy(a, b) {
		var keys = Object.keys(a);
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var val = a[key];
			var type = typeof(val);
			b[key] = type === TYPE_O ? val ? clone(val) : val : val;
		}
		return b;
	}


	/*
	 * Generates a unique String.
	 *
	 */
	function guid(size) {
		if (!size)
			size = 10;
		var l = ((size / 10) >> 0) + 1;
		var b = [];
		for (var i = 0; i < l; i++)
			b.push(Math.random().toString(36).substring(2));
		return b.join('').substring(0, size);
	}

	/*
	 *  Generates Number hash sum.
	 *
	 */
	function hashCode(s) {
		if (!s)
			return 0;
		var type = typeof(s);
		if (type === 'number')
			return s;
		else if (type === 'boolean')
			return s ? 1 : 0;
		else if (s instanceof Date)
			return s.getTime();
		else if (type === 'object')
			s = stringify(s);
		var hash = 0, i, char;
		if (!s.length)
			return hash;
		var l = s.length;
		for (i = 0; i < l; i++) {
			char = s.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	}

	/*
	 *  Parses JSON String to Object.
	 *
	 */
	function parse(value, date) { // PARSE

		// Is selector?
		var c = value.substring(0, 1);
		if (c === '#' || c === '.')
			return parse($(value).html(), date); // PARSE

		if (date === undefined) {
			date = MD.jsondate;
		} 
		try {
			return JSON.parse(value, function(key, value) {
				return slangx.isString(value)  && date && value.isJSONDate() ? new Date(value) : value;
			});
		} catch (e) {
			return null;
		}
	}



	/*
	 * Serializes Object to JSON.
	 * @param
	 * @param 
	 * @param {Array|Object} fields
	 */
	function stringify(obj, compress, fields) { //STRINGIFY
		if(compress === undefined) {
			compress = MD.jsoncompress;
		} 
		var tf = typeof(fields);
		return JSON.stringify(obj, function(key, value) {

			if (!key) {
				return value;
			}

			if (fields) {
				if (fields instanceof Array) {
					if (fields.indexOf(key) === -1) {
						return undefined;
					}
				} else if (langx.isFunction(tf)) {
					if (!fields(key, value)){
						return undefined;
					}
				} else if (fields[key] === false)
					return undefined;
			}

			if (compress === true) {
				//var t = typeof(value);
				if (langx.isString(value)) {
					value = value.trim();
					return value ? value : undefined;
				} else if (value === false || value == null)
					return undefined;
			}

			return value;
		});
	}

	var empties = {
		array : [],
		object : {},
		fn :  function() {}
	};

	var singletons = {};

	function singleton(name, def) { //W.SINGLETON 
		return singletons[name] || (singletons[name] = (new Function('return ' + (def || '{}')))());
	};


	if (Object.freeze) {
		Object.freeze(empties.array);
		Object.freeze(empties.object);
	}


   /**
   * improves setTimeout method. This method cancels a previous unexecuted call.
   * @param  {String} name 
   * @param  {Function(name)} fn 
   * @param  {Number} timeout 
   * @param  {Number} limit  Optional, a maximum clear limit (default: 0)
   * @param  {Object} param  Optional, additional argument
   * @return {Number} 
   */
	function setTimeout2(name, fn, timeout, limit, param) { //W.setTimeout2 = 
		var key = ':' + name;
		if (limit > 0) {
			var key2 = key + ':limit';
			if (statics[key2] >= limit) {
				return;
			}
			statics[key2] = (statics[key2] || 0) + 1;
			statics[key] && clearTimeout(statics[key]);
			return statics[key] = setTimeout(function(param) {
				statics[key2] = undefined;
				fn && fn(param);
			}, timeout, param);
		}
		statics[key] && clearTimeout(statics[key]);
		return statics[key] = setTimeout(fn, timeout, param);
	}

   /**
   * clears a registered by setTimeout2().
   * @param  {String} name 
   * @return {Boolean} 
   */
	function clearTimeout2(name) { // W.clearTimeout2 = 
		var key = ':' + name;
		if (statics[key]) {
			clearTimeout(statics[key]);
			statics[key] = undefined;
			statics[key + ':limit'] && (statics[key + ':limit'] = undefined);
			return true;
		}
		return false;
	}



	return jc.langx = {
		each    : slangx.each,
		Evented : slangx.Evented,
		extend : slangx.extend,
		hoster  : slangx.hoster,
		isFunction : slangx.isFunction,
		isNumber : slangx.isNumber,
		isObject : slangx.isObject,
		isPlainObject: slangx.isPlainObject,
		isString : slangx.isString,
		klass : slangx.klass,
		mixin : slangx.mixin,
		result : slangx.result,
		topic : slangx.topic,
		Xhr : slangx.Xhr,

		async:async,
		clearTimeout2:clearTimeout2,
		clone:clone,
		copy:copy,
		empties:empties,
		Evented : slangx.Evented,
		guid:guid,
		hashCode:hashCode,
		localCompare : localCompare,
		now:now,
		parse:parse,
		regexp:regexp,
		result: slangx.result,
		setTimeout2:setTimeout2,
		singleton:singleton,
		stringify:stringify,
		statics : statics
	};

});