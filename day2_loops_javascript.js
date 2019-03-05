function vowelsAndConsonants(s) {
  var consonant = [];
  for(var v of s){
      if(v === "a" || v === "e" || v ==="i" || v ==="o" || v ==="u"){
        console.log(v);
      }
      else{
        consonant.push(v);
      }
    } 
    for(var c of consonant){
      console.log(c);
    }
}

vowelsAndConsonants("abcdefghijklmnopqrstuvwxyz");