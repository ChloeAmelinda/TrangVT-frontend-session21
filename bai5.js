let number = +prompt("Nhap so bat ki:")
while(number <0 || number>100) {
    alert("Nhap lai")
    number = +prompt("Nhap so bat ki:")
}
if(number % 5 ==0 && number %3==0){
    alert("FizzBuzz")
}else if(number%3==0){
    alert("Fizz")
}else if(number %5==0){
    alert("Buzz")
}else{
    alert("ko phai la boi so cua 3 va 5")
}
