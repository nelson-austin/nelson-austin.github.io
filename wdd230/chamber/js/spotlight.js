const file = 'json/data.json';

const spotlightOne = document.getElementById('spotlightone');
const imgOne = document.getElementById('imgone');
const websiteOne = document.getElementById('websiteone');
const phoneOne = document.getElementById('phoneone');

const spotlightTwo = document.getElementById('spotlighttwo');
const imgTwo = document.getElementById('imgtwo');
const websiteTwo = document.getElementById('websitetwo');
const phoneTwo = document.getElementById('phonetwo');

const spotlightThree = document.getElementById('spotlightthree');
const imgThree = document.getElementById('imgthree');
const websiteThree = document.getElementById('websitethree');
const phoneThree = document.getElementById('phonethree');


fetch(file)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    let sCompanies = []
    businesses.forEach((company) => {
        if (company.membershiplevel == 'Gold' || company.membershiplevel == 'Silver') {
            sCompanies.push(company);
        }
    });
    let num = 0;
    for (var i = 0; i < 3; i++) {
        let listLength = sCompanies.length;
        let randomNumber = Math.floor(Math.random() * sCompanies.length);
        let randomCompany = sCompanies.splice(randomNumber, 1);
        num++
        console.table(randomCompany);
        if (num == 1) {
            spotlightOne.textContent = randomCompany[0]['name'];
            imgOne.src = randomCompany[0]['icon'];
            imgOne.alt = `${randomCompany[0]['name']} company logo`;
            websiteOne.textContent = randomCompany[0]['websiteurl'];
            phoneOne.textContent = randomCompany[0]['phonenumber'];
        }
        else if (num == 2) {
            spotlightTwo.textContent = randomCompany[0]['name'];
            imgTwo.src = randomCompany[0]['icon'];
            imgTwo.alt = `${randomCompany[0]['name']} company logo`;
            websiteTwo.textContent = randomCompany[0]['websiteurl'];
            phoneTwo.textContent = randomCompany[0]['phonenumber'];
        }
        else if (num == 3) {
            spotlightThree.textContent = randomCompany[0]['name'];
            imgThree.src = randomCompany[0]['icon'];
            imgThree.alt = `${randomCompany[0]['name']} company logo`;
            websiteThree.textContent = randomCompany[0]['websiteurl'];
            phoneThree.textContent = randomCompany[0]['phonenumber'];
        }
    }

  });

