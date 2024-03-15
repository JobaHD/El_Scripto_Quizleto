names = [
    "el artículo",
    "la entrevista",
    "ambas fuentes, las dos fuentes",
    "la (primera, segunda, tercera) fuente",
    "la fuente auditiva",
    "la grabación",
    "la gráfica",
    "el gráfico/ la gráfica",
    "la tabla, el gráfico de barras",
    "Como afirma / describe / indica / muestra le fuente....",
    "Con referencia a....",
    "Con relación a....",
    "Con respecto a.... / En cuanto a....",
    "De acuerdo con.... / Según....",
    "Referente a lo que dice / relata la fuente....",
    "A mi parecer.... / En mi opinión....",
    "A pesar de (que)....",
    "Al analizar / examinar las fuentes, creo que....",
    "Dado que....",
    "En primer (segundo, tercer) lugar....",
    "En vista de que....",
    "Es cierto / evidente / obvio / seguro que....",
    "La razón por la que....",
    "La verdad es (que)....",
    "Lo más importante es (que)....",
    "Los datos de (la fuente, etc.)....",
    "No hay duda de que....",
    "Para ilustrar con un ejemplo....",
    "Queda claro....",
    "Teniendo en cuenta que....",
    "También hay que considerar....",
    "A diferencia de....",
    "Al contrario....",
    "Así como.... / De igual modo....",
    "De la misma manera....",
    "De este modo....",
    "De otra manera.... / De otro modo....",
    "En cambio.... / Por otra parte....",
    "Esta idea (etc.) se diferencia de....",
    "Está(n) relacionado(s) / relacionada(s) con....",
    "(La fuente) expresa la misma / otra idea....",
    "Igual que....",
    "Por un lado.... / Por otro lado....",
    "Sin embargo....",
    "sino (que + verbo)",
    "tanto...como....",
    "A fin de cuentas....",
    "Así que....",
    "Como consecuencia / resultado....",
    "De todas formas / maneras....",
    "Debido a....",
    "En conclusión / resumen....",
    "En fin....",
    "En todo caso....",
    "Esto demuestra que....",
    "Finalmente....",
    "Para atar cabos....",
    "Para concluir / finalizar / resumir....",
    "Por consiguiente....",
    "Puesto que.... / Ya que....",
    "Resulta que....",
    "Sobre todo...."
]

definitions = [
    "the article",
    "the interview",
    "both sources",
    "the (first, second, third) source",
    "the audio source",
    "the recording",
    "the graph, the chart",
    "the graph",
    "the table, the bar chart",
    "As the source states / describes / indicates / shows....",
    "With reference to....",
    "With relation to....",
    "With respect to....",
    "According to....",
    "Referring to what the source says....",
    "In my opinion....",
    "In spite of....",
    "Upon analyzing / examining the sources, I think that....",
    "Given that....",
    "In first (second, third) place....",
    "Considering that....",
    "It's true / evident / obvious / certain that....",
    "The reason for which....",
    "The truth is (that)....",
    "The most important (thing) is....",
    "The facts from (the source, etc.)...show....",
    "There is no doubt that....",
    "To illustrate with an example....",
    "It remains clear....",
    "Taking into consideration that....",
    "It's also important to consider....",
    "Unlike....",
    "To the contrary....",
    "Just like / in the same way....",
    "In the same way....",
    "In this way....",
    "In another way....",
    "On the other hand....",
    "This idea (etc.) is different from....",
    "It is / They are related to....",
    "(The source) expresses the same / another idea....",
    "The same as....",
    "On one hand.... / On the other hand....",
    "Nevertheless....",
    "but rather",
    "both...as well as....",
    "After all / Anyway....",
    "So / So that / this / therefore....",
    "As a consequence / result....",
    "In any case....",
    "Due to....",
    "In conclusion / summary....",
    "Anyway....",
    "In any case....",
    "This shows that....",
    "Finally....",
    "To wrap up the loose ends....",
    "To conclude / finish / summarize....",
    "As a result....",
    "Since....",
    "It turns out that....",
    "Above all...."
]

currName = document.querySelector(".FormattedText>div").innerHTML;
termIndex = names.indexOf(currName);
currDef = definitions[termIndex];

// Interacting with website starts here.
let runAfterDelay = (fn, delay) => new Promise((resolve, reject) => {
    setTimeout(() => {
        fn()
        resolve()
    }, delay)
})

inputParentEl = document.getElementsByClassName("AssemblyInput")[0];
inputEl = document.getElementsByClassName("AssemblyInput-input")[0];
inputEl.select();
inputEl.value;
inputParentEl.classList.add("AssemblyInput-filled");

console.log(inputEl.getAttribute("value"));

submitBtn = document.querySelector('[aria-label^="Responder"]');
runAfterDelay(() => submitBtn.click(), 10);
