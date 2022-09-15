const { toggle } = require('cli-spinners');

function dropFunction() {
  document.getElementById('drop-content').classList.toggle('show');
}
dropFunction();
toggle.addEventListener('click', () => {
  toggle.classList.dropFunction();
});

const projectInfo = [
  {
    tittle: 'Facebook 360',
    element1: 'CANOPY',
    element2: 'Back End Dev',
    element3: '2015',
    text: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    snapshot: "SnapshootPortfolio.svg",
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    live: 'https://github.com/emmanuelcortes2',
    source: 'https://emmanuelcortes2.github.io/',
  },
  {
    tittle: 'Uber Navigation',
    element1: 'CANOPY',
    element2: 'Back End Dev',
    element3: '2015',
    text: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    snapshot: 'Snapshoot2Portfolio.svg',
    dot: 'Counter.svg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    live: 'https://github.com/emmanuelcortes2',
    source: 'https://emmanuelcortes2.github.io/',
  },
  {
    tittle: 'Tonic',
    element1: 'CANOPY',
    element2: 'Back End Dev',
    element3: '2015',
    text: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    snapshot: 'Snapshoot3Portfolio.svg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    live: 'https://github.com/emmanuelcortes2',
    source: 'https://emmanuelcortes2.github.io/',
  },
  {
    tittle: 'Multi-Post Stories',
    element1: 'CANOPY',
    element2: 'Back End Dev',
    element3: '2015',
    text: 'A daily selection of privately personalized reads no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    snapshot: 'Snapshoot4Portfolio.svg',
    tech1: 'html',
    tech2: 'css',
    tech3: 'javaScript',
    live: 'https://github.com/emmanuelcortes2',
    source: 'https://emmanuelcortes2.github.io/',
  },
];

const body = document.querySelector('body');

let worksContainer = document.createElement('section');
worksContainer.classList.add('worksContainer');

body.append(worksContainer);

for (let i = 0; i < projectInfo.length; i += 1){
  let flexCard = document.createElement('div');
  flexCard.classList.add('flexCard');
  flexCard.setAttribute('id', 'works-container');
  worksContainer.appendChild(flexCard);

  let flexCardImg = document.createElement('img');
  flexCardImg.src = projectInfo [i].snapshot;
  flexCardImg.alt = 'project-snapshot';
  flexCard.appendChild(flexCardImg);
  
  let flexCardColumn = document.createElement('div');
  flexCardColumn.classList.add('column');
  flexCard.appendChild(flexCardColumn);

  let flexCardh1 = document.createElement('h1');
  flexCardh1.classList.add('title');
  flexCardh1.textContent = projectInfo [i].tittle;
  flexCardColumn.appendChild(flexCardh1);

  let flexCardUl = document.createElement('ul');
  flexCardColumn.appendChild(flexCardUl);

  let ulLi1 = document.createElement('li');
  ulLi1.classList.add("element1");
  ulLi1.textContent = projectInfo [i].element1;
  flexCardUl.appendChild(ulLi1);

  let ulLid = document.createElement('li');
  flexCardUl.appendChild(ulLid);
  let dot = document.createElement('img');
  ulLid.appendChild(dot);
  dot.src = 'Counter.svg';

  let ulLi2 = document.createElement('li');
  ulLi2.classList.add("element2");
  ulLi2.textContent = projectInfo [i].element2;
  flexCardUl.appendChild(ulLi2);

  let ulLid2 = document.createElement('li');
  flexCardUl.appendChild(ulLid2);
  let dot2 = document.createElement('img');
  ulLid2.appendChild(dot2);
  dot2.src = 'Counter.svg';

  let ulLi3 = document.createElement('li');
  ulLi3.classList.add("element2");
  ulLi3.textContent = projectInfo [i].element3;
  flexCardUl.appendChild(ulLi3);

  let shortText = document.createElement('p');
  shortText.textContent = projectInfo [i].text;
  flexCardColumn.appendChild(shortText);

  let techList = document.createElement('ul');
  techList.classList.add('tech-list');
  flexCardColumn.appendChild(techList);

  let techListLi1 = document.createElement('li');
  techListLi1.classList.add('language-buttons')
  techListLi1.textContent = projectInfo [i].tech1;
  techList.appendChild(techListLi1);

  let techListLi2 = document.createElement('li');
  techListLi2.classList.add('language-buttons')
  techListLi2.textContent = projectInfo [i].tech2;
  techList.appendChild(techListLi2);

  let techListLi3 = document.createElement('li');
  techListLi3.classList.add('language-buttons')
  techListLi3.textContent = projectInfo [i].tech3;
  techList.appendChild(techListLi3);

  let pButton = document.createElement('button');
  pButton.classList.add('p-button');
  pButton.innerHTML = "<button onclick=“openCards()”> See Project</button>";
  flexCardColumn.appendChild(pButton);
  
};

// pButton.setAttribute('onclick', 'popFunction()');

// function dropFunction() {
//   document.getElementById('pop-up').classList.toggle('hide');
// };

// const pButton = document.querySelectorAll('.p-button');

for (let i = 0; i < projectInfo.length; i += 1){
   let popUp = document.createElement('div');
  popUp.classList.add('pop-up');
  body.appendChild(popUp);

  let popUpContainer = document.createElement('div');
  popUpContainer.classList.add('popup-container');
  popUp.appendChild(popUpContainer);

  let popUpTitle = document.createElement('h1');
  popUpTitle.classList.add('title');
  popUpTitle.textContent = projectInfo [i].tittle;
  popUpContainer.appendChild(popUpTitle);

  let popUpUl = document.createElement('ul');
  popUpContainer.appendChild(popUpUl);

  let popUpLi1 = document.createElement('li');
  popUpLi1.classList.add("element1");
  popUpLi1.textContent = projectInfo [i].element1;
  popUpUl.appendChild(popUpLi1);

  let popUpLid1 = document.createElement('li');
  popUpUl.appendChild(popUpLid1);
  let popDot = document.createElement('img');
  popUpUl.appendChild(popDot);
  popDot.src = 'Counter.svg';

  let popUpLi2 = document.createElement('li');
  popUpLi2.classList.add("element2");
  popUpLi2.textContent = projectInfo [i].element2;
  popUpUl.appendChild(popUpLi2);

  let popUpLid2 = document.createElement('li');
  popUpUl.appendChild(popUpLid2);
  let popDot2 = document.createElement('img');
  popUpUl.appendChild(popDot2);
  popDot2.src = 'Counter.svg';

  let popUpLi3 = document.createElement('li');
  popUpLi3.classList.add("element2");
  popUpLi3.textContent = projectInfo [i].element3;
  popUpUl.appendChild(popUpLi3);

  let popupImg = document.createElement('img');
  popupImg.classList.add('snap');
  popupImg.src = projectInfo [i].snapshot;
  popupImg.alt = 'project-snapshot';
  popUpContainer.appendChild(popupImg);

  let popupP = document.createElement('p');
  popupP.textContent = projectInfo [i].description;
  popUpContainer.appendChild(popupP);

  let popupList = document.createElement('ul');
  popUpContainer.appendChild(popupList);

  let popupTech1 = document.createElement('li');
  popupTech1.classList.add('language-buttons');
  popupTech1.textContent = projectInfo [i].tech1;
  popupList.appendChild(popupTech1);

  let popupTech2 = document.createElement('li');
  popupTech2.classList.add('language-buttons');
  popupTech2.textContent = projectInfo [i].tech2;
  popupList.appendChild(popupTech2);

  let popupTech3 = document.createElement('li');
  popupTech3.classList.add('language-buttons');
  popupTech3.textContent = projectInfo [i].tech3;
  popupList.appendChild(popupTech3);

  let popupbtnCont = document.createElement('ul');
  popupbtnCont.classList.add('btnCont');
  popUpContainer.appendChild(popupbtnCont);

  let popupbtnContLi1 = document.createElement('li');
  popupbtnCont.appendChild(popupbtnContLi1);

  let popupbtnContLi2 = document.createElement('li');
  popupbtnCont.appendChild(popupbtnContLi2);

  let liveBtn = document.createElement('button');
  liveBtn.classList.add('p-button');
  liveBtn.setAttribute('type', 'button');
  liveBtn.textContent = 'See Live';
  popupbtnContLi1.appendChild(liveBtn);

  let sourceBtn = document.createElement('button');
  sourceBtn.classList.add('p-button');
  sourceBtn.setAttribute('type', 'button');
  sourceBtn.textContent = 'See Sourc';
  popupbtnContLi2.appendChild(sourceBtn);

}

// function openCards() {
//   console.log('click');
// }

//  )
// }

