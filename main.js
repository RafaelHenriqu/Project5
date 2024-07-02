function Token_Generator(){ 
  
    var Token = `${new Date().getTime()}${new Date().getFullYear()}${new Date().getDay()}${new Date().getMonth()}${new Date().getMilliseconds()}${new Date().getMinutes()}${new Date().getMonth()}`
    return Token

}
console.log(Token_Generator())