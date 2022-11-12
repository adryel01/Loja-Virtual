let produtos = [];

let imgBanner = '/assets/img/banner-cz10'
let img1 = '/assets/img/camiseta-cataratas-cz10.jpg'
let img2 = '/assets/img/camiseta-pipoca-cz10.jpg'
let img3 = '/assets/img/camiseta-pokemon-cz10.jpg'
let img4 = '/assets/img/moletom-cobrakai-cz10.jpg'
let img5 = '/assets/img/moletom-hellfire-cz10.jpg'
let img6 = '/assets/img/moletom-kratos-cz10.jpg'

function criaProdutos(linkImagem, nomeDoProduto, valorDoProduto, tipoDoProduto) {
    let produto = {
        imagem: linkImagem,
        nome: nomeDoProduto,
        valor: valorDoProduto,
        tipo: tipoDoProduto
    };
    produtos.push(produto)
    return produtos
};

criaProdutos(img1, 'Camiseta Cataratas CZ10', 39.90, 'Camiseta');
criaProdutos(img2, 'Camiseta Pipoca CZ10', 39.90, 'Camiseta');
criaProdutos(img3, 'Camiseta Pokemon CZ10', 39.90, 'Camiseta');
criaProdutos(img4, 'Moletom Cobrakai CZ10', 59.90, 'Moletom');
criaProdutos(img5, 'Moletom Hellfire Club CZ10', 59.90, 'Moletom');
criaProdutos(img6, 'Moletom Kratos CZ10', 59.90, 'Moletom');


let body = document.body;
let main = document.querySelector('.container');
let sectionProdutosCamisetas = document.createElement('section');
let listaProdutosCamisetas = document.createElement('ul');
let sectionProdutosMoletom = document.createElement('section');
let listaProdutosMoletom = document.createElement('ul');
let titleSectionCamisetas = document.createElement('h1');
let titleSectionMoletom = document.createElement('h1');

body.appendChild(main);
main.appendChild(sectionProdutosCamisetas);
sectionProdutosCamisetas.appendChild(titleSectionCamisetas);
sectionProdutosCamisetas.appendChild(listaProdutosCamisetas);
main.appendChild(sectionProdutosMoletom);
sectionProdutosMoletom.appendChild(titleSectionMoletom);
sectionProdutosMoletom.appendChild(listaProdutosMoletom);

titleSectionCamisetas.innerHTML = 'Camisetas';
titleSectionMoletom.innerHTML = 'Moletons';

sectionProdutosCamisetas.classList.add('section-lista-de-camisetas');
listaProdutosCamisetas.classList.add('lista-de-produtos-camisetas');
sectionProdutosMoletom.classList.add('section-lista-de-moletom');
listaProdutosMoletom.classList.add('lista-de-produtos-moletom');


for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].tipo == 'Camiseta') {
        let itemListaProduto = document.createElement('li');
        listaProdutosCamisetas.appendChild(itemListaProduto);
        itemListaProduto.classList.add('item-lista-produto');

        let imagemProduto = document.createElement('img');
        itemListaProduto.appendChild(imagemProduto);
        imagemProduto.classList.add('imagem-produto');
        imagemProduto.src = produtos[i].imagem;

        let nomeProduto = document.createElement('p');
        itemListaProduto.appendChild(nomeProduto);
        nomeProduto.classList.add('nome-produto');
        nomeProduto.innerHTML = produtos[i].nome;

        let valorProduto = document.createElement('p');
        itemListaProduto.appendChild(valorProduto);
        valorProduto.classList.add('valor-produto');
        valorProduto.innerHTML = `R$${produtos[i].valor.toFixed(2)}`;

        let buttonAddCart = document.createElement('button');
        itemListaProduto.appendChild(buttonAddCart);
        buttonAddCart.classList.add('button-add-cart');
        buttonAddCart.innerHTML = 'ADICIONAR AO CARRINHO'

    } else {

        let itemListaProduto = document.createElement('li');
        listaProdutosMoletom.appendChild(itemListaProduto);
        itemListaProduto.classList.add('item-lista-produto');

        let imagemProduto = document.createElement('img');
        itemListaProduto.appendChild(imagemProduto);
        imagemProduto.classList.add('imagem-produto');
        imagemProduto.src = produtos[i].imagem;

        let nomeProduto = document.createElement('p');
        itemListaProduto.appendChild(nomeProduto);
        nomeProduto.classList.add('nome-produto');
        nomeProduto.innerHTML = produtos[i].nome;

        let valorProduto = document.createElement('p');
        itemListaProduto.appendChild(valorProduto);
        valorProduto.classList.add('valor-produto');
        valorProduto.innerHTML = `R$${produtos[i].valor.toFixed(2)}`;

        let buttonAddCart = document.createElement('button');
        itemListaProduto.appendChild(buttonAddCart);
        buttonAddCart.classList.add('button-add-cart');
        buttonAddCart.innerHTML = 'ADICIONAR AO CARRINHO'
    }

}


let buttonCamisetas = document.querySelector('.link-menu-navegacao-camisetas')