var a=parseInt(prompt("enter the first value"));
var n=parseInt(prompt("Enter the number"));

document.write("Perfect numbers are: <br><br>");
while(a<=n){
    var sum=0;
for(let i=1; i<a; i++){
    if(a%i==0){
       sum=sum+i;
    }
}

if(sum==a){
    document.write(a+"<br>");
}
a++;
}
