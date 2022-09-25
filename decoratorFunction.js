//basic function 
let introduce = (message) => {
  console.log(message)
}

//decorator
const creageMessage = (fn) => {
  return (name) => {
    const greeting = "My name is " + name;
    fn(greeting);
  }
}

//modifying basic function ,,, decorating
introduce = creageMessage(introduce);

//another example 

let calculateArea = (length, width) => {
  console.log("result".width * length)
}

const countParams = (fn) => {
  return (...params) => {
    console.log("counting params")
    if(params.length != fn.length){
      throw new Error(`incorect number of params for ${fn.name}`);
    }
    return fn(...params)
  }
}

const requireInteger = (fn) => {
  return (...params) => {
    console.log("checking integer")
    params.forEach(param  => {
      if(!Number.isInteger(param)){
        throw TypeError("parameter must be an integer")
      }
    });
  return fn(...params)  
  }
  
}

calculateArea = countParams(calculateArea)
calculateArea = requireInteger(calculateArea)