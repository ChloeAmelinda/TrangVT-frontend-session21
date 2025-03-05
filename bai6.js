let number= +prompt("Nhap so bat ki:")
for(let i=0 ; i<=Math.abs(number) ;i++){
    if(number % i==0){
        alert(`${i} la uoc cua ${number}`)
    }    
}