function firstFunction(){}
function secondFunction(){}
console.log(firstFunction.__proto__===secondFunction.__proto__);
console.log(firstFunction.prototype===secondFunction.prototype);
console.log(({}).__proto__===({}).__proto__);
console.log(({}).prototype===({}).prototype);