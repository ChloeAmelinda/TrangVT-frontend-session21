let sum=0
for(let i=1 ; i<= 5 ; i++){
    let number =+ prompt(`Nhap so thu ${i} bat ki:`)
    if(number %2 != 0){
        alert(number+"la so le")
         sum +=number
    }else{
        alert("ko hop le")
    }
   
}
alert("tong cac so la :" + sum)

// // B1:
// let sum = 0;

// // B2:
// // isNaN() // --> Kiểm tra xem 1 số có phải Not A Number
// // isInteger() --> Kiểm tra xme 1 số có phải số nguyên hay không

// for (let i = 0; i < 5; i = i + 1) {
//   let number = +prompt("Mời bạn nhập vào số ngẫu nhiên");
//   if (Number.isInteger(number)) {
//     if (number % 2 !== 0) {
//       sum = sum + number;
//     }
//   } else {
//     console.log("Số nhập vào không hợp lệ");
//   }
// }

// console.log("Tổng của các số lẻ =", sum);