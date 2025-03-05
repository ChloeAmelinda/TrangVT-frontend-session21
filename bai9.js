let number = +prompt("Nhập số bất kỳ:");
let isPrime = 1; 
if (number <= 1) {
    isPrime = 0; 
} else {
    for (let i = 2; i * i <= number; i++) { 
        if (number % i === 0) { 
            isPrime = 0; 
            break; 
        }
    }
}

if (isPrime) {
    alert(number + " là số nguyên tố");
} else {
    alert(number + " không phải là số nguyên tố");
}