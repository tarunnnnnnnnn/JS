function f1() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is f1 function")
        resolve()
    },3000)//its in millisecond 3000 here is 3 secs
  });
}
function f2() {
  console.log("This is f2 function");
}
f1()
  .then(() => f2())
  .catch((err) => console.log(err));
