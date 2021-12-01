

//--------------------------------------------------- MY WORK NOW --------------------





// constantes Elements HTML
const buyingList = document.getElementById("buying-list");

const myInputs = document.querySelectorAll('input');

const serieIdInput = document.getElementById("idserie");
const mySerie = document.getElementById("serie");
const myNumero = document.getElementById("numero");
const myAuthor = document.getElementById("auteur");
const myPrice = document.getElementById("prix");
const myTitle = document.getElementById('titre');



//  function inputLength(parameter){
//      return parameter.value.length;
//  }

const myStuffForThis = document.querySelectorAll('li');

// let counter = 0;



const buyingArray = new Array();


const buyingCart = new Array();

const myBigImage = document.getElementById('album');

const boutonPannier = document.getElementById('pannier');



console.log(buyingArray)













/////////////////////////////////ATTENTION PUSH DANS LE MAUVAIS TABLEAU LA A VERIFIER
/////////////////////////////////////////////////////////////////////////////////

// Function de création de la liste d'achat avec bouton pour supprimer son contenu
//---------- ---------------------------------------------------------------------
function createMyList() {
    let buyingCartItem = myBigImage.getAttribute('datalink');
    let buyingCartInfo = miniPicture.getAttribute('datalink');
    console.log(buyingCartInfo);
    console.log(buyingCartInfo);
   

    // recuperation de l'id
    infoBuyingCart.push(buyingCartInfo);
    // recuperation du prix
    buyingCart.push(buyingCartItem);
    // console.log(infoBuyingCart);
  

	// let counter = 0;
	// let item = buyingArray[counter];

    // affichage du bouton pour aller à son pannier 
    if(buyingCart.length != 0){
        boutonPannier.classList.remove('hide');
    }
    // ajoute de l'objet dans le tableau d'achat
    
    

    const newCard = document.createElement("div");
    newCard.setAttribute("class", "newcard");
    buyingList.appendChild(newCard);
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("class", "btnremover");	
    // removeBtn.setAttribute("id", "btnremover");


	removeBtn.setAttribute("datalink", buyingCartItem)
    newCard.appendChild(removeBtn);
    removeBtn.innerText = "Remove from Cart";
    removeBtn.addEventListener("click", deleteSelf);

    //function du bouton delete
    function deleteSelf() {
        // removeFromCart(this);
		buyingList.removeChild(newCard);
        // counter--;
    }


    for (let i = 0; i < myInputs.length; i++) {
        const inputValue = myInputs[i];
        if (inputValue.value != '') {
            console.log(inputValue.value);
            const li = document.createElement('li');
            newCard.appendChild(li);
            li.appendChild(document.createTextNode(inputValue.value));               
        }
    }
    // counter++;
    console.log(buyingCart);
    console.log(infoBuyingCart);

}


// tentative d'éffacement dans le tableau d'achat
function removeFromCart(parametre){
    let variableData = parametre.getAttribute("datalink");
    for(i=0; i < buyingCart.length; i++){ 
            const element = buyingCart[i]
        if(element == variableData){
                    buyingCart.splice(i, 1);
        }               
    }
    console.log(buyingArray);
}


const buyButton = document.getElementById('buy-this');


buyButton.addEventListener('click', () => createMyList());











const searchInput = document.getElementById("search-engine");
const searchItem = document.getElementById('search-item');

// --------------------------------------------------------------------
// function de recherche par nom
var randomArray = new Array();
// titre: "L'amnésie des Dalton", numero: "98", idSerie: "38", idAuteur: "44", prix: "10.50"}
// var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;  


function getPicInfoNeeded(parametre){
        return parametre.idSerie;
}

function getMePicture(parametre){
                let albumNum = parametre.numero;
                let albumTitle = parametre.titre;
                for(const entries of series){  
                    
                    if(entries[0] == element.idSerie){
                        return imgsrc = concat(entries[1].nom+albumNum+albumTitle);                        
                    }

                }                
    // var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
}


function getMeAlbums(parametre){  
    for(const items of albums){
       for(i =0; i < items.length; i++){
           const element = items[i];
           if(element.idAuteur == parametre.value){
               console.log(element.idAuteur);
               showMeTheBook(element);
           }
       }
    }
}

function getMeSeries(parametre){  
    // var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;  
    for(const items of series){
       for(i =0; i < items.length; i++){
           const element = items[i];
            console.log(element.nom);
           if(element.nom == parametre.value){
               console.log(element.nom);
               showMeTheBook(element);
           }

       }
    }
}

function getMeAuteurs(parametre){  
    // var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;  
    for(const items of auteurs){
       for(i =0; i < items.length; i++){
           const element = items[i];
            console.log(element.nom);
           if(element.nom == parametre.value){
               console.log(element.nom);
               showMeTheBook(element);
           }

       }
    }
}

const cardElement = document.getElementById('cardelement');
const miniPicture = document.getElementById('albumMini');
const biggyPicture = document.getElementById('album');

function showMeTheBook(parametre){
    if(parametre.titre || parametre.nom){
        const el = document.createElement("h3");
        el.setAttribute('class', "cardtitle");
        el.innerText = parametre.titre || parametre.nom;
        cardElement.append(el);       
    }
    
}


const serieInput = document.getElementById('serie');

searchItem.addEventListener('click', () => getMeAlbums(searchInput))


const purgeBtn = document.getElementById('purge');

purgeBtn.addEventListener('click', () => deleteEveryThing());

const miniPicSearchContainer = document.getElementById("myseries-search");



// function to delete everything from inputs
function deleteEveryThing(){
        miniPicSearchContainer.innerHTML = '';
        mySerie.value = '';
        myNumero.value = '';
        myAuthor.value = '';
        myPrice.value = '';
        myTitle.value = '';
        serieIdInput.value = '';
}

///////////////////////// Reminder of containers //////////////
// const mySerie = document.getElementById("serie");
// const myNumero = document.getElementById("numero");
// const myAuthor = document.getElementById("auteur");
// const myPrice = document.getElementById("prix");

// console.log(getMeAlbums(52));


// createCart());
// const buyValidationBtn = document.getElementById('pannier');

// buyValidationBtn.addEventListener('',() => );

// buying-list = id container

boutonPannier.addEventListener('click', () => createCart() );

const finalAchat = document.getElementById("final-achat");

// function d'utilisation des données stockées à l'achat dans le tableau
// on a stocké les IDs et on va les utiliser pour aller rechercher les livres
// et ainsi avoir les informations dont on a besoin

function createCart(){
    buyingList.innerHTML = '';
    
    for(i = 0; i < infoBuyingCart.length; i++){
        let myEle = infoBuyingCart[i];
        let whatIwant = albums.get(myEle);
        // let mySrc = getMePicture(myEle);
        // console.log(whatIwant);        
         createCartCard(whatIwant); 
         
    
        //   let imgEl = document.createElement('img');
        //   imgEl.setAttribute("src", getMePicture(myEle));
        //   finalAchat.appendChild(imgEl);   
    }
    giveFullPrice(buyingCart);
    // buyingCart.forEach(element => createCartCard(element));
    // let sum = 0;
    // for(i =0; i < buyingCart.length; i++){
    //     let mything = buyingCart[i];
    //     console.log(mything);
    //     sum += parseInt(mything);
    //     console.log(sum);
    //     console.log(buyingCart);
    // }
    // // let giveMePrice = await giveFullPrice();
    // const newh1 = document.createElement('h1');
    // newh1.setAttribute('class', "sometotal");
    // finalAchat.appendChild(newh1);
    // newh1.append(sum);
    //  boutonPannier.classList.add('hide');      
}

var sum = 0;
function giveFullPrice(parametre){    
    for(i =0; i < parametre.length; i++){
        let mything = parametre[i];
        console.log(mything);
        sum += parseInt(mything);
    } 
    const newh1 = document.createElement('h1');
    newh1.setAttribute('class', "sometotal");
    finalAchat.appendChild(newh1);
    newh1.append(sum);
}




//------------------------- REAL STUFF NOW -----------------------------------------//
var priceArray = new Array();
const infoBuyingCart = new Array();
//---------------------------------------------------------------------------------//
// 
function createParam(){
    for(i =0; i < infoBuyingCart.length; i++){
        let myEle = infoBuyingCart[i];
        console.log(myEle);     
    }
    // let giveMePrice = await giveFullPrice();
    let newh1 = document.createElement('h1');
    // buyingList.appendChild(newh1).append()
        // function de creation de l'element par l'ID       
}




function createCartCard(parametre){
    // let item = albums.get(parametre);
    let thatthing = parametre;
    let cartTitre = parametre.titre;
    let cartPrice = parametre.prix;
    // priceArray.push(parametre.prix);
    let cartIdSerie = parametre.idSerie;
    let numeroUno = parametre.numero
    
    
 
    const newDivforfinal = document.createElement("div");
    newDivforfinal.setAttribute("class", "newfinaldiv");
    buyingList.append(newDivforfinal);
    const titreEl = document.createElement('h3');
    titreEl.setAttribute('class', 'cart-titre');
    newDivforfinal.appendChild(titreEl);
    titreEl.append(cartTitre);
    const prixEl = document.createElement('p');
    prixEl.setAttribute('class', 'cart-info');
    newDivforfinal.appendChild(prixEl);
    prixEl.append(cartPrice);
    const idEl = document.createElement('p');
    idEl.setAttribute('class', 'cart-info');
    newDivforfinal.appendChild(idEl);
    idEl.append(cartIdSerie);
    const infoEl = document.createElement('p');
    infoEl.setAttribute('class', 'cart-info');
    newDivforfinal.appendChild(infoEl);
    infoEl.innerText = "Une très bonne série, il ne reste que peu d'exemplaires!!!"; 
    const newImg = document.createElement('img');
    newDivforfinal.appendChild(newImg);

    newImg.setAttribute('src', getCartPicSrc(cartIdSerie, numeroUno, thatthing));
    
    
}


// function to get the picture... ne fonctionne pas ici, peut etre un probleme de scope, à voir.
function getCartPicSrc(Idserie, AlbumNumero, IdDeLalbum){
   
		let pictureName = Idserie.nom + "-" + AlbumNumero.numero + "-" + IdDeLalbum.titre;
		let pictureNewName = pictureName.replace(/'|!|\?|\.|"|:|\$/g, "");
		let pictureFullName  = "albumsMini/"+pictureNewName+".jpg";
        return pictureFullName;
        // const newImg = document.createElement('img');
        // newImg.setAttribute('src', pictureFullName);
        // finalAchat.appendChild(newImg);    
}
