const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
  let data = JSON.parse(req.responseText);
  let tab = data[0].data

  let puzzles = []
  for(element of tab){
    if(puzzles.includes(element.family) == false)
        puzzles.push(element.family)
  }

  console.log(puzzles)

  const allpuzzle = tab.map(function(puzzle){return puzzle.family});
  const datared = allpuzzle.reduce((accumulator, value)=>{accumulator[value]= ++accumulator[value] || 1;
   return accumulator;},{});
    let puzzlenames = new Set(allpuzzle);
    let puzzlestab=Array.from(puzzlenames)
    
    console.log(allpuzzle);
    console.log(datared);
    console.log(puzzlestab)

    const people = tab.map(function(puzzle){return puzzle.name });
    const users = new Set(people);
    const usertab = Array.from(users);

    console.log(usertab)


});



req.open("GET", "data.json");
req.send()

