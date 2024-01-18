function price(a,b){
    return a*b
}
console.log(price(10,24))


function odd(a){
    if(a%2==0){
        return true
    }
    else{return false}
}
console.log(odd(22))


function word(message){
    newMessage="";
    for(let i=0;i<message.length;i++){
    newMessage+=message[message.length-1-i]
    }
    return newMessage;
}
console.log(word("word"));


function tempe(c){
    return ( c * 9/5) + 32
}
console.log(tempe(10))