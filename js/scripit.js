document.getElementById('formulario').addEventListener('submit',adicionarCarro);
function adicionarCarro(e){
    var carro = document.getElementById('modeloCarro').value;
    var placa = document.getElementById('placaCarro').value;

    e.preventDefault();
}