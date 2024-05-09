function addQte(idQte) {
    let qte = parseInt(document.getElementById(idQte).getAttribute("value"));

    if (qte < 9) {
        if (qte < 0)
            document.getElementById(idQte).setAttribute("value", 0);
        else
            document.getElementById(idQte).setAttribute("value", qte + 1);
    }

}

function sousQte(idQte) {
    let qte = parseInt(document.getElementById(idQte).getAttribute("value"));
    if (qte > 0) {
        if (qte > 9)
            document.getElementById(idQte).setAttribute("value", 9);
        else
            document.getElementById(idQte).setAttribute("value", qte - 1);
    }
}