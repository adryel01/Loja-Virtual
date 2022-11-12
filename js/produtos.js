
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

criaProdutos(img1, 'Camiseta Cataratas', 39.90, 'Camiseta');
criaProdutos(img2, 'Camiseta Pipoca', 39.90, 'Camiseta');
criaProdutos(img3, 'Camiseta Pokemon', 39.90, 'Camiseta');
criaProdutos(img4, 'Moletom Cobrakai', 59.90, 'Moletom');
criaProdutos(img5, 'Moletom Hellfire Club', 59.90, 'Moletom');
criaProdutos(img6, 'Moletom Kratos', 59.90, 'Moletom');


let body = document.body;
let main = document.querySelector('.container');
let divBanner = document.querySelector('.banner');
let titlePageProdutos = document.createElement('h1')
let divLoja = document.querySelector('.loja');
let sectionProdutos = document.createElement('section');
let listaProdutos = document.createElement('ul');


body.appendChild(main);
main.appendChild(divBanner)
divBanner.appendChild(titlePageProdutos)

main.appendChild(divLoja);
divLoja.appendChild(sectionProdutos);

sectionProdutos.appendChild(listaProdutos);

titlePageProdutos.innerHTML = 'Produtos'

sectionProdutos.classList.add('section-lista-de-produtos');
listaProdutos.classList.add('lista-de-produtos')

let idButton = 1;
let idProduto = 1;

function criaCard(produtos) {
    for (let i = 0; i < produtos.length; i++) {

        let itemListaProduto = document.createElement('li');
        listaProdutos.appendChild(itemListaProduto);
        itemListaProduto.classList.add('item-lista-produto');
        itemListaProduto.setAttribute('id', `idProduto_${idProduto}`)


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
        buttonAddCart.setAttribute('id', `idButton_${idButton}`)
        buttonAddCart.innerHTML = 'ADICIONAR AO CARRINHO'
        idProduto++
        idButton++
    }
}
criaCard(produtos)



let listButton = document.querySelectorAll('.button-add-cart')

let aside = document.querySelector('.aside')
let titleCart = document.createElement('h2')
aside.appendChild(titleCart)
titleCart.innerHTML = 'Carrinho de compras'
let sectionSomaProdutos = document.createElement('section');
sectionSomaProdutos.classList.add('section-soma-produtos');
aside.appendChild(sectionSomaProdutos);

let listaDeProdutos = document.createElement('ul')
sectionSomaProdutos.appendChild(listaDeProdutos)
listaDeProdutos.classList.add('lista-carrinho')



let productsCart = [];
let clickButton = listButton;




let productItem = 0
let productImagem = 0
let descricaoCart = 0
let productName = 0
let productPrice = 0
let removeItemCart = 0
let cardCarrinho = 0
let removeButton = 0
let contador = 1
let result = 0
let arrayFinal = [];
let valorFinal = 0



let clickRemoveButton = 0
let resp = 0
let idTarget = 0
let valorId = 0
let idCarrinhoItem = 0
let valorIdCarrinhoItem = 0


let xxx = 0;
for (let i = 0; i < listButton.length; i++) {

    clickButton = listButton[i].addEventListener('click', function (e) {
        resp = e.target
        idTarget = resp.getAttribute('id')
        valorId = parseInt(idTarget.slice(9))

        productItem = document.createElement('li')
        productItem.classList.add('item-lista-produtos')
        productImagem = document.createElement('img')
        productImagem.classList.add('img-cart')
        productItem.appendChild(productImagem)
        descricaoCart = document.createElement('p')
        descricaoCart.classList.add('descricao-cart')
        productItem.appendChild(descricaoCart)
        productName = document.createElement('p')
        descricaoCart.appendChild(productName)
        productPrice = document.createElement('p')
        descricaoCart.appendChild(productPrice)
        productImagem.src = produtos[valorId - 1].imagem
        productName.innerHTML = `${produtos[valorId - 1].nome}`
        productPrice.innerHTML = `R$${produtos[valorId - 1].valor.toFixed(2)}`
        listaDeProdutos.appendChild(productItem)

        removeItemCart = document.createElement('button')
        removeItemCart.classList.add('button-remove-item-cart')
        removeItemCart.innerHTML = 'Remover item'
        descricaoCart.appendChild(removeItemCart)

        cardCarrinho = document.querySelectorAll('.item-lista-produtos')
        removeButton = document.querySelectorAll('.button-remove-item-cart')
        // console.log(removeButton)

        for (let i = 0; i < arrayFinal.length; i++) {
            xxx += arrayFinal[i]
        }


        contador = 1
        result = 0
        arrayFinal = [];

        for (let i = 0; i < cardCarrinho.length; i++) {
            cardCarrinho[i].setAttribute('id', `idCarrinho_${contador}`)
            removeButton[i].setAttribute('id', `idRemoveButton_${contador}`)
            contador++
            result = cardCarrinho[i].getElementsByTagName('p')[2].textContent
            valorFinal = parseFloat(result.slice(2))
            arrayFinal.push(valorFinal)
        }

        console.log(somaValores(arrayFinal))

        sectionValoresCarrinho.innerHTML = somaValores(arrayFinal).toFixed(2)
        let valorSoma = 0
        // for (let i = 0; i < arrayFinal.length; i++) {
        //     valorSoma += arrayFinal[i]
        // }
        // console.log(valorSoma)

        // return removeButton


        // console.log(arrayFinal)
    })

}



let buttonevent = document.querySelectorAll('button')

for (let i = 0; i < listButton.length; i++) {

    buttonevent[i].addEventListener('click', function (e) {
        //             // console.log(e.target)
        removeButton = document.querySelectorAll('.button-remove-item-cart')
        // console.log(removeButton)

        for (let i = 0; i < removeButton.length; i++) {

            clickRemoveButton = removeButton[i].addEventListener('click', function (e) {
                resp = e.target
                // console.log(resp)
                idTarget = resp.getAttribute('id')
                valorId = parseInt(idTarget.slice(15))
                idCarrinhoItem = cardCarrinho[i].getAttribute('id')
                valorIdCarrinhoItem = parseInt(idCarrinhoItem.slice(11))
                // console.log(removeButton)
                if (valorId == valorIdCarrinhoItem) {
                    cardCarrinho[i].remove()
                    arrayFinal.splice(i, 1)
                    // xxx -= arrayFinal[i]
                    
                }
                
                sectionValoresCarrinho.innerHTML = somaValores(arrayFinal)

                // for(let i = 0; i<arrayFinal.length;i++){

                // }

            })
            

        }


    })

    // console.log(arrayFinal)

}
// console.log(arrayFinal)

//     return removeButton
// }


// removeButton = document.querySelectorAll('.button-remove-item-cart')


// removeButton = acessRemoveButton(buttonevent)

// clickRemoveButton = removeButton.value




// let somaCarrinho = 0
// let buttonAddCartSoma = listButton;
// let testeButton = 0
// let arrayFinal = [];
// for (let i = 0; i < buttonAddCartSoma.length;i++){



//     testeButton = buttonAddCartSoma[i].addEventListener('click', function (e) {
//         let cardCarrinho = document.querySelectorAll('.item-lista-produtos')
//         result = cardCarrinho[i].getElementsByTagName('p')[2].textContent
//         let valorFinal = parseFloat(result.slice(2))
//         arrayFinal.push(valorFinal)
//         console.log(valorFinal)
//     })
// }

// let carrinhoDeCompras = 0
// function cartX(listaDeProdutos) {
//     carrinhoDeCompras = listaDeProdutos
//     return carrinhoDeCompras
// }
// console.log(cartX(listaDeProdutos).textContent)








// let barraPesquisa = document.querySelector('.input-pesquisa')
// let buttonPesquisa = document.querySelector('.button-pesquisa')

// buttonPesquisa.addEventListener('click', function (e) {
//     e.preventDefault()
//     console.log(barraPesquisa.value)
//     // criaCard()
// })




function somaValores(arrayFinal){
    let somador = 0;
    for(let i = 0; i < arrayFinal.length; i++){
        somador += arrayFinal[i]
    }
    return somador
}
let valorTotal = somaValores(valorFinal)

let sectionValoresCarrinho = document.createElement('p');

aside.appendChild(sectionValoresCarrinho)
sectionValoresCarrinho.classList.add('valor-final')

let buttonFinalizarCompra = document.createElement('button');
buttonFinalizarCompra.innerHTML = 'Finalizar compra'
aside.appendChild(buttonFinalizarCompra)
buttonFinalizarCompra.classList.add('button-finalizar-compra')