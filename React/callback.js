//const fun=(a,b,op)=>{

//return op(a,b);
//}

//function add(a,b){
//return a+b;
//}
//function sub(a,b){
//return a-b;

//}

//var res=fun(4,5,sub);

//console.log(res)
const placeorder=(callback)=>{
     setTimeout(()=>{
      console.log("order is taken");
callback();
  },2000)
};

const Start=(callback)=>{
  setTimeout(()=>{
 console.log("production started");
callback();
},5000)
};
const printId=(callback)=>{
  setTimeout(()=>{
 console.log("ID printed");
callback();
},1000)
};
const productname=(callback)=>{
  setTimeout(()=>{
 console.log("product name printed");
callback();
},2000)
};
const productdesc=(callback)=>{
  setTimeout(()=>{
 console.log("product desc printed");
callback();
},5000)
};
 console.log("Ordering products.......");
placeorder(() => {
  console.log("In  Production....");
  Start(() => {
    console.log("Printing items");
    printId(() => {
      productname(() => {
        productdesc(()=>{console.log("Day Ended");})
        
      });
    });
  });
});
