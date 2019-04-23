document.getElementById("formulario").addEventListener("submit",adicionarCarro);


function adicionarCarro(e){

    var modelo = document.getElementById("modeloCarro").value;
    let placa = document.getElementById("placaCarro").value.toUpperCase();
    var time = new Date();

    if(placa.length == 3){

        placa = placa+="-";
        return placa;

    }

    carro={
        modelo : modelo,
        placa : placa,
        hora : time.getHours(),
        minutos :time.getMinutes()
    }

    console.log(carro);

    if(localStorage.getItem("patio")=== null){
        var carros = [];
        carros.push(carro);
        localStorage.setItem("patio",JSON.stringify(carros));
    
    }else{
        carros = JSON.parse(localStorage.getItem("patio"));
        carros.push(carro);
        localStorage.setItem("patio",JSON.stringify(carros));
    }

    mostraPatio();
    
    event.preventDefault();    
}


function removerVeiculo(placa){
    var carros = JSON.parse(localStorage.getItem('patio'));
    for(var i = 0; i < carros.length; i++){
        if(carros[i].placa == placa){
            carros.splice(i,1);

        }

        localStorage.setItem("patio",JSON.stringify(carros));
        window.onload();
    }
}





function mostraPatio(){
    var carros = JSON.parse(localStorage.getItem('patio'));
    var carrosResultado = document.getElementById('resultados');

    carrosResultado.innerHTML="";

    for(var i = 0; i < carros.length; i++){

            var modelo = carros[i].modelo;
            var placa = carros[i].placa;
            var hora= carros[i].hora;
            var minutos = carros[i].minutos;
            var times = new Date();
            var saida = (times.getHours()- hora)*4.50;
            
        carrosResultado.innerHTML+='<tr><td>'+modelo+
                                   '</td><td>'+placa +
                                   '</td><td>' + hora+":"+minutos+
                                   '</td><td>'+saida+
                                   '</td><td><button class="btn btn-danger" onclick="removerVeiculo(\''+placa+'\')">Excluir</btn></td></tr>';


    }

}

