
let x = 1; //global scope


const parentFun = () => {
  let myValue = 0; // local scope

  const innerFun = () => {
    console.log(myValue += 2)
    console.log(x += 1)
  }

  return innerFun;
}

const result = parentFun();

result() // now we can access the local value of myValue even after the parenFun is closed;  which means the innerFun have closure on parentFun; 


//closure with IIFE
// As we use IIFE , we don't need to resign to result like we did before

const result2 = ((num) => {
  console.log(num)
  let credits = num;
  const checkCredits = () => {
    if(credits <= 0){
      console.log("your credits is not enough to play")
    }else {
      console.log(`you have ${credits -1} credits to continue`)
    }
    credits -= 1;
  }
  return checkCredits;
})(2)

