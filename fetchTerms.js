(async function() {
    let terms = getTermEls();
    let names = [];
    let definitions = [];
    fillNamesAndDefs(terms, names, definitions);

    console.log(terms);
    console.log(names);
    console.log(definitions);
})();

function getTermEls() {
    return Array.from(document.querySelectorAll(`.TermText`));
}

function fillNamesAndDefs(terms, names, definitions) {
    for (let i = 0; i < terms.length; i++) {
        if (i % 2 == 0) {
            names.push(terms[i].innerHTML);
        } else {
            definitions.push(terms[i].innerHTML);
        }
    }
}
