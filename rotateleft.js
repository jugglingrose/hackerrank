function rotLeft(a, d) {
  for(var i = 0; i<d; i++){
    console.log(a[i]);
    a.push(a[i]);
  }
  a.splice(0, d);
  console.log(a);
}

var a = [1,2,3,4,5];
var d = 2;

rotLeft(a,d);