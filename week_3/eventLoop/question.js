console.log(1);
new Promise((reject, resolve) => {
  reject(2);
})
  .then(res => {
  console.log(res);
  return Promise.reject(3);
})
  .then((res) => {
    console.log(res);
    return 4;
  }, (res) => {
    console.log(res);
    return 5;
  })
  .catch(err => console.log('error', err))
  .then(console.log);
console.log(6);

// 1 6 2 3 5

