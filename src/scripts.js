const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
    let data = JSON.parse(req.responseText);
    /*Appel de la liste des puzzles*/
    makeTableau(data);

    /*Récupération des données*/
    let tab = data[2].data
    const allpuzzle = tab.map(function (puzzle) { return puzzle.family });
    const datared = allpuzzle.reduce((accumulator, value) => {
        accumulator[value] = ++accumulator[value] || 1;
        return accumulator;
    }, {});
    let puzzlenames = new Set(allpuzzle);
    let puzzlestab = Array.from(puzzlenames)

    console.log(allpuzzle);
    console.log(datared);
    console.log(puzzlestab)

    const people = tab.map(function (puzzle) { return puzzle.name });
    const users = new Set(people);
    const usertab = Array.from(users);

    console.log(usertab);

    let recup = document.querySelectorAll('p')
    for (p of recup) {
        let puzzle = p.textContent
        p.addEventListener('click', (e) => {
            let donnees = []
            for (element of tab) {
                if (element.fullname == puzzle) {
                    donnees.push(element)
                }
            }
            console.log(donnees);

            classement(donnees[0].fullname, tab);

            /* Camembert */
            let reussie = []
            let perdu = []
            let inconnu = []
            let support = []
            for (result of donnees) {
                if (result.status == "SAT") {
                    reussie.push(result)
                }
                if (result.status == "UNSAT") {
                    perdu.push(result)
                }
                if (result.status == "UNKNOWN") {
                    inconnu.push(result)
                }
                if (result.status == "UNSUPPORTED") {
                    support.push(result)
                }
            }

            const data = [
                { solver: "Réussite", reussite: reussie.length },
                { solver: "Echec", reussite: perdu.length },
                { solver: "Inconnu", reussite: inconnu.length },
                { solver: "Non supporté", reussite: support.length },
            ];

            const camembert = new Chart(
                document.getElementById('pie'),
                {
                    type: 'pie',
                    data: {
                        labels: data.map(row => row.solver),
                        datasets: [
                            {
                                label: '',
                                data: data.map(row => row.reussite),
                                hoverOffset: data.map(row => row.reussite)
                            }
                        ]
                    },
                    options: {
                        responsive: false,
                        maintainAspectRatio: false
                    }

                }
            );

            /* Classement */
            let classe = classement(donnees[0].fullname, tab);
            let rang = document.getElementById('rank')
            let premier = document.createElement('h3')
            if (classe.length != 0) {
                premier.innerHTML = classe[0].name + " - " + classe[0].time 
                rang.appendChild(premier)
                for(let i = 1; i < classe.length; i++){
                    let second = document.createElement('h4')
                    second.innerHTML = classe[i].name + " - " + classe[i].time 
                    rang.appendChild(second)
                }
            } else{
                premier.innerHTML = "Personne n'a réussi ce puzzle..."
                rang.appendChild(premier)
            }




             
                const labels = [];
                for (const e of classement(donnees[0].fullname, tab)) {
                    labels.push(e.name)
                }

                let classBarres = [];
                for(const e of classement(donnees[0].fullname, tab)){
                    classBarres.push(e.time)
                }
                    console.log("REGARDE")
                console.log( classBarres);

                const databarres ={ 
                    labels: labels,
                    datasets:[{
                    data: classBarres,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                      ],
                      borderWidth: 1
                    }]
                     };


                const barres = new Chart(
                    document.getElementById('bar'),
                    {
                        type: 'bar',
                        data: databarres,
                        options:{
                            scale: {
                                y:{
                                    beginAtZero: true
                                }
                            }
                        }
                    }
                );
        });



    }



    /*Création des graphiques*/


});
req.open("GET", "https://www.cril.univ-artois.fr/~lecoutre/teaching/jssae/code5/results.json");
req.send()

function makeTableau(data) {
    let liste = document.querySelector('ol')
    liste.innerHTML = "<h3>Sélectionnez votre puzzle pour obtenir des informations statistiques dessus.</h3>"
    let tab = data[2].data
    let puzzles = []
    for (element of tab) {
        if (puzzles.includes("<h2>" + element.family + "</h2>") == false)
            puzzles.push("<h2>" + element.family + "</h2>")
    }

    for (let i = 0; i < puzzles.length; i++) {
        let family = document.createElement('ul')
        let deroule = document.createElement('div')

        let souspuzzles = []
        family.innerHTML = puzzles[i]
        family.addEventListener('mouseover', (e) => deroule.style.display = "block")
        family.addEventListener('mouseout', (e) => deroule.style.display = "none")
        for (element of tab) {
            if ("<h2>" + element.family + "</h2>" == puzzles[i]) {
                if (souspuzzles.includes(element.fullname) == false) {
                    souspuzzles.push(element.fullname)
                    let sousfamily = document.createElement('p')
                    sousfamily.innerHTML = "<a href='#pie'>" + element.fullname + "</a>";
                    deroule.appendChild(sousfamily)
                }
            }
        }
        family.appendChild(deroule)
        liste.appendChild(family)
    }
}

function classement(puzzlename, data) {
    let tab = data;
    console.log(tab);
    let allattempts = tab.filter((r) => r.fullname == puzzlename);
    console.log(allattempts);
    let satAttempts = allattempts
        .filter((r) => r.status == "SAT")
        .map(({ name, time }) => ({ ["name"]: name, ["time"]: time }))
        .sort(function (a, b) {
            return a.time - b.time;
        });
    return satAttempts;
}


import {
    Chart,
    Colors,
    BubbleController,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend
} from 'chart.js'

Chart.register(
    Colors,
    BubbleController,
    PointElement,
    CategoryScale,
    LinearScale,
    Legend
);

import { Chart } from 'chart.js/auto'
/*import { S } from 'chart.js/dist/chunks/helpers.core';*/


