function shout(love) {
 return love.toUpperCase();   
}

  function whisper(aPhrase) {
      return aPhrase.toLowerCase();
  }
   
function logShout(love) {
    console.log(love.toUpperCase());
}
   
function logWhisper(aPhrase) {
    console.log(aPhrase.toLowerCase());
}  
   
function sayHiToHeadphonedRoommate(hello) {
    if (hello.toLowerCase() === hello) {
    return "I can't hear you!"   
    }
    if (hello.toUpperCase() === hello) {
        return "YES INDEED!"   
    }
    if (hello === "Let's have dinner together!") {
        return "I would love to!"   
    }


}


