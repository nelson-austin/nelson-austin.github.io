// DIRECTORY PAGE 
const file = 'json/data.json';
const cards = document.querySelector('.cards');


fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let a = document.createElement('a');
    let a2 = document.createElement('a');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`;
    p1.textContent = `Address: ${business.address}`;
    p2.textContent = `Phone Number: ${business.phonenumber}`;
    a.href = `${business.websiteurl}`;
    a.target = "_blank";
    a2.textContent = `Link to ${business.name}`;
    a2.href = `${business.websiteurl}`;
    a2.target = "_blank";
    p3.textContent = `Membership level: ${business.membershiplevel}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', `${business.icon}`);
    portrait.setAttribute('alt', `Icon for ${business.icon}`);
    portrait.setAttribute('loading', 'lazy');
    a2.classList.add('tinyurl');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(div);
    div.appendChild(a);
    a.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(a2);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
