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
                case "TASMSSPM":
                    titre = "Terminaison d'appel SMS à Saint-Pierre-et-Miquelon";
                    minimumDate = "2010-10-01";
                    maximumDate = "2013-09-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/TASMSSPM.json";
                    dataAnnotation = [];
                    nomFichierExport = "TASMSSPM";
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
                    titre = "Tarif de gros d'un appel en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2007-08-30";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingGrosVoix.json";
                    dataAnnotation = [{
                        x: "2016-05-01",
                        y: 5,
                        xAjuste: -100,
                        yAjuste: 40,
                        texte: ["Gratuité de l'itinérance", "ultramarine au détail"]
                    }, {
                        x: "2017-06-15",
                        y: 3.2,
                        xAjuste: 20,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingGrosVoix";
                    break;
                case "RoamingGrosSMS":
                    titre = "Tarif de gros d'un SMS en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2009-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingGrosSMS.json";
                    dataAnnotation = [{
                        x: "2016-05-01",
                        y: 2,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "ultramarine au détail"]
                    }, {
                        x: "2017-06-15",
                        y: 1,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingGrosSMS";
                    break;
                case "RoamingGrosData":
                    titre = "Tarif de gros des données en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2012-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "€/Go";
                    json = "./donnees/RoamingGrosData.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 7.7,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "ultramarine & dans l'UE", "au détail"]
                    }];
                    nomFichierExport = "RoamingGrosData";
                    break;
                case "RoamingDetailVoix":
                    titre = "Tarif de détail d'un appel en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2007-08-30";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/min";
                    json = "./donnees/RoamingDetailVoix.json";
                    dataAnnotation = [{
                        x: "2016-05-01",
                        y: 0,
                        xAjuste: -100,
                        yAjuste: -20,
                        texte: ["Gratuité de l'itinérance", "ultramarine au détail"]
                    }, {
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingDetailVoix";
                    break;
                case "RoamingDetailSMS":
                    titre = "Tarif de détail d'un SMS en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2009-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/RoamingDetailSMS.json";
                    dataAnnotation = [{
                        x: "2016-05-01",
                        y: 0,
                        xAjuste: -100,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "ultramarine au détail"]
                    }, {
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "dans l'UE au détail"]
                    }];
                    nomFichierExport = "RoamingDetailSMS";
                    break;
                case "RoamingDetailData":
                    titre = "Tarif de détail des données en itinérance ultramarine ou dans l'Union européenne";
                    minimumDate = "2012-07-01";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/Mo";
                    json = "./donnees/RoamingDetailData.json";
                    dataAnnotation = [{
                        x: "2017-06-15",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité de l'itinérance", "ultramarine & dans l'UE", "au détail"]
                    }];
                    nomFichierExport = "RoamingDetailData";
                    break;
                case "IntraUEVoix":
                    titre = "Tarif de détail d'un appel dans l'Union européenne";
                    minimumDate = "2009-06-15";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/min";
                    json = "./donnees/IntraUEVoix.json";
                    dataAnnotation = [{
                        x: "2029-01-01",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité des appels", "dans l'UE", "au détail"]
                    }];
                    nomFichierExport = "IntraUEVoix";
                    break;
                case "IntraUESMS":
                    titre = "Tarif de détail d'un SMS dans l'Union européenne";
                    minimumDate = "2019-06-15";
                    maximumDate = "2032-06-30";
                    ordonnee = "c€/SMS";
                    json = "./donnees/IntraUESMS.json";
                    dataAnnotation = [{
                        x: "2029-01-01",
                        y: 0,
                        xAjuste: 180,
                        yAjuste: -100,
                        texte: ["Gratuité des SMS", "dans l'UE", "au détail"]
                    }];
                    nomFichierExport = "IntraUESMS";
                    break;
                default:
                    break;
            }
            showGraphe(minimumDate, maximumDate, ordonnee, json, dataAnnotation, titre);
            showTitle(titre);
        }
    } else if (display === "tableau") {
        let chartStatus = Chart.getChart("chart");
        if (chartStatus != undefined) { // Si un graphique a déjà été créé, on le détruit
            chartStatus.destroy();
        }
        document.querySelector("button.resetZoomButton").style.visibility = "hidden"; // On n'affiche pas le bouton de reset du zoom
        document.querySelector("button.exportGraphButton").style.visibility = "hidden"; // On n'affiche pas le bouton d'export du graphique 

        if (data != "") {
            showTableau(data);
        }
    }
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
            case "TASMSSPM":
                data = "TASMSSPM";
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
        case "Appel émis (itinérance ultramarine & intra-UE)":
            return "#e6194B";
            break;
        case "Appel reçu (itinérance ultramarine & intra-UE)":
            return "#3cb44b";
            break;
        case "Appel émis (itinérance intra-UE)":
            return "#42d4f4";
            break;
        case "Appel reçu (itinérance intra-UE)":
            return "#911eb4";
            break;
        case "Appel émis ou reçu (itinérance ultramarine)":
            return "#f58231";
            break;
        case "Appel émis ou reçu (itinérance ultramarine & intra-UE)":
            return "#4363d8";
            break;
        case "SMS émis (itinérance ultramarine & intra-UE)":
            return "#e6194B";
            break;
        case "SMS reçu (itinérance ultramarine & intra-UE)":
            return "#3cb44b";
            break;
        case "SMS émis (itinérance intra-UE)":
            return "#42d4f4";
            break;
        case "SMS émis (itinérance ultramarine) ou reçu (itinérance ultramarine & intra-UE)":
            return "#f58231";
            break;
        case "SMS émis ou reçu (itinérance ultramarine & intra-UE)":
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
 * @param data Les données du tableau à afficher
 */
function showTableau(data) {
    switch (data) {
        case "TAVoixFixe":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel vocal fixe";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2021";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "France Telecom - Orange";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,45";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,425";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,3";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,15";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,08";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,079";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,078";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,077";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,07";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Opérateurs alternatifs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,9";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;

        case "TAVoixMobileMetropole":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel vocal mobile en métropole";
            showTitle(titre);

            // On créé le tableau
            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mars<br>2002";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2003";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2004";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2005";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2021";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2023";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2024";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Orange & SFR";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "20,12";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "17,07";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "14,94";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "12,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "9,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "7,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "1,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "1";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "0,8";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,8";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,78";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,76";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,74";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,55";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,2";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Bouygues Telecom";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "14,79";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "11,24";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "9,24";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "8,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3,4";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Free Mobile & Full MVNO";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,6";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,1";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML
            break;

        case "TAVoixMobileZAG":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel vocal mobile dans la zone Antilles-Guyane";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.colSpan = 2;
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2004";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2005";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2021";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2023";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2024";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.textContent = "Orange Caraïbe";
            operateurCell.className = "firstColumn";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "25,69";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "20,56";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "16,44";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "13,16";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "11";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "8,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "5,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "2,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "1";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "1";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,78";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,76";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,74";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,55";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 7;
            valueCell.textContent = "0,2";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.textContent = "Digicel";
            operateurCell.className = "firstColumn";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "16";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "12,2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6,5";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.rowSpan = 2;
            operateurCell.textContent = "Outremer Telecom";
            operateurCell.className = "firstColumn";
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnTAMZAG";
            operateurCell.innerHTML = "<i>Antilles</i>";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "22,9";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "15,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "9";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "5,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "2,8";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnTAMZAG";
            operateurCell.innerHTML = "<i>Guyane</i>";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "19,2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "13,7";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.textContent = "Dauphin Telecom";
            operateurCell.className = "firstColumn";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "24,9";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "16,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "12";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "8";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "2,5";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.textContent = "UTS Caraïbe";
            operateurCell.className = "firstColumn";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "25,9";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "17,7";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML
            break;
        case "TAVoixMobileZOI":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel vocal mobile dans la zone Océan Indien";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2004";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2005";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2021";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2023";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2024";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "SRR";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "24,56";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "19,65";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "15,72";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "12,58";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "10,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "8,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "5,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "1";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,78";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,76";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,74";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,55";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.textContent = "0,2";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Orange Réunion";
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "13";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "11";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "7";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "2,8";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Outremer Telecom";
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "27,2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "17,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "11";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "5,5";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();
            var operateurCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "TAVoixMobileSPM":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel vocal mobile à Saint-Pierre-et-Miquelon";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> avril<br>2005";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juin<br>2022";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "SPM Telecom";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "24,67";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "19,212";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "16";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "14";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "12";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "10";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "10";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "0,8";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "TASMSMetropole":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel SMS en métropole";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2005";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> août<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Orange & SFR";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4,3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "1,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "1";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Bouygues Telecom";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2,17";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "TASMSZAG":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel SMS dans la zone Antilles-Guyane";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "TASMSZOI":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel SMS dans la zone Océan Indien";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";


            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "TASMSSPM":
            // On affiche le titre du tableau
            titre = "Terminaison d'appel SMS à Saint-Pierre-et-Miquelon";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "DASdTFixe":
            // On affiche le titre du tableau
            titre = "Départ d'appel vocal fixe pour la sélection du transporteur";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mars<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2019";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2020";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "CAA";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5734";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5485";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,495";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,45";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,445";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,4895";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5384";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "0,5923";
            var valueCell = tr_operateur.insertCell();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "PRO";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,6584";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,6958";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "DASVAFixe":
            // On affiche le titre du tableau
            titre = "Départ d'appel vocal fixe verrs les services à valeur ajoutée";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2006";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> octobre<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2015";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "France Telecom - Orange";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5734";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "0,5485";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,495";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,45";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "0,445";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,43";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,415";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.textContent = "0,4";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Opérateurs alternatifs";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "1,11";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 3;
            valueCell.textContent = "1,088";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,84";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,79";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,6681";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,5706";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,4731";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();
            var valueCell = tr_operateur.insertCell();

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "VGASTAnalogique":
            // On affiche le titre du tableau
            titre = "Accès au service téléphonique fixe pour les lignes analogiques";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "€/accès";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mars<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2019";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tarif mensuel VGAST";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "12,32";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Frais de création de ligne";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "56";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Frais de mise en service VGAST (accès isolé)";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "4";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Frais de mise en service VGAST (accès d'un groupement)";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "7";
            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "VGASTNumerique":
            // On affiche le titre du tableau
            titre = "Accès au service téléphonique fixe pour les lignes numériques";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "€/accès";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mars<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2019";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tarif mensuel VGAST";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "18,57";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Frais de création de ligne";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "97";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Frais de mise en service VGAST (accès isolé ou d'un groupement)";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "9";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingGrosVoix":
            // On affiche le titre du tableau
            titre = "Tarif de gros d'un appel en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "30 août<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "30 août<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2025";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "30";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "28";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "26";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "22";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "18";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "14";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "10";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3,2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2,2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,9";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingGrosSMS":
            // On affiche le titre du tableau
            titre = "Tarif de gros d'un SMS en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2025";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,4";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0,3";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingGrosData":
            // On affiche le titre du tableau
            titre = "Tarif de gros des données en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "€/Go";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin 2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2018";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2019";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2020";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2021";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2023";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2024";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2025";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2026";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2027";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "250";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "150";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "50";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "7,7";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "4,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2,5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "2";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,8";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,55";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,3";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1,1";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "1";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingDetailVoix":
            // On affiche le titre du tableau
            titre = "Tarif de détail d'un appel en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.colSpan = 2;
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "30 août<br>2007";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "30 août<br>2008";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "30 août<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2010";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2011";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mai<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.rowSpan = 2;
            operateurCell.textContent = "Appel émis";
            operateurCell.className = "firstColumn";
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamVoice";
            operateurCell.innerHTML = "<i>UE</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "49";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "46";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "43";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "39";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "35";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "29";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "24";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "19";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "19";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 4;
            valueCell.colSpan = 2;
            valueCell.textContent = "0";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamVoice";
            operateurCell.innerHTML = "<i>Outremer</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.rowSpan = 2;
            operateurCell.textContent = "Appel reçu";
            operateurCell.className = "firstColumn";
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamVoice";
            operateurCell.innerHTML = "<i>UE</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "24";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "22";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "19";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "15";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "11";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "8";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "7";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "5";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "5";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamVoice";
            operateurCell.innerHTML = "<i>Outremer</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingDetailSMS":
            // On affiche le titre du tableau
            titre = "Tarif de détail d'un SMS en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.colSpan = 2;
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2009";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> mai<br>2016";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.rowSpan = 2;
            operateurCell.textContent = "SMS émis";
            operateurCell.className = "firstColumn";
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamSMS";
            operateurCell.innerHTML = "<i>UE</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "11";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "9";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "8";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 2;
            valueCell.textContent = "6";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6";
            var valueCell = tr_operateur.insertCell();
            valueCell.rowSpan = 3;
            valueCell.colSpan = 2;
            valueCell.textContent = "0";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "secondColumnRoamSMS";
            operateurCell.innerHTML = "<i>Outremer</i>";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0";

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.colSpan = 2;
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "SMS reçu";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 5;
            valueCell.textContent = "0";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "RoamingDetailData":
            // On affiche le titre du tableau
            titre = "Tarif de détail des données en itinérance ultramarine ou dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/Mo";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2012";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2013";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2014";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 juin<br>2017";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> juillet<br>2022";
            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "70";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "45";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "20";
            var valueCell = tr_operateur.insertCell();
            valueCell.colSpan = 2;
            valueCell.textContent = "0";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML

            break;
        case "IntraUEVoix":
            // On affiche le titre du tableau
            titre = "Tarif de détail d'un appel dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/min";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 mai<br>2019";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2029";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "19";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML
            break;
        case "IntraUESMS":
            // On affiche le titre du tableau
            titre = "Tarif de détail d'un SMS dans l'Union européenne";
            showTitle(titre);

            var table = document.getElementById("table");
            table.innerHTML = ""; // On supprime un éventuel tableau qui existerait
            var tbl = document.createElement("table");
            tbl.setAttribute("class", "table");

            // On insère la première ligne avec les dates
            var header = tbl.createTHead();
            var tr_date = header.insertRow();
            header.setAttribute("class", "th");

            // On affiche l'ordonnée du tableau
            var ordonneeCell = tr_date.insertCell();
            ordonneeCell.textContent = "c€/SMS";

            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "15 mai<br>2019";
            var dateCell = tr_date.insertCell();
            dateCell.innerHTML = "1<sup>er</sup> janvier<br>2029";

            // On créé une ligne pour chaque opérateur
            var body = tbl.createTBody();

            var tr_operateur = body.insertRow();
            var operateurCell = tr_operateur.insertCell();
            operateurCell.className = "firstColumn";
            operateurCell.textContent = "Tous opérateurs";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "6";
            var valueCell = tr_operateur.insertCell();
            valueCell.textContent = "0";

            table.appendChild(tbl); // On ajoute le tableau dans la page HTML
            break;
        default:
            break;
    }
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