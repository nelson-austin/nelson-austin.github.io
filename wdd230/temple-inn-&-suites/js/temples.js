// TEMPLE PAGE 
const file = 'json/temples.json';
const cards = document.querySelector('.cards');


fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h1 = document.createElement('h1');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let a = document.createElement('a');
    
  
    portrait.setAttribute('src', `${temple.img}`);
    portrait.setAttribute('alt', `Image of the ${temple.name}`);
    portrait.setAttribute('loading', 'lazy');
    

    h1.textContent = `${temple.name}`;
    p1.textContent = `Address: ${temple.address}`;
    p2.textContent = `${temple.city}`;
    p3.textContent = `Phone Number: ${temple.phonenumber}`;
    ul.textContent = `Milestones:`;
    li1.textContent = `${temple.announced} - Announced`;
    li2.textContent = `${temple.groundbreaking} - Groundbreaking`;
    li3.textContent = `${temple.dedication} - Dedicated`;
    
    
    a.href = `${temple.schedule}`;
    a.target = "_blank";
    a.textContent = `Full schedule and list of services`;
    
    ///a2.classList.add('tinyurl');
  
    card.appendChild(portrait);
    card.appendChild(h1);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    card.appendChild(a);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}


