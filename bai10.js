let number = +prompt("Nhập số lượng số nguyên tố cần hiển thị:");
let result = ""; 
let count = 0;
let num = 2; 

while (count < number) {
    let isPrime = true; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false; 
            break;
        }
    }
    if (isPrime) {
        result += num + " "; 
        count++; 
    }
    num++; 
}
alert("Các số nguyên tố đầu tiên là: " + result);