//we can use decorator function when we want to decorate our core function with other functionality,

//core function
let createGreetingMessage = (fn) => {
  return (name) => {
    let greeting = "My name is " + name;
    return fn(greeting)
  }
}

//decorator
const introduce = (message) => {
  console.log(message)
}

const result = createGreetingMessage(introduce)


/** 
 * we can resign to createGreetingMessage instead of using result ; cause we used let keyword when we defining our core function , 
 *  like this --- createGreetingMessage = createGreetingMessage(introduce)
 */