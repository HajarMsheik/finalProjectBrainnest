
function findDiagonal(s)
{
    return Math.sqrt(2) * s;
}
var S = 9;
//document.write(findDiagonal(S).toFixed(3));


// ///////////////////////////////////
function findArea(a,b,c){
   let p= (a+b+c)/2;  //perimeter
     return Math.sqrt( 2)*(p-a)*(p-b)*(p-c)*p; 
    
}
var a = 5,b=6,c=7;
//document.write(findArea(a,b,c).toFixed(3));
///////////////////////////////////////
function findCircumference(r){
   return 2*r*Math.PI;
}
var r=4;
//document.write( findCircumference(r).toFixed(3));
//////////////////////////////////////////
function findAreaCircle(r){
     return 4*Math.PI*r*r;
}
var r=4;
//document.write( findAreaCircle(r).toFixed(3));
//////////////////////////////////////////////
//Write a JavaScript program that accepts two integers
// and displays the larger of the two.
function findTheLarger(a,b){
    if(a<b)
     return document.write("The larger is"+" "+ b);
     return document.write("The larger is"+" "+ a);
}
var a,b;
a=5; b=12;
//findTheLarger(a,b);
//////////////////////////////////////////////////
//Write a JavaScript program that checks whether an integer is an even or an odd number.
function findTheType(a){
    if(a%2==0)
     return document.write(a+" "+"is an even number");
     return document.write( a+" "+ "is an odd number");
}
var a,b;
a=5; b=12;
findTheType(a);
findTheType(b);
///////////////////////////////////////////////////
