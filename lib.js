/* Flatten nested JSON objects into dotted key paths. No runtime dependencies. */
'use strict';
function analyze(text) {

var source=JSON.parse(text), paths={};
function visit(value,key){
  if(value!==null && typeof value==='object'){
    Object.keys(value).forEach(function(part){visit(value[part],key?key+'.'+part:part);});
  } else {paths[key||'$']=value;}
}
visit(source,'');return {paths:paths,count:Object.keys(paths).length};
}
module.exports = { analyze: analyze };
