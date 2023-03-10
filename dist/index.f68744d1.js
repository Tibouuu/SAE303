const req = new XMLHttpRequest();
req.addEventListener("load", (evt)=>{
    let data = JSON.parse(req.responseText);
    makeTableau(data);
});
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send();
function makeTableau(data) {
    let liste = document.querySelector("ol");
    liste.innerHTML = "<h1>Puzzles - SAE303</h1>";
    let tab = data[2].data;
    let puzzles = [];
    for (element of tab)if (puzzles.includes("<p>" + element.family + "</p>") == false) puzzles.push("<p>" + element.family + "</p>");
    for(let i = 0; i < puzzles.length; i++){
        let family = document.createElement("ul");
        let souspuzzles = [];
        family.innerHTML = "<a href='#' onmouseover=document.getElementById('test').style.display=block; onmouseout=document.getElementById('test').style.display=none; >" + puzzles[i] + "</a><div id=test style=display:none; width:500px; height:500px; background-color:blue;>";
        for (element of tab){
            if ("<p>" + element.family + "</p>" == puzzles[i]) {
                if (souspuzzles.includes(element.fullname) == false) {
                    souspuzzles.push(element.fullname);
                    let sousfamily = document.createElement("li");
                    sousfamily.innerHTML = element.fullname;
                    family.appendChild(sousfamily);
                }
            }
        }
        liste.appendChild(family);
    }
}

//# sourceMappingURL=index.f68744d1.js.map
