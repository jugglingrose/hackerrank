function repeatedString(s, n) {
  var a = 0;
  for(var d of s){
    if(d == 'a'){
      a++;
    }
  }

  var charNum = Math.floor(n/s.length);
  var total = charNum * a;

  for( var i = 0; i<n % s.length; i++)
    if(s[i] == 'a'){
      total++
    }
  console.log(total);

}

repeatedString("abaa", 10);