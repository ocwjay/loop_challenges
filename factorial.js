function factorial(){
    var product = 0;
    for(var i = 1; i <= 12; i++) {
        if(product == 0){
            product = i;
        } else {
            product *= i;
        }
    }
    console.log(product);
}

factorial();