function converter(){
    var bin = document.querySelector(".binario").value;
    var binarr = bin.split("");
    binarr.reverse();
    var decimal = 0;
    for(i=0; i < binarr.length; i++){
       let potencia = Math.pow(2, i);
        decimal = decimal + binarr[i]*potencia;
    };
    document.querySelector(".decimal").value = decimal;
}

