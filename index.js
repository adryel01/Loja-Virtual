
let produtos = [];

let imgBanner = './assets/img/banner-cz10';
let img1 = './assets/img/camiseta-cataratas-cz10.jpg';
let img2 = './assets/img/camiseta-pipoca-cz10.jpg';
let img3 = './assets/img/camiseta-pokemon-cz10.jpg';
let img4 = './assets/img/moletom-cobrakai-cz10.jpg';
let img5 = './assets/img/moletom-hellfire-cz10.jpg';
let img6 = './assets/img/moletom-kratos-cz10.jpg';

function criaProdutos(linkImagem, nomeDoProduto, valorDoProduto, tipoDoProduto, id, produtoDescricao) {
    let produto = {
        imagem: linkImagem,
        nome: nomeDoProduto,
        valor: valorDoProduto,
        tipo: tipoDoProduto,
        id: id,
        descricao: produtoDescricao
    };
    produtos.push(produto);
    return produtos;
};
criaProdutos(img1, 'Camiseta Cataratas', 39.90, 'Camiseta', 1, 'Camiseta de Algodão do Pica-Pau nas Cataratas');
criaProdutos(img2, 'Camiseta Pipoca', 39.90, 'Camiseta', 2, 'Camiseta de Algodão do Jubileu do Pica-Pau Você disse Pipoca?');
criaProdutos(img3, 'Camiseta Pokemon', 39.90, 'Camiseta', 3, 'Camiseta de Algodão dos Pokemons Fantasmas');
criaProdutos(img4, 'Moletom Cobrakai', 59.90, 'Moletom', 4, 'Moletom de Algodão do seriado Cobra Kai');
criaProdutos(img5, 'Moletom Hellfire Club', 59.90, 'Moletom', 5, 'Moletom de Algodão Stranger Things Hellfire Club');
criaProdutos(img6, 'Moletom Kratos', 59.90, 'Moletom', 6, 'Moletom de Algodão Jogo God of War Kratos');

let body = document.body;
let main = document.querySelector('.container');
let divBanner = document.querySelector('.banner');
let titlePageProdutos = document.createElement('h1');
let divLoja = document.querySelector('.loja');
let sectionProdutos = document.createElement('section');
let listaProdutos = document.createElement('ul');

body.appendChild(main);
main.appendChild(divBanner);
divBanner.appendChild(titlePageProdutos);

main.appendChild(divLoja);
divLoja.appendChild(sectionProdutos);

sectionProdutos.appendChild(listaProdutos);

titlePageProdutos.innerHTML = 'Produtos';

sectionProdutos.classList.add('section-lista-de-produtos');
listaProdutos.classList.add('lista-de-produtos');

function criaCard(produtos) {
    for (let i = 0; i < produtos.length; i++) {
        let itemListaProduto = document.createElement('li');
        let imagemProduto = document.createElement('img');
        let tipoProduto = document.createElement('h4');
        let descricaoProduto = document.createElement('p');
        let nomeProduto = document.createElement('p');
        let valorProduto = document.createElement('p');
        let buttonAddCart = document.createElement('button');

        listaProdutos.appendChild(itemListaProduto);
        itemListaProduto.appendChild(imagemProduto);
        itemListaProduto.appendChild(tipoProduto);
        itemListaProduto.appendChild(nomeProduto);
        itemListaProduto.appendChild(descricaoProduto);
        itemListaProduto.appendChild(valorProduto);
        itemListaProduto.appendChild(buttonAddCart);

        itemListaProduto.classList.add('item-lista-produto');
        imagemProduto.classList.add('imagem-produto');
        tipoProduto.classList.add('tipo-produto')
        nomeProduto.classList.add('nome-produto');
        descricaoProduto.classList.add('descricao-produto')
        valorProduto.classList.add('valor-produto');
        buttonAddCart.classList.add('button-add-cart');

        imagemProduto.src = produtos[i].imagem;
        tipoProduto.innerHTML = produtos[i].tipo;
        nomeProduto.innerHTML = produtos[i].nome;
        descricaoProduto.innerHTML = produtos[i].descricao;
        valorProduto.innerHTML = `R$${produtos[i].valor.toFixed(2)}`;
        buttonAddCart.innerHTML = 'ADICIONAR AO CARRINHO';

        itemListaProduto.setAttribute('id', `idProduto_${produtos[i].id}`);
        buttonAddCart.setAttribute('id', `idButton_${produtos[i].id}`);
    }
}
criaCard(produtos);


let aside = document.querySelector('.aside');
let titleCart = document.createElement('h2');
let sectionSomaProdutos = document.createElement('section');
let listaDeProdutos = document.createElement('ul');

aside.appendChild(titleCart);
aside.appendChild(sectionSomaProdutos);
sectionSomaProdutos.appendChild(listaDeProdutos);

titleCart.innerHTML = 'Carrinho de compras';

sectionSomaProdutos.classList.add('section-soma-produtos');
listaDeProdutos.classList.add('lista-carrinho');

let qtdCart = 0;
let valorTotalCompra = 0;
let listButton = document.querySelectorAll('.button-add-cart');

for (let i = 0; i < listButton.length; i++) {
    let clickButton = listButton[i];

    clickButton.addEventListener('click', function (e) {
        let idElemento = e.target.id;

        let id = parseInt(idElemento.substring(9));

        if (verificaCart(id) == false) {
            qtdCart++;

            let produto = procuraProduto(id);

            let elementCart = criaCardCarrinho(produto);

            listaDeProdutos.appendChild(elementCart);
            valorTotalCompra += parseFloat(elementCart.getElementsByTagName('span')[1].textContent.substring(2));
            sectionValoresCarrinho.innerHTML = `R$${valorTotalCompra.toFixed(2)}`;
        }
    })
}

function verificaCart(id) {
    let elemento = document.querySelector('#itemCart_' + id);
    if (elemento == null) {
        return false;
    } else {
        return true;
    }
}

function procuraProduto(id) {
    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        if (produto.id == id) {
            return produto;
        }
    }
    return 'Produto não encontrado';
}

function criaCardCarrinho(produto) {
    let productItem = document.createElement('li');
    let productImagem = document.createElement('img');
    let descricaoCart = document.createElement('p');
    let productName = document.createElement('span');
    let productPrice = document.createElement('span');
    let removeItemCart = document.createElement('button');

    productItem.id = 'itemCart_' + produto.id;
    productImagem.src = produto.imagem;
    productName.innerHTML = `${produto.nome}`;
    productPrice.innerHTML = `R$${produto.valor.toFixed(2)}`;
    removeItemCart.innerHTML = 'Remover item';
    removeItemCart.id = 'cart_' + produto.id;
    sectionValorQuantidade.innerHTML = `${qtdCart}`;

    productItem.classList.add('item-lista-produtos');
    productImagem.classList.add('img-cart');
    descricaoCart.classList.add('descricao-cart');
    removeItemCart.classList.add('button-remove-item-cart');

    removeItemCart.addEventListener('click', function (e) {
        let li = document.querySelector('#itemCart_' + produto.id);
        let elementCart = criaCardCarrinho(produto);
        li.remove();
        qtdCart--;
        valorTotalCompra -= parseFloat(elementCart.getElementsByTagName('span')[1].textContent.substring(2));
        sectionValoresCarrinho.innerHTML = `R$${Math.abs(valorTotalCompra).toFixed(2)}`;
        sectionValorQuantidade.innerHTML = `${qtdCart}`;
    })

    productItem.appendChild(productImagem);
    productItem.appendChild(descricaoCart);
    descricaoCart.appendChild(productName);
    descricaoCart.appendChild(productPrice);
    descricaoCart.appendChild(removeItemCart);

    return productItem;
}


let titleQuantidadeCarrinho = document.createElement('p');
let sectionTextoQuantidade = document.createElement('span');
let sectionValorQuantidade = document.createElement('span');

let titleSectionValoresCarrinho = document.createElement('p');
let sectionTextoTotal = document.createElement('span');
let sectionValoresCarrinho = document.createElement('span');

aside.appendChild(titleQuantidadeCarrinho);
titleQuantidadeCarrinho.appendChild(sectionTextoQuantidade);
sectionTextoQuantidade.innerHTML = 'Quantidade';
titleQuantidadeCarrinho.appendChild(sectionValorQuantidade);
titleQuantidadeCarrinho.classList.add('section-valor-final');
sectionValorQuantidade.innerHTML = `${0}`;

aside.appendChild(titleSectionValoresCarrinho);
titleSectionValoresCarrinho.appendChild(sectionTextoTotal);
sectionTextoTotal.innerHTML = 'Total';
titleSectionValoresCarrinho.appendChild(sectionValoresCarrinho);
titleSectionValoresCarrinho.classList.add('section-valor-final');
sectionValoresCarrinho.innerHTML = `R$${0.00.toFixed(2)}`;

let buttonFinalizarCompra = document.createElement('button');
buttonFinalizarCompra.innerHTML = 'Finalizar compra';
aside.appendChild(buttonFinalizarCompra);
buttonFinalizarCompra.classList.add('button-finalizar-compra');

