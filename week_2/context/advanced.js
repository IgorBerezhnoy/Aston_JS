// Продвинутый:
//   1. Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()
function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {item: 'some value'};
function checkingFunctions(fn){
  if (typeof fn !== 'function') {
    throw new TypeError(`${fn} is not a function`);
  }
}
Function.prototype.customApply = function (context, argsArray) {
  checkingFunctions(this)
  const fn = this;
  const uniqueId = 'customApply_' + Date.now();   context[uniqueId] = fn;
  const result = context[uniqueId](...argsArray);
  delete context[uniqueId];
  return result;
};

Function.prototype.customBind = function (context, ...args) {
  checkingFunctions(this)
  const fn = this;
  return function (...newArgs) {
    return fn.customApply(context, args.concat(newArgs));
  };
};

const boundLogger = logger.customBind(obj);
boundLogger();
