// // @import mywork.js


// const myCart = document.getElementById("mon-pannier");

// console.log(buyingCart);

// function de creation du caddie

function createCart(){
    buyingCart.forEach(element => createCartCard(element))
        // function de creation de l'element par l'ID       
}



let monAchat = albums.get("50");

function createCartCard(parametre){
    let item = albums.get(parametre);
    let cartTitre = item.titre;
    let cartPrice = item.prix;
    let cartIdSerie = item.idSerie;

    const titreEl = document.createElement('h3');
    titreEl.setAttribute('class', 'cart-titre');
    titreEl.append(cartTitre);
    const prixEl = document.createElement('p');
    prixEl.setAttribute('class', 'cart-titre');
    prixEl.append(cartPrice);
    // arrayPrix.push(cartPrice);
    const imgEl = document.createElement('img');
    // imgEl.setAttribute("src", function image(param)
    

    
}


    



