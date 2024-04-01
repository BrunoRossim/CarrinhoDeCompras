//fazer a soma geral do carrinho de compras a cada item adicionado
let totalGeral;
//iniciando o carrinho zerado
//zerando o total do carrinho atraves da funcao limpar
limpar();

function adicionar() {
  //recuperar valores nome do produto, quantidade e valor.
  let produto = document.getElementById('produto').value;
  let quantidade = document.getElementById('quantidade').value;
  //verificar se o produto selecionado é valido
  if(!produto || produto.trim() === ''){
    alert('Selecione um produto válido.');
    return;
  }
  //verificar se a quantidade inserida é valida
  if(isNaN(quantidade) || quantidade <= 0){
    alert('Insira uma quantidade válida.');
  }

  let nomeProduto = produto.split('-')[0];
  let valorUnitario = produto.split('R$')[1];
  //calcular o preço, o nosso subtotal.
  let preco = quantidade * valorUnitario;
  /*teste em alert
  alert(produto.value);
  alert(quantidade.value);
  alert(nomeProduto);
  alert(valorUnitario);
  alert(preco);*/

  //adicionar no carrinho.
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML =  carrinho.innerHTML + ` <section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`;

  //atualizar o valor total da compra.
  totalGeral =  totalGeral + preco;
  //criando variavel para campo total do html e alimentando ele com a variavel do total geral
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
}

function limpar() {
//zerando todas as funcoes do carrinho
totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = 'R$ 0'
}