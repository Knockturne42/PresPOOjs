// var perso = {
// 	nom: "",
// 	sante: 0,
// 	puissance: 0,

// 	decrire: function() {
// 		var description = this.nom + " a " + this.sante + " points de vie, "+ this.puissance + " puissance magique (degats)";
// 		return description;
// 	}
// };




// var perso1 = Object.create(perso);
// perso1.nom = "mage feu";
// perso1.sante = 70;
// perso1.puissance = 15;






// var perso2 = Object.create(perso);
// perso2.nom = "mage terre";
// perso2.sante = 100;
// perso2.puissance = 10;






// console.log(perso2.decrire());
// console.log(perso1.decrire());






// var mageImg = document.getElementsByTagName('img');
// var mage1 = document.getElementById('hp1');
// var mage2 = document.getElementById('hp2');







// mageImg[0].addEventListener("click", function(){
// 	var hp = calc(perso1, perso2);
// 	mage2.style.width = "" + hp + "%";
// 	mage2.innerHTML = "" + hp + "% HP";
// 	if (!hp)
// 		mage2.innerHTML = "Mage Mort";
// 	console.log(perso2.decrire());
// });






// mageImg[1].addEventListener("click", function(){
// 	var hp = calc(perso2, perso1)
// 	mage1.style.width = "" + hp + "%";
// 	mage1.innerHTML = "" + hp + "% HP";
// 	if (!hp)
// 		mage1.innerHTML = "Mage Mort";
// 	console.log(perso1.decrire());
// });






// function calc(perso1, perso2)
// {
// 	if (perso2.sante < 0)
// 		return 0;
// 	perso2.sante = perso2.sante - perso1.puissance;
// 	return (perso2.sante);
// }

/*// Constructeur MonObjet
function MonObjet(vie, xp) {
	this.mvie = vie;
	this.mxp = xp;
    // Initialisation de l'objet
    // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet(100, 10);

console.log(monObj);*/