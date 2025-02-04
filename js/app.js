var totalGeral = 0;
var maxProdutos = 20; 
var produtosInseridos = []; 

document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = `R$${totalGeral}`;

function adicionar() {
    var produto = document.getElementById('produto').value;
    var quantidade = document.getElementById('quantidade').value;
    
    if (quantidade < 1) {
        alert('Insira uma quantidade válida!');
        return;
    }
    if (quantidade > 10) {
        alert('A quantidade máxima de produto por vez é 10!');
        return;
    }
    if (produto === 'N/A') {
        alert('Selecione um produto!');
        return;
    }

    var adicionarAoCarrinho = document.getElementById('lista-produtos');
    var produtosAtuais = adicionarAoCarrinho.querySelectorAll('.carrinho__produtos__produto').length;

    if (produtosAtuais + quantidade > maxProdutos) {
        alert('Você atingiu o número máximo de produtos no carrinho!');
        return;
    }

    var nomeProduto = produto.split(' - ')[0];
    var valorUnitario = produto.split('R$')[1];
    var subTotal = quantidade * valorUnitario;
    adicionarAoCarrinho.innerHTML = adicionarAoCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    totalGeral = totalGeral + subTotal;
    let total = document.getElementById('valor-total');
    total.innerHTML = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;

    produtosInseridos.push({ nome: nomeProduto, quantidade: quantidade });
}

function valorTotal(){
    var produtos = document.querySelectorById('lista-produtos').querySelectorAll('.carrinho__produtos__produto');
    var total = 0;
    produtos
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
    totalGeral = 0;
}