function ObserverList() {
  this.ObserverList = [];
}

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
}

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.ObserverList.length) {
    return this.ObserverList[index];
  } 
}

ObserverList.prototype.count = function(){
  return this.observerList.length;
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
  var i = startIndex;
  while (i < this.ObserverList.length) {
    if (this.ObserverList[i] === obj) {
      return i;
    }
    i++;
  }

  return -1;
}

ObserverList.prototype.removeAt = function( index ){
  this.observerList.splice( index, 1 );
};