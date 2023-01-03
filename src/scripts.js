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
});
req.open("GET", "data.json");
req.send()