let a = prompt('a ededini daxil et:')
let b = prompt('b ededini daxil et:')



if (a * 1 == a && b * 1 == b) {
    let emelyat = prompt('Emelyat isaresini daxil et:')
    if(emelyat == '+' || emelyat == '-' || emelyat == '*' || emelyat == '/' ){
    if (emelyat == '+') {
        alert(a * 1 + b * 1)
    }
    if (emelyat == '-') {
        alert(a - b)
    }
    if (emelyat == '*') {
        alert(a * b)
    }
    if (emelyat == '/') {
        alert(a / b)
    }
} else{
    alert('Birinci duzgun Emelyat daxil etmeyi oyren sonra gel')
}

} else {
    alert('Birinci duzgun eded daxil etmeyi oyren sonra gel')
}