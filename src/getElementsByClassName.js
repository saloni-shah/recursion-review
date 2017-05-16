// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  let nodesArr = nodes(document.body);
  let classElems = [];
  for(let i = 0; i < nodesArr.length; i++){
    if(nodesArr[i].nodeName !== '#text'){
      if(nodesArr[i].className!==undefined && nodesArr[i].className.indexOf(className) !== -1){
        classElems.push(nodesArr[i]);
      }
    }
  }
  return classElems;
};

const visitAllNodes = function(node, callback) {
  if (node.childNodes) {
    callback(node);
    node.childNodes.forEach( (value) => visitAllNodes(value,callback));
  }
};

const nodes = function(node) {
  let nodesArr = [];
  visitAllNodes(node, (currentNode) => nodesArr.push(currentNode));
  return nodesArr;
};
