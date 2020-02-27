function fn(a){
    let res = 1;
    for(let i = 1; i <= a; i++){
        res *= i;
    }
    return res; 
}
function fn2(a){
    if(a == 1){
        return 1;
    }else{
        return a * fn2(a - 1);
    }
}
