var display = ""; // Variable permettant de récupérer le type (graphique ou tableau) à afficher
var data = ""; // Variable permettant de savoir quelles données à afficher
var titre = ""; // Le titre de la page
var nomFichierExport = ""; // Le nom du fichier d'export du graphique au format png

// On laisse permanente une barre à gauche pour choisir les données à afficher
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";

/**
 * Fonction d'affichage du titre de la page
 * @param titre Le titre de la page à afficher
 */
function showTitle(titre) {
    var titleElement = document.getElementById("title");
    titleElement.innerHTML = ""; // On supprime un éventuel titre qui existerait
    titleElement.insertAdjacentHTML("beforeEnd", titre);
    titleElement.setAttribute("class", "title");
}

/**
 * Fonction permettant de déterminer, en fonction du type et des données à afficher, d'afficher les bons éléments
 * @param display Le type de données (tableau ou graphique) à afficher
 * @param data Les données à afficher
 */
function dataTypeDisplay(display, data) {
    var minimumDate = ""; // La date minimale du graphique
    var maximumDate = ""; // La date maximale du graphique
    var ordonnee = ""; // L'unité du graphique ou du tableau
    var json = ""; // Le lien vers le fichier Json
    var dataAnnotation = []; // Les éventuelles annotations du graphique

    if (display === "graphique") {
        document.getElementById("table").innerHTML = ""; // On efface le tableau
        if (data != "") {
            document.querySelector("button.resetZoomButton").style.visibility = "visible"; // On affiche le bouton de reset du zoom quand un graphe est affiché uniquement
            document.querySelector("button.exportGraphButton").style.visibility = "visible"; // On affiche le bouton d'export du graphique quand un graphe est affiché uniquement
            switch (data) {
                case "TAVoixFixe":
                    titre = "Terminaison d'appel vocal fixe";
                    minimumDate = "2008-01-01";
                    maximumDate = "2025-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixFixe.json";
                    dataAnnotation = [{
                        x: "2011-01-01",
                        y: 0.3,
                        xAjuste: 220,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }, {
                        x: "2021-07-01",
                        y: 0.07,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous les", "opérateurs intra-UE"]
                    }];
                    nomFichierExport = "TAVoixFixe";
                    break;
                case "TAVoixMobileMetropole":
                    titre = "Terminaison d'appel vocal mobile en métropole";
                    minimumDate = "2002-03-01";
                    maximumDate = "2025-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileMetropole.json";
                    dataAnnotation = [{
                        x: "2011-07-01",
                        y: 2,
                        xAjuste: 30,
                        yAjuste: -130,
                        texte: ["Fin de l'asymétrie", "de Bouygues Telecom"]
                    }, {
                        x: "2013-07-01",
                        y: 0.8,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }, {
                        x: "2021-07-01",
                        y: 0.7,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous les", "opérateurs intra-UE"]
                    }];
                    nomFichierExport = "TAVoixMobileMetropole";
                    break;
                case "TAVoixMobileZAG":
                    titre = "Terminaison d'appel vocal mobile dans la zone Antilles-Guyane";
                    minimumDate = "2004-01-01";
                    maximumDate = "2025-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileZAG.json";
                    dataAnnotation = [{
                        x: "2011-01-01",
                        y: 4,
                        xAjuste: -200,
                        yAjuste: -20,
                        texte: ["Symétrie entre Orange", "Caraïbe et Digicel"]
                    }, {
                        x: "2013-01-01",
                        y: 1,
                        xAjuste: -200,
                        yAjuste: -10,
                        texte: ["Symétrie entre Orange Caraïbe", "Digicel et Outremer Telecom"]
                    }, {
                        x: "2013-07-01",
                        y: 1,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }, {
                        x: "2021-07-01",
                        y: 0.7,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous les", "opérateurs intra-UE"]
                    }];
                    nomFichierExport = "TAVoixMobileZAG";
                    break;
                case "TAVoixMobileZOI":
                    titre = "Terminaison d'appel vocal mobile dans la zone Océan Indien";
                    minimumDate = "2004-01-01";
                    maximumDate = "2025-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileZOI.json";
                    dataAnnotation = [{
                        x: "2012-01-01",
                        y: 2.8,
                        xAjuste: -200,
                        yAjuste: 10,
                        texte: ["Symétrie entre Orange Réunion", "et Outremer Telecom"]
                    }, {
                        x: "2013-01-01",
                        y: 1,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }, {
                        x: "2021-07-01",
                        y: 0.7,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous les", "opérateurs intra-UE"]
                    }];
                    nomFichierExport = "TAVoixMobileZOI";
                    break;
                case "TAVoixMobileSPM":
                    titre = "Terminaison d'appel vocal mobile à Saint-Pierre-et-Miquelon";
                    minimumDate = "2005-04-01";
                    maximumDate = "2025-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileSPM.json";
                    dataAnnotation = [];
                    nomFichierExport = "TAVoixMobileSPM";
                    break;
                case "TASMSMetropole":
                    titre = "Terminaison d'appel SMS en métropole";
                    minimumDate = "2005-07-01";
                    maximumDate = "2013-09-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSMetropole.json";
                    dataAnnotation = [{
                        x: "2011-07-01",
                        y: 1.5,
                        xAjuste: 200,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }];
                    nomFichierExport = "TASMSMetropole";
                    break;
                case "TASMSZAG":
                    titre = "Terminaison d'appel SMS dans la zone Antilles-Guyane";
                    minimumDate = "2010-10-01";
                    maximumDate = "2013-09-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSZAG.json";
                    dataAnnotation = [];
                    nomFichierExport = "TASMSZAG";
                    break;
                case "TASMSZOI":
                    titre = "Terminaison d'appel SMS dans la zone Océan Indien";
                    minimumDate = "2010-10-01";
                    maximumDate = "2013-09-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSZOI.json";
                    dataAnnotation = [];
                    nomFichierExport = "TASMSZOI";
                    break;
                case "DASdTFixe":
                    titre = "Départ d'appel vocal fixe pour la sélection du transporteur";
                    minimumDate = "2006-01-01";
                    maximumDate = "2020-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/DASdTFixe.json";
                    dataAnnotation = [{
                        x: "2019-12-31",
                        y: 0.5923,
                        xAjuste: -100,
                        yAjuste: 100,
                        texte: ["Fin de la régulation", "tarifaire aux CAA"]
                    }, {
                        x: "2019-01-01",
                        y: 0.6584,
                        xAjuste: -100,
                        yAjuste: 0,
                        texte: ["Début de la régulation", "tarifaire aux PRO"]
                    }];
                    nomFichierExport = "DASdTFixe";
                    break;
                case "DASVAFixe":
                    titre = "Départ d'appel vocal fixe vers les services à valeur ajoutée";
                    minimumDate = "2006-01-01";
                    maximumDate = "2015-10-31";
                    ordonnee = "c€/min";
                    json = "./donnees/DASVAFixe.json";
                    dataAnnotation = [{
                        x: "2015-01-01",
                        y: 0.4,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Symétrie pour tous", "les opérateurs"]
                    }];
                    nomFichierExport = "DASVAFixe";
                    break;
                case "VGASTAnalogique":
                    titre = "Accès au service téléphonique fixe pour les lignes analogiques";
                    minimumDate = "2016-03-01";
                    maximumDate = "2020-12-31";
                    ordonnee = "€/accès";
                    json = "./donnees/VGASTAnalogique.json";
                    dataAnnotation = [];
                    nomFichierExport = "VGASTAnalogique";
                    break;
                case "VGASTNumerique":
                    titre = "Accès au service téléphonique fixe pour les lignes numériques";
                    minimumDate = "2016-03-01";
                    maximumDate = "2020-12-31";
                    ordonnee = "€/accès";
                    json = "./donnees/VGASTNumerique.json";
                    dataAnnotation = [];
                    nomFichierExport = "VGASTNumerique";
                    break;
                case "RoamingGrosVoix":
                    titre = "Tarif de gros d'un appel en itinérance dans l'Union européenne";
                    minimumDate = "2007-08-30";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingGrosVoix.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 3.2,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingGrosVoix";
                    break;
                case "RoamingGrosSMS":
                    titre = "Tarif de gros d'un SMS en itinérance dans l'Union européenne";
                    minimumDate = "2009-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingGrosSMS.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 1,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingGrosSMS";
                    break;
                case "RoamingGrosData":
                    titre = "Tarif de gros des données en itinérance dans l'Union européenne";
                    minimumDate = "2012-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "€/Mo";
                    json = "./donnees/RoamingGrosData.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 7.7,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingGrosData";
                    break;
                case "RoamingDetailVoix":
                    titre = "Tarif de détail d'un appel en itinérance dans l'Union européenne";
                    minimumDate = "2007-08-30";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingDetailVoix.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingDetailVoix";
                    break;
                case "RoamingDetailSMS":
                    titre = "Tarif de détail d'un SMS en itinérance dans l'Union européenne";
                    minimumDate = "2009-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingDetailSMS.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingDetailSMS";
                    break;
                case "RoamingDetailData":
                    titre = "Tarif de détail des données en itinérance dans l'Union européenne";
                    minimumDate = "2012-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/Mo";
                    json = "./donnees/RoamingDetailData.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingDetailData";
                    break;
                case "IntraUEVoix":
                    titre = "Tarif de détail d'un appel dans l'Union européenne";
                    minimumDate = "2009-06-15";
                    maximumDate = "2024-12-31";
                    ordonnee = "c€/min";
                    json = "./donnees/IntraUEVoix.json";
                    dataAnnotation = [];
                    nomFichierExport = "IntraUEVoix";
                    break;
                case "IntraUESMS":
                    titre = "Tarif de détail d'un SMS dans l'Union européenne";
                    minimumDate = "2019-06-15";
                    maximumDate = "2024-12-31";
                    ordonnee = "c€/SMS";
                    json = "./donnees/IntraUESMS.json";
                    dataAnnotation = [];
                    nomFichierExport = "IntraUESMS";
                    break;
                default:
                    break;
            }
            showGraphe(minimumDate, maximumDate, ordonnee, json, dataAnnotation, titre);
        }
    } else if (display === "tableau") {
        let chartStatus = Chart.getChart("chart");
        if (chartStatus != undefined) { // Si un graphique a déjà été créé, on le détruit
            chartStatus.destroy();
        }
        document.querySelector("button.resetZoomButton").style.visibility = "hidden"; // On n'affiche pas le bouton de reset du zoom
        document.querySelector("button.exportGraphButton").style.visibility = "hidden"; // On n'affiche pas le bouton d'export du graphique        
        if (data != "") {
            switch (data) {
                case "TAVoixFixe":
                    titre = "Terminaison d'appel vocal fixe";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixFixe.json";
                    break;
                case "TAVoixMobileMetropole":
                    titre = "Terminaison d'appel vocal mobile en métropole";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileMetropole.json";
                    break;
                case "TAVoixMobileZAG":
                    titre = "Terminaison d'appel vocal mobile dans la zone Antilles-Guyane";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileZAG.json";
                    break;
                case "TAVoixMobileZOI":
                    titre = "Terminaison d'appel vocal mobile dans la zone Océan Indien";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileZOI.json";
                    break;
                case "TAVoixMobileSPM":
                    titre = "Terminaison d'appel vocal mobile à Saint-Pierre-et-Miquelon";
                    ordonnee = "c€/min";
                    json = "./donnees/TAVoixMobileSPM.json";
                    break;
                case "TASMSMetropole":
                    titre = "Terminaison d'appel SMS en métropole";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSMetropole.json";
                    break;
                case "TASMSZAG":
                    titre = "Terminaison d'appel SMS dans la zone Antilles-Guyane";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSZAG.json";
                    break;
                case "TASMSZOI":
                    titre = "Terminaison d'appel SMS dans la zone Océan Indien";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSZOI.json";
                    break;
                case "DASdTFixe":
                    titre = "Départ d'appel vocal fixe pour la sélection du transporteur";
                    ordonnee = "c€/min";
                    json = "./donnees/DASdTFixe.json";
                    break;
                case "DASVAFixe":
                    titre = "Départ d'appel vocal fixe vers les services à valeur ajoutée";
                    ordonnee = "c€/min";
                    json = "./donnees/DASVAFixe.json";
                    break;
                case "VGASTAnalogique":
                    titre = "Accès au service téléphonique fixe pour les lignes analogiques";
                    ordonnee = "€/accès";
                    json = "./donnees/VGASTAnalogique.json";
                    break;
                case "VGASTNumerique":
                    titre = "Accès au service téléphonique fixe pour les lignes numériques";
                    ordonnee = "€/accès";
                    json = "./donnees/VGASTNumerique.json";
                    break;
                case "RoamingGrosVoix":
                    titre = "Tarif de gros d'un appel en itinérance dans l'Union européenne";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingGrosVoix.json";
                    break;
                case "RoamingGrosSMS":
                    titre = "Tarif de gros d'un SMS en itinérance dans l'Union européenne";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingGrosSMS.json";
                    break;
                case "RoamingGrosData":
                    titre = "Tarif de gros des données en itinérance dans l'Union européenne";
                    ordonnee = "€/Mo";
                    json = "./donnees/RoamingGrosData.json";
                    break;
                case "RoamingDetailVoix":
                    titre = "Tarif de détail d'un appel en itinérance dans l'Union européenne";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingDetailVoix.json";
                    break;
                case "RoamingDetailSMS":
                    titre = "Tarif de détail d'un SMS en itinérance dans l'Union européenne";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingDetailSMS.json";
                    break;
                case "RoamingDetailData":
                    titre = "Tarif de détail des données en itinérance dans l'Union européenne";
                    ordonnee = "c€/Mo";
                    json = "./donnees/RoamingDetailData.json";
                    break;
                case "IntraUEVoix":
                    titre = "Tarif de détail d'un appel dans l'Union européenne";
                    ordonnee = "c€/min";
                    json = "./donnees/IntraUEVoix.json";
                    break;
                case "IntraUESMS":
                    titre = "Tarif de détail d'un SMS dans l'Union européenne";
                    ordonnee = "c€/SMS";
                    json = "./donnees/IntraUESMS.json";
                    break;
                default:
                    break;
            }
            showTableau(json, ordonnee);
        }
    }
    showTitle(titre);
}

// Gestionnaire du bouton permettant de remettre le zoom du graphique au niveau initial
document.querySelector("button.resetZoomButton").addEventListener("click", function() {
    let chart = Chart.getChart("chart");
    chart.resetZoom();
})

// Gestionnaire du bouton permettant d'exporter le graphique
document.querySelector("button.exportGraphButton").addEventListener("click", function() {
    var chart = Chart.getChart("chart");
    chart.options.plugins.title.display = true;
    chart.update("none");

    var a = document.createElement("a"); // On définit une balise fictive pour le téléchargement
    a.href = chart.toBase64Image("image/png", 1); // On convertit le graphique en png avec la meilleure qualité
    a.download = nomFichierExport;
    a.click();

    chart.options.plugins.title.display = false;
    chart.update("none");
});

// Gestionnaire de clics pour savoir s'il faut afficher le tableau ou le graphique
document.querySelector("div.btn-group-display").addEventListener("change", function(evt) {
    // On vérifie si un bouton radio a déclenché un évènement
    if (evt.target.type === "radio") {
        if (evt.target.value === "graphique") {
            display = "graphique";
        } else if (evt.target.value === "tableau") {
            display = "tableau";
        }
    }
    dataTypeDisplay(display, data); // On appelle la fonction d'affichage dès qu'un bouton est cliqué
});

// Gestionnaire des éléments rétractables dans la barre de navigation
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Gestionnaire de clics pour savoir quelles données sont à afficher
document.querySelector("div.btn-group-data").addEventListener("change", function(evt) {
    // On vérifie si un bouton radio a déclenché un évènement
    if (evt.target.type === "radio") {
        // Selon le bouton coché, on affiche le graphique correspondant
        switch (evt.target.value) {
            case "TAVoixFixe":
                data = "TAVoixFixe";
                break;
            case "TAVoixMobileMetropole":
                data = "TAVoixMobileMetropole";
                break;
            case "TAVoixMobileZAG":
                data = "TAVoixMobileZAG";
                break;
            case "TAVoixMobileZOI":
                data = "TAVoixMobileZOI";
                break;
            case "TAVoixMobileSPM":
                data = "TAVoixMobileSPM";
                break;
            case "TASMSMetropole":
                data = "TASMSMetropole";
                break;
            case "TASMSZAG":
                data = "TASMSZAG";
                break;
            case "TASMSZOI":
                data = "TASMSZOI";
                break;
            case "DASdTFixe":
                data = "DASdTFixe";
                break;
            case "DASVAFixe":
                data = "DASVAFixe";
                break;
            case "VGASTAnalogique":
                data = "VGASTAnalogique";
                break;
            case "VGASTNumerique":
                data = "VGASTNumerique";
                break;
            case "RoamingGrosVoix":
                data = "RoamingGrosVoix";
                break;
            case "RoamingGrosSMS":
                data = "RoamingGrosSMS";
                break;
            case "RoamingGrosData":
                data = "RoamingGrosData";
                break;
            case "RoamingDetailVoix":
                data = "RoamingDetailVoix";
                break;
            case "RoamingDetailSMS":
                data = "RoamingDetailSMS";
                break;
            case "RoamingDetailData":
                data = "RoamingDetailData";
                break;
            case "IntraUEVoix":
                data = "IntraUEVoix";
                break;
            case "IntraUESMS":
                data = "IntraUESMS";
                break;
            default:
                break;
        }
    }
    dataTypeDisplay(display, data); // On appelle la fonction d'affichage dès qu'un bouton est cliqué
});

/**
 * Fonction convertissant la date au format attendu par Chart JS
 * @param date La date au format du Json
 * @return dateChart La date au format de Chart JS
 */
function convertDateGraphe(date) {
    var dateChart;
    var jour = date.substring(0, 2);
    var mois = date.substring(3, 5);
    var annee = date.substring(6, 10);

    dateChart = annee + "-" + mois + "-" + jour;
    return dateChart;
}

/**
 * Fonction convertissant la date dans un format plus lisible pour un tableau
 * @param date La date dans le format initial
 * @return dateTable La date dans le format textuel
 */
function convertDateTable(date) {
    var jour = date.substring(0, 2);
    var mois = date.substring(3, 5);
    var annee = date.substring(6, 10);
    var months = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

    if (jour.substring(0, 1) == "0") {
        jour = jour.substring(1, 2);
    }

    if (mois.substring(0, 1) == "0") {
        mois = mois.substring(1, 2);
    }

    var ord = jour == "1" ? "<sup>er</sup>" : "";
    var dateTable = jour + ord + " " + months[mois - 1] + "<br>" + annee;
    return dateTable;
}

/**
 * Fonction permettant de gérer la couleur à afficher en fonction de l'id du fichier Json en entrée
 * @param id Le nom de l'id présent dans le fichier Json
 * @return La couleur que l'on souhaite voir affichée
 */
function getColor(id) {
    switch (id) {
        case "France Telecom - Orange":
            return "#e6194B";
            break;
        case "Opérateurs alternatifs":
            return "#3cb44b";
            break;
        case "Tous opérateurs":
            return "#4363d8";
            break;
        case "CAA":
            return "#e6194B";
            break;
        case "PRO":
            return "#3cb44b";
            break;
        case "Orange & SFR":
            return "#e6194B";
            break;
        case "Bouygues Telecom":
            return "#3cb44b";
            break;
        case "Orange & SFR & Bouygues Telecom":
            return "#800000";
            break;
        case "Free Mobile & Full MVNO":
            return "#42d4f4";
            break;
        case "Orange Caraïbe":
            return "#e6194B";
            break;
        case "Digicel":
            return "#3cb44b";
            break;
        case "Outremer Telecom (Guyane)":
            return "#000075";
            break;
        case "Outremer Telecom (Antilles)":
            return "#808000";
            break;
        case "Dauphin Telecom":
            return "#dcbeff";
            break;
        case "UTS Caraïbe":
            return "#469990";
            break;
        case "Orange Caraïbe & Digicel":
            return "#42d4f4";
            break;
        case "Outremer Telecom":
            return "#911eb4";
            break;
        case "Orange Caraïbe & Digicel & Outremer Telecom":
            return "#f58231";
            break;
        case "Dauphin Telecom & UTS Caraïbe":
            return "#800000";
            break;
        case "SRR":
            return "#e6194B";
            break;
        case "Orange Réunion":
            return "#3cb44b";
            break;
        case "Orange Réunion & Outremer Telecom":
            return "#800000";
            break;
        case "SPM Telecom":
            return "#e6194B";
            break;
        case "Appel émis":
            return "#e6194B";
            break;
        case "Appel reçu":
            return "#3cb44b";
            break;
        case "Appel émis ou reçu":
            return "#4363d8";
            break;
        case "SMS émis":
            return "#e6194B";
            break;
        case "SMS reçu":
            return "#3cb44b";
            break;
        case "SMS émis ou reçu":
            return "#4363d8";
            break;
        case "Tarif mensuel VGAST":
            return "#e6194B";
            break;
        case "Frais de création de ligne":
            return "#3cb44b";
            break;
        case "Frais de mise en service VGAST (accès isolé)":
            return "#42d4f4";
            break;
        case "Frais de mise en service VGAST (accès d'un groupement)":
            return "#4363d8";
            break;
        case "Frais de mise en service VGAST (accès isolé ou d'un groupement)":
            return "#4363d8";
            break;
        default:
            break;
    }
}

/**
 * Fonction d'affichage du graphique
 * @param dateMin La date minimale à afficher
 * @param dateMax La date maximale à afficher
 * @param ordonnee L'unité du graphique
 * @param jsonFile Le lien vers le fichier Json
 * @param dataAnnotation Les annotations à afficher sur le graphique
 */
function showGraphe(dateMin, dateMax, ordonnee, jsonFile, dataAnnotation, titre) {
    var weeklyHistoryChartEl = document.getElementById("chart");
    var ctx = weeklyHistoryChartEl.getContext("2d");
    ctx.beginPath();

    // Si un graphique a déjà été créé précédemment, on le détruit d'abord
    let chartStatus = Chart.getChart("chart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }

    // On ajoute dynamiquement d'éventuelles annotations sur le graphique
    const annotations = new Array();
    for (var i = 0; i < dataAnnotation.length; i++) {
        annotations.push({
            type: "label",
            xValue: dataAnnotation[i].x,
            yValue: dataAnnotation[i].y,
            xAdjust: dataAnnotation[i].xAjuste,
            yAdjust: dataAnnotation[i].yAjuste,
            backgroundColor: "#FFB777",
            borderColor: "#000000",
            content: dataAnnotation[i].texte,
            textAlign: "start",
            callout: {
                display: true,
                side: 10,
                borderColor: "#000000",
            },
        });
    }

    var myChart = new Chart(weeklyHistoryChartEl, {
        type: "line",
        options: {
            responsive: true,
            elements: {
                point: {
                    radius: 0,
                },
            },
            interaction: {
                mode: "nearest",
                axis: "xy",
                intersect: false,
            },
            plugins: {
                customCanvasBackgroundColor: { // On définit pour l'export du graphique la couleur de fond
                    color: "white",
                },
                zoom: {
                    limits: {
                        x: {
                            min: "original",
                            max: "original",
                        },
                        y: {
                            min: "original",
                            max: "original",
                        },
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                        },
                        pinch: {
                            enabled: true,
                        },
                        drag: {
                            enabled: true,
                        },
                        mode: "xy",
                    },
                    pan: {
                        enabled: true,
                        mode: "xy",
                    },
                },
                title: { // On définit le titre
                    display: false,
                    text: titre,
                    align: "center",
                    color: "#000000",
                    font: {
                        weight: 700,
                        size: 14,
                    },
                },
                annotation: { // On définit d'éventuelles annotations sur le graphique
                    annotations: annotations,
                },
                tooltip: { // On définit l'info-bulle
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || "";

                            if (label) {
                                label = label + " : ";
                            }
                            if (context.parsed.y !== null) {
                                label = label + context.parsed.y.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 4
                                }) + " " + ordonnee;
                            }
                            return label;
                        }

                    }
                },
                legend: {
                    display: true,
                    position: "top",
                    align: "center",
                },
            },
            scales: { // On définit les échelles de temps pour l'axe des abscices
                x: {
                    grid: {
                        display: false,
                    },
                    type: "time",
                    time: {
                        min: dateMin,
                        max: dateMax,
                        unit: "day",
                        tooltipFormat: "dd/MM/yyyy",
                        displayFormats: {
                            day: "dd/MM/yyyy"
                        },
                    },
                    parsing: false,
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: ordonnee,
                        align: "center",
                        color: "#000000",
                        font: {
                            weight: 700,
                            style: "italic",
                        }
                    },
                },
            }
        },
        plugins: [pluginBackgroundColor],
    });
    fetch(jsonFile).then(response => { // On récupère le fichier Json
        return response.json();
    }).then(varData => { // On applique le traitement aux données du fichier Json

        // On récupère la racine du fichier Json
        var rootKey;
        for (var prop in varData) {
            rootKey = prop;
        }

        var nombreElements = Object.keys(varData[rootKey]).length; // On récupère le nombre d'éléments du fichier Json
        var temp = ""; // Variable temporaire pour récupérer une partie des données
        var datasets = '{"datasets":['; // Variable permettant de récupérer les données dans le bon format
        var values = ""; // Variable permettant de récupérer les données par type d'opérateur dans le bon format

        // On boucle sur l'ensemble des id du JSON
        for (let pas = 0; pas < nombreElements; pas++) {
            values = "["; // On ajoute le symbole par définir le début des données temporelles du fichier Json

            var nbValues = Object.keys(varData[rootKey][pas].donnees).length; // On récupère le nombre de données temporelles par type d'opérateur

            // On boucle sur l'ensemble des éléments temporels de chaque id du Json
            for (let pasVal = 0; pasVal < nbValues; pasVal++) {
                values = values + '{"x":"' + convertDateGraphe(varData[rootKey][pas].donnees[pasVal].dateEntreeVigueur) + '","y":' + varData[rootKey][pas].donnees[pasVal].tarif + '},';
            }
            values = values.slice(0, -1); // On supprime le dernier caractère, car une virgule en trop est insérée automatiquement
            values = values + "]"; // On ajoute le symbole pour définir la fin des données temporelles du fichier Json

            temp = '{"data":' + values + ',"label":"' + varData[rootKey][pas].operateur + '","borderColor":"' + getColor(varData[rootKey][pas].operateur) + '","backgroundColor": "' + getColor(varData[rootKey][pas].operateur) + '", "fill": false, "stepped": true},'; // On ajoute les données, au format de Chart JS, pour les injecter par la suite dans le graphique
            datasets = datasets + temp; // On ajoute toutes les données dans un même dataset
        }
        datasets = datasets.slice(0, -1); // On supprime le dernier caractère, car une virgule en trop est insérée automatiquement
        datasets = datasets + ']}'; // On ajoute ce caractère pour que le JSON soit dans un format valide

        myChart.data = JSON.parse(datasets); // On injecte les données au format de Chart JS

        myChart.update(); // On met à jour le graphique avec les données
    });
    ctx.closePath();
    ctx.stroke();
}

/**
 * Fonction d'affichage du tableau
 * @param json Le lien vers le fichier Json
 * @param ordonnee L'unité du tableau
 */
function showTableau(json, ordonnee) {
    var table = document.getElementById("table");
    table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
    var dataEntreeVigueur = []; // Tableau contenant la liste des dates d'entrée en vigueur
    var dataOperateur = []; // Tableau contenant la liste des opérateurs
    var dataJson = []; // Tableau contenant les éléments du fichier Json

    fetch(json).then(response => { // On récupère le fichier Json
        return response.json();
    }).then(varData => { // On applique le traitement aux données du fichier Json
        // On récupère la racine du fichier Json
        var rootKey;
        for (var prop in varData) {
            rootKey = prop;
        }

        var nombreElements = Object.keys(varData[rootKey]).length; // On récupère le nombre d'éléments du fichier Json
        // On boucle sur l'ensemble des éléments temporels de chaque id du Json
        for (let pas = 0; pas < nombreElements; pas++) {
            var tempData = []; // Tableau stockant temporairement toutes les données pour un opérateur
            var nbValues = Object.keys(varData[rootKey][pas].donnees).length; // On récupère le nombre de données temporelles par type d'opérateur
            for (let pasVal = 0; pasVal < nbValues - 1; pasVal++) { // On ne conserve pas la dernière valeur qui est "incluse" dans tous les cas ailleurs
                tempData.push({ // On récupère chaque donnée du fichier Json
                    operateur: varData[rootKey][pas].operateur,
                    date: varData[rootKey][pas].donnees[pasVal].dateEntreeVigueur,
                    tarif: varData[rootKey][pas].donnees[pasVal].tarif
                });
                dataEntreeVigueur.push(varData[rootKey][pas].donnees[pasVal].dateEntreeVigueur); // On ajoute les données dans un tableau qui servira à supprimer les dates en doublon
                dataOperateur.push(varData[rootKey][pas].operateur); // On ajoute les données dans un tableau qui servira à supprimer les opérateurs en doublon
            }
            dataJson = dataJson.concat(tempData); // On concatène les données dans un tableau unique
        }

        var setDataEntreeVigueur = new Set(dataEntreeVigueur); // On supprime les dates en doublon
        dataEntreeVigueur = Array.from(setDataEntreeVigueur).sort(function(a, b) { // On trie les dates dans l'ordre chronologique
            a = a.split('/').reverse().join('');
            b = b.split('/').reverse().join('');
            return a.localeCompare(b);
        });

        dataOperateur = new Set(dataOperateur); // On supprime les opérateurs en doublon

        /// On créé le tableau
        var tbl = document.createElement("table");
        tbl.setAttribute("class", "table");

        // On insère la première ligne avec les dates
        var header = tbl.createTHead();
        var tr_date = header.insertRow();
        header.setAttribute("class", "th");

        tr_date.insertCell().textContent = ordonnee;
        dataEntreeVigueur.forEach((date) => {
            tr_date.insertCell().textContent = date;
        })

        // On créé une ligne pour chaque opérateur
        var body = tbl.createTBody();
        dataOperateur.forEach((operateur) => {
            var tr_operateur = body.insertRow();
            tr_operateur.insertCell().textContent = operateur;
            for (let column = 1; column < tbl.rows[0].cells.length; column++) { // Pour chaque colonne du tableau HTML
                let obj = dataJson.find(o => o.operateur === operateur && o.date === tbl.rows[0].cells[column].innerHTML); // On recherche dans le tableau la valeur correspondante
                if (obj != undefined) { // Si un élément est trouvé, on l'affiche
                    tr_operateur.insertCell().textContent = obj.tarif.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 4
                    });
                } else { // Si aucun élément n'est trouvé, on affiche un élément vide
                    tr_operateur.insertCell();
                }
            }
        })

        // On convertit le format de la date dans un format plus lisible dans un tableau
        for (var j = 1; j < tbl.rows[0].cells.length; j++) {
            tbl.rows[0].cells[j].innerHTML = convertDateTable(tbl.rows[0].cells[j].innerHTML);
        }

        table.appendChild(tbl); // On ajoute le tableau dans la page HTML
    });
}

// Plugin de Chart JS pour définir la couleur de fond de l'image qui sera exportée
const pluginBackgroundColor = {
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart, args, options) => {
        const {
            ctx
        } = chart;
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = options.color || '#ffffff';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};