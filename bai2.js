let demle=0
let demchan=0

for(let i =1 ; i<=5; i++){
    let number=+prompt(`Nhap so thu ${i} bat ki:`)
    if(number %2 ==0){
        demchan++
    }else{
        demle++
    }
}
alert("Tong so chan la:" +demchan)
alert("Tong so le la:" +demle)

