module.exports = {
	storage: {
		sync: {
			get: get,
			set: set
		}
	}
}

function get(item, callback) {

	var data = {}
	
	data[item] = JSON.parse(localStorage.getItem(item));

	if(data[item]) {
		callback(data);
	} else {
		callback(undefined);
	}
}

function set(item, callback) {
	for(key in item) {
		localStorage.setItem(key, JSON.stringify(item[key]));
	}
	if(callback && typeof callback === 'function') {
		callback();
	}
}