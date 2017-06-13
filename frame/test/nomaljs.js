/**
 * Created by Administrator on 2017/5/13.
 */
let {a} = {a: 6};

const {b} = (([a = 0] = []) => {
  return {b: ++a };
})([a]);

console.log(b)