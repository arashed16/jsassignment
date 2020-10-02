function inchToFeet(inch) {
var feet = inch / 12;
return feet;
}

var senior = [156, 288, 300];
var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
var naniFeet = inchToFeet(senior[1]);
console.log(naniFeet);
var dadiFeet = inchToFeet(senior[2]);
console.log(dadiFeet);