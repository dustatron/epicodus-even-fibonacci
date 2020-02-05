export function Fibby () {
  this.ending = 34;
  this.fullFib = [];
  this.evenFib = [];
}

Fibby.prototype.makeFib = function() {
  var fibbyArr = [0, 1];
  for(var i = 1; i < this.ending; i++) {
    var nextNumber = fibbyArr[fibbyArr.length -2] + fibbyArr[fibbyArr.length -1];

    fibbyArr.push(nextNumber);
    if(fibbyArr[fibbyArr.length-1] >= this.ending) {
      break;
    }
  }
  
  return this.fullFib = fibbyArr;
}

Fibby.prototype.makeEvenFib = function() {
  var evenArr = [];
  this.makeFib();
  this.fullFib.forEach(function(num){
    if(num % 2 === 0){
      evenArr.push(num);
    }
  });
  this.evenFib = evenArr;
}