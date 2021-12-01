
//---- remis à jour tout le code jQuery qui ne respectait pas les normes CamelCase ni les nominations de variable en let et les constantes en const.



jQuery(document).ready(function ($) {
	const srcImg = "images/"; // emplacement des images de l'appli
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	const albumDefault = srcImg + "noComics.jpeg";
	const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
	const srcAlbum = "albums/"; // emplacement des images des albums en grand



	//  CONST pour l'affichage des livres en boutique

	const mySeriePictureContainer = document.getElementById('myseries-search');
	const serieSearchNum = document.getElementById('idserie');
	const searchEngineInput = document.getElementById('search-engine');

	// Affichage des BD
	const txtSerie = document.getElementById("serie");
	const txtNumero = document.getElementById("numero");
	const txtTitre = document.getElementById("titre");
	const txtAuteur = document.getElementById("auteur");
	const txtPrix = document.getElementById("prix");
	const imgAlbum = document.getElementById("album");
	const imgAlbumMini = document.getElementById("albumMini");

	// Event listeners pour les inputs de recherche
	
	searchEngineInput.addEventListener("change",  function () {
		searchEngine(this.value); 
	});

	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	const id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this)
	});
	// const txtSerie = document.getElementById("serie");
	serieSearchNum.addEventListener("change", function () {
		getSerie(this.value)
	});

	txtSerie.addEventListener("change",  function () {
		getSerieByName(this.value)
	});

	txtTitre.addEventListener("change", function () {
		 getBookByTitle(this.value)
	});

	txtAuteur.addEventListener("change", function () {
		getBookByAuthor(this.value)
   	});

	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	 * @param {number} num 
	 * 
	 */

	// function de recherche

	function searchEngine(parametre){
		mySeriePictureContainer.innerHTML = '';
		 
			if(parametre){
			getBookByAuthor(parametre);
			getBookByTitle(parametre);
			getSerieByName(parametre);
			}
			if(mySeriePictureContainer.innerHTML.length < 1){
				return mySeriePictureContainer.innerHTML = "Désolé aucun résultat";
			};
		
	}


	// function de recherche par auteur

	function getBookByAuthor(parametre){
		// mySeriePictureContainer.innerHTML = '';
	for (const [key, item] of auteurs.entries()) {
			//  console.log(key);
			console.log(item.nom);
			let neoname = item.nom.toLowerCase();
			let maRecherche = parametre.toLowerCase();
			if(neoname.includes(maRecherche)){
				getBooks(key);

			}	
		}

	}

	// function recherche par titre de l'ouvrage

	function getBookByTitle(parametre) {
		// mySeriePictureContainer.innerHTML = '';
		for (const [key, item] of albums.entries()) {
			//  console.log(key);
			console.log(item.titre);
			let neoname = item.titre.toLowerCase();
			let maRecherche = parametre.toLowerCase();
			if(neoname.includes(maRecherche)){
				getBooks(key);

			}	
		}

	}
	// function d'affichage d'un livre
	function getBooks(num) {
		// mySeriePictureContainer.innerHTML = '';

		// const book = albums.get(num);
		if (serie === undefined) {
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;
			id.value = 0;

		} else {
			for (const [idAlbum, myAlbum] of albums.entries()) {
				if (idAlbum == num) {
					let mySerie = series.get(myAlbum.idSerie);
					displaySeriesPicture(mySerie, myAlbum, idAlbum);
				}
			}


		}

	}

	// function recherche par nom de la série (ex: titeuf, joe, etc)
	 function getSerieByName(parametre) {
		// mySeriePictureContainer.innerHTML = '';
		for (const [key, item] of series.entries()) {
			// console.log(key);
			let neoname = item.nom.toLowerCase();
			let maRecherche = parametre.toLowerCase();	
			
			// if (item.nom.includes(parametre)){
			if (neoname.includes(maRecherche)){
				
				getSerie(key);
				}
			}
	}

	// function pour aller chercher les series suivi d'une function d'affichage en miniature
	function getSerie(num) {

		const serie = series.get(num);
		if (serie === undefined) {
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;
			id.value = 0;

		} else {
			for (const [idAlbum, myAlbum] of albums.entries()) {
				if (myAlbum.idSerie == num) {
					console.log(`${serie.nom} = ${myAlbum.titre}`);
					displaySeriesPicture(serie, myAlbum, idAlbum);
				}
			}


		}

	}
	// function d'affichage des livres par  idSerie
	function displaySeriesPicture(Objectdelaserie, AlbumEnQuestion, IdDeLalbum){
		let pictureName = Objectdelaserie.nom + "-" + AlbumEnQuestion.numero + "-" + AlbumEnQuestion.titre;
		let pictureNewName = pictureName.replace(/'|!|\?|\.|"|:|\$/g, "");
		let pictureFullName  = srcAlbumMini+pictureNewName+".jpg"
		const newImg = document.createElement('img');
		newImg.setAttribute("src", pictureFullName);
		newImg.setAttribute("datalink", IdDeLalbum)
		newImg.addEventListener("click", () => getAlbum(newImg.getAttribute("datalink")));
		mySeriePictureContainer.appendChild(newImg);
		

	}


	//function qui est donné (que j'ai un peu modifié en ajoutant quelques valeurs dont j'ai besoin pour mes functions
	// specialement le datalink pour le cadie ainsi qu'un tableau pour recuperer le cadie complet sur une autre page
	function getAlbum(num) {


		// j'ai ajouté le "num" en tant que parametre possible pour qu'il fonctionne avec mes functions
		const album = albums.get(num.value || num);


		if (album === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;

			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);

		} else {

			//on ajoute l'objet à l'array d'achat 
			// buyingArray.push(album);
			//------------------------------------

			// console.log(buyingArray);
			
			const serie = series.get(album.idSerie);
			const auteur = auteurs.get(album.idAuteur);

			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;

			let nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
			// parametre de datalink pour ma function de pannier
			let datalinkForCart = album.prix;
			let datalinkForCartInfo = num

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");


			// ajout des data-links pour les infos du pannier a la validation de l'achat
			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg",
				datalinkForCart,
				datalinkForCartInfo
			);

		}
	}

	/**
	 * Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 * 
	 * ---------------- Ajout d'un parametre nécessaire à ma fonction de panier
	 * ---------------- (dataParam qui est le datalink dont je vais avoir besoin)
	 * 
	 * 
	 * @param {object jQuery} $albumMini 
	 * @param {object jQuery} $album 
	 * @param {string} nomFic 
	 * @param {string} nomFicBig 
	 */
	function afficheAlbums($albumMini, $album, nomFicMini, nomFic, dataParam, dataParamInfo) {
		$album.stop(true, true).clearQueue().fadeOut(100, function () {
			$album.attr('src', nomFic);
			$album.attr('datalink', dataParam);
			$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
				$albumMini.attr('src', nomFicMini);
				$albumMini.attr('datalink', dataParamInfo);
				$albumMini.slideDown(200, function () {
					$album.slideDown(200);
				});
			})
		});


	}

	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	function prbImg(element) {
		// console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;

	}

});







