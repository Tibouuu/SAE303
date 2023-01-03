const req = new XMLHttpRequest();
req.addEventListener("load", evt => {
  let data = JSON.parse(req.responseText);
  let tab = data[0].data

  let noms = []
  for(let i=0; i < 10; i++){
    noms.push(tab[i].name)
  }
  console.log(noms)
});
req.open("GET", "data.json");
req.send()