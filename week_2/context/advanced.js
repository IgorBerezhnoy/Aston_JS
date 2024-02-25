// Продвинутый:
//   1. Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = {item: 'some value'};


Function.prototype.customBind = function (context, ...args) {
  const fn = this;
  return function (...newArgs) {
    return fn.apply(context, args.concat(newArgs));
  };
};

const boundLogger = logger.customBind(obj);
boundLogger();
