const response = await fetch('https://rickandmortyapi.com/api/character')
     .then( async response => await response.json());

const article = document.getElementById('container-principal');
console.log(response);
function creatorCard (id) {
     const card = document.createElement('div');
     card.setAttribute('class', 'card');
     article.appendChild(card);
     const img = document.createElement('img');
     img.src = (response.results[id].image)
     card.appendChild(img);
     const containerInfo = document.createElement('div');
     containerInfo.setAttribute('class', 'container-info');
     card.appendChild(containerInfo);
     const div0 = document.createElement('div');
     const firsH1 = document.createElement('h1');
     firsH1.innerHTML = response.results[id].name;
     div0.appendChild(firsH1);
     const firsH4 = document.createElement('h4');
     firsH4.innerHTML = response.results[id].status + " " + response.results[id].species;
     div0.appendChild(firsH4);
     containerInfo.appendChild(div0);
     const div1 = document.createElement('div');
     const firsH2 = document.createElement('p');
     firsH2.innerHTML = "Last Know";
     div1.appendChild(firsH2);
     const firsH5 = document.createElement('h4');
     firsH5.innerHTML = response.results[id].origin.name;
     div1.appendChild(firsH5);
     containerInfo.appendChild(div1);
     const div2= document.createElement('div');
     const firsH3 = document.createElement('p');
     firsH3.innerHTML = "Firs senn";
     div2.appendChild(firsH3);
     const firsH6 = document.createElement('h4');
     firsH6.innerHTML = response.results[id].location.name;
     div2.appendChild(firsH6);
     containerInfo.appendChild(div2);
}

for (let i = 0; i < response.results.length; i++) {
     creatorCard(i)     
}


