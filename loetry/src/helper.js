function getRan(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(arr) {
  let ans = 0;
  arr.forEach(element => {
    ans+=element;
  });
  return ans;
}

export { getRan, sum };
