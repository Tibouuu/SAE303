const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    makeTableau(data)
});
req.open("GET", "data.json");
req.send()

function makeTableau(data) {
    let liste = document.querySelector('ol')
    liste.innerHTML = "<h1>Puzzles</h1>"
    let tab = data[0].data
    let puzzles = []
    for (element of tab) {
        if (puzzles.includes(element.family) == false)
            puzzles.push(element.family)
    }


    for (let i = 0; i < puzzles.length; i++) {
        let family = document.createElement('ul')
        let souspuzzles = []
        family.innerHTML = puzzles[i]
        for (element of tab) {
            if (element.family == puzzles[i]) {
                if (souspuzzles.includes(element.fullname) == false) {
                    souspuzzles.push(element.fullname)
                    let sousfamily = document.createElement('li')
                    sousfamily.innerHTML = element.fullname
                    family.appendChild(sousfamily)
                }
            }
        }
        liste.appendChild(family)

    }



}