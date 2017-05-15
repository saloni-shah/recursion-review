// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const map = function(obj){
  const results = [];
  each(obj, (value) => {
    results.push(stringifyJSON(value));
  });
  return '[' + results.join(',') + ']';
};

const each = function(obj, callback) {
  if(Array.isArray(obj)){
    for(let index =0; index < obj.length; index++){
      callback(obj[index]);
    }
  } 
};

var stringifyJSON = function(obj) {
  if (obj === null){
    return 'null';
  } else if (Array.isArray(obj)){
    return map(obj, stringifyJSON);
  } else if (obj && typeof obj === 'object'){
    var results = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;  
      }
      results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + results.join(',') + '}';
  } else if(isFinite(obj)){
    return String(obj);
  } else if (typeof obj === 'boolean'){
    return String(obj);
  } else if (typeof obj === 'string'){
    return '"'+obj+'"';
  } else if (typeof obj === 'undefined'){
    return obj;
  } 
};


