var valor = document.getElementsByClassName('produto_preco');
document.write("Total: R$ ");

var soma = 0;

for (let v of valor) {
    soma += parseFloat(v.innerText);
}

document.write(soma);