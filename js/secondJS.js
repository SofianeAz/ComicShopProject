

//--------------------------------------------------- MY WORK NOW --------------------


// console.log(albums);
// console.log(series);

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
const mainCont = document.getElementById('main');



console.log(buyingArray)

// success info element
const success = document.getElementById('success');

function hideSuccess(){
    return success.classList.add('hide'), 10000;
}

const tutorialPannier = document.getElementById('buytutorial');

/////////////////////////////////ATTENTION PUSH DANS LES TABLEAUX A VERIFIER
/////////////////////////////////////////////////////////////////////////////////

// Function de création de la liste d'achat avec bouton pour supprimer son contenu
//---------- ---------------------------------------------------------------------
function createMyList() {
    buyingList.classList.remove('hide');
    let buyingCartItem = myBigImage.getAttribute('datalink');
    let buyingCartInfo = miniPicture.getAttribute('datalink');
    // console.log('what I AM LOOKING AT');
    // console.log(buyingCartInfo);
    // console.log(buyingCartItem);
   

    // recuperation de l'id
    infoBuyingCart.push(buyingCartInfo);
    // recuperation du prix
    buyingCart.push(buyingCartItem);
    console.log(infoBuyingCart);
  

	// let counter = 0;
	// let item = buyingArray[counter];

    // affichage du bouton pour aller à son pannier 
    if(buyingCart.length != 0){
        boutonPannier.classList.add('pulsation');
        boutonPannier.classList.remove('hide');
        tutorialPannier.classList.remove('hide');
            //success
            success.classList.remove('hide');
    }
    // ajoute de l'objet dans le tableau d'achat
    
    

    const newCard = document.createElement("div");
    newCard.setAttribute("class", "newcard");
    buyingList.appendChild(newCard);
    const removeBtn = document.createElement("button")
    removeBtn.setAttribute("class", "btnremover");	
    // removeBtn.setAttribute("id", "btnremover");


	removeBtn.setAttribute("datalink", buyingCart.length)
    newCard.appendChild(removeBtn);
    removeBtn.innerText = "Remove from Cart";
    removeBtn.addEventListener("click", deleteSelf);

    //function du bouton delete
    ///////////////////////////////////////////////////------------------ ZONE DEFFACEMENT --------------/////////////////////////////////
    function deleteSelf() {
                console.log('///////////////');
                console.log(buyingCart);
                console.log(buyingCart);
                const index = this.getAttribute('data-link');
                infoBuyingCart.splice(index, 1); // 2nd parameter means remove one item only
                buyingCart.splice(index, 1);
		        buyingList.removeChild(newCard);
                console.log(buyingCart);
                console.log(buyingCart);
                console.log('///////////////');
    }


    for (let i = 0; i < myInputs.length; i++) {
        const inputValue = myInputs[i];
        // console.log(myInputs[i].getAttribute('id'));
        if(myInputs[i].getAttribute('id') == 'titre'){
            console.log(inputValue.value);
            const li = document.createElement('li');
            newCard.appendChild(li);
            let text = 'titre : '+inputValue.value+".";
            li.appendChild(document.createTextNode(text)); 
        }
        if(myInputs[i].getAttribute('id') == 'serie'){
            console.log(inputValue.value);
            const li = document.createElement('li');
            newCard.appendChild(li);
            let text = 'Serie : '+inputValue.value+".";
            li.appendChild(document.createTextNode(text)); 
        }
        if(myInputs[i].getAttribute('id') == 'auteur'){
            console.log(inputValue.value);
            const li = document.createElement('li');
            newCard.appendChild(li);
            let text = 'Auteur : '+inputValue.value+".";
            li.appendChild(document.createTextNode(text)); 
        }
        if(myInputs[i].getAttribute('id') == 'prix'){
            console.log(inputValue.value);
            const li = document.createElement('li');
            newCard.appendChild(li);
            let text = 'Prix : '+inputValue.value+" € TTC.";
            li.appendChild(document.createTextNode(text)); 
        }
    }
}


// tentative d'éffacement dans le tableau d'achat ---- datalink sur le bouton + un "this" en parametre à l'appel ---- pas encore éffectué
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

// const serieId = document.getElementById('idserie');

// function to delete everything from inputs
function deleteEveryThing(){
        miniPicSearchContainer.innerHTML = '';
        mySerie.value = 0;
        serieIdInput.value = 0;
        myNumero.value = '';
        myAuthor.value = '';
        myPrice.value = '';
        myTitle.value = '';
        searchInput.value ='';
       
        
}

///////////////////////// Reminder of containers //////////////
//
// const serieIdInput = document.getElementById("idserie");
// const mySerie = document.getElementById("serie");
// const myNumero = document.getElementById("numero");
// const myAuthor = document.getElementById("auteur");
// const myPrice = document.getElementById("prix");
// const myTitle = document.getElementById('titre');
// console.log(getMeAlbums(52));


// createCart());
// const buyValidationBtn = document.getElementById('pannier');

// buyValidationBtn.addEventListener('',() => );

// buying-list = id container

boutonPannier.addEventListener('click', () =>{ 
                        // setTimeout(mainCont.classList.add('hide'), 10000);
                        createCart();
});

boutonPannier.addEventListener('touchstart', () =>{ 
    // setTimeout(mainCont.classList.add('hide'), 10000);
    createCart();
});


// const finalAchat = document.getElementById("final-achat");

// function d'utilisation des données stockées à l'achat dans le tableau
// on a stocké les IDs et on va les utiliser pour aller rechercher les livres
// et ainsi avoir les informations dont on a besoin

function createCart(){
    
    buyingList.innerHTML = '';
    miniPicSearchContainer.innerHTML = '';
    if(document.getElementById('serie').value != ''){
          // creation du conteneur du caddy final
                     const finalCont = document.createElement("div");
                     finalCont.setAttribute('id', 'finalcont')
                     finalCont.setAttribute('class', 'container border border-dark');
                     buyingList.append(finalCont);
                for(i = 0; i < infoBuyingCart.length; i++){
                    let myEle = infoBuyingCart[i];
                    let whatIwant = albums.get(myEle);
                    // let mySrc = getMePicture(myEle);
                    console.log(whatIwant);   
                    console.log('hello world');     
                     createCartCard(whatIwant); 
         
    
        //   let imgEl = document.createElement('img');
        //   imgEl.setAttribute("src", getMePicture(myEle));
        //   finalAchat.appendChild(imgEl);   
        }
    console.log(buyingCart);
    giveFullPrice(buyingCart);
    mainCont.classList.add('hide')
    } 
    
}


function giveFullPrice(arrParam){ 
    let sum = 0;   
    for(i =0; i < arrParam.length; i++){
        if(arrParam[i] != null){
        let mything = arrParam[i];
        console.log(mything);
        sum += parseFloat(mything);
        }
    } 
    const finalAchat = document.createElement('div');
    finalAchat.setAttribute('class', 'container primary border-dark');
    buyingList.appendChild(finalAchat);
    const newh1 = document.createElement('h4');
    newh1.setAttribute('class', "sometotal");
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'container primary');
    buyingList.append(newDiv)
    newDiv.append(newh1);
    // finalAchat.appendChild(newh1);
    console.log(sum);
    newh1.append('le prix total est de : '+sum+" € TTC");
}




//---------------------------------------------------------------------------------//
var priceArray = new Array();
const infoBuyingCart = new Array();
//---------------------------------------------------------------------------------//
// 
// function createParam(){
//     for(i =0; i < infoBuyingCart.length; i++){
//         let myEle = infoBuyingCart[i];
//         console.log(myEle);     
//     }
//     // let giveMePrice = await giveFullPrice();
//     let newh1 = document.createElement('h1');
//     // buyingList.appendChild(newh1).append()   
// }




function createCartCard(parametre){
    // let item = albums.get(parametre);
    // idAuteur: "10"
    // idSerie: "9"
    // numero: "08"
    // prix: "14.50"
    // titre: "La bête fabuleuse"
    const scs = document.getElementById('success');
    scs.classList.add('hide');
    const buyBtnHide = document.getElementById('buy-this');
    buyBtnHide.classList.add('hide');
    // serie.nom + "-" + album.numero + "-" + album.titre;
    console.log(parametre);
    let obj = series.get(parametre.idSerie);
    console.log(obj);
    let serieName  = obj.nom;
    let obj2 = auteurs.get(parametre.idAuteur);
    console.log(obj2);
    let authorName = obj2.nom;
    let thatthing = parametre;
    let titre = parametre.titre;
    let cartPrice = parametre.prix;
    // priceArray.push(parametre.prix);
    

    // conteneur du caddy final
    const ff = document.getElementById('finalcont');
    
    
    //container final du caddie
    const newDivforfinal = document.createElement("div");
    newDivforfinal.setAttribute("class", "newcard border border-dark");
    ff.append(newDivforfinal);
    // newDivforfinal.style.width = '10vw';
    // newDivforfinal.style.height = '10vh';
    // newDivforfinal.style.marginLeft = '20px';

      // img
      const newImg = document.createElement('img');
      newDivforfinal.appendChild(newImg);
      let picName = serieName + "-" + parametre.numero + "-" +  parametre.titre;
      let picRealName = picName.replace(/'|!|\?|\.|"|:|\$/g, "");
      newImg.setAttribute('src', "albumsMini/"+picRealName+".jpg");
      newImg.setAttribute('class', 'card-img-top');
    // titre
    const titreEl = document.createElement('h3');
    titreEl.setAttribute('class', 'card-title border border-dark');
    newDivforfinal.appendChild(titreEl);
    titreEl.append(document.createTextNode('titre : '+titre));

    // // prix
    // const prixEl = document.createElement('p');
    // prixEl.setAttribute('class', 'card-text');
    // newDivforfinal.appendChild(prixEl);
    // prixEl.append(cartPrice);
    // // nom
    // const idEl = document.createElement('p');
    // idEl.setAttribute('class', 'card-text');
    // newDivforfinal.appendChild(idEl);
    // idEl.append(serieName);
    // // auteur
    // const auteurEl = document.createElement('p');
    // auteurEl.setAttribute('class', 'card-text');
    // newDivforfinal.appendChild(auteurEl);
    // auteurEl.append(authorName);
    // //  info
    // const infoEl = document.createElement('p');
    // infoEl.setAttribute('class', 'card-text');
    // newDivforfinal.appendChild(infoEl);
    // infoEl.innerText = "Une très bonne série, il ne reste que peu d'exemplaires!!!"; 
        // serie.nom + "-" + album.numero + "-" + album.titre;
    // newImg.setAttribute('src', getCartPicSrc(cartIdSerie, numeroUno, thatthing));
    
    
}


// function to get the picture... ne fonctionne pas ici, peut etre un probleme de scope, à voir.
// function getCartPicSrc(Idserie, AlbumNumero, IdDeLalbum){
//    //serie.nom + "-" + album.numero + "-" + album.titre;
// 		let pictureName = Idserie.nom + "-" + AlbumNumero.numero + "-" + IdDeLalbum.titre;
// 		let pictureNewName = pictureName.replace(/'|!|\?|\.|"|:|\$/g, "");
// 		let pictureFullName  = "albumsMini/"+pictureNewName+".jpg";
//         console.log(pictureFullName);
//         return pictureFullName;
//         // const newImg = document.createElement('img');
//         // newImg.setAttribute('src', pictureFullName);
//         // finalAchat.appendChild(newImg);    
// }



