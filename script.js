const flag = document.getElementById("flagImg");
const name = document.getElementById("name");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const populatiion = document.getElementById("population");
const area = document.getElementById("area");
const timezone = document.getElementById("timezone");
const border = document.getElementById("border");
const currencies = document.getElementById("currencies");
const input = document.getElementById("countryName");
const submitBtn = document.getElementById("submitBtn");

const getData = async () => {
  const fetchData = await fetch("https://restcountries.com/v2/all");

  const data = await fetchData.json();
  console.log(data);

  let countryName = input.value.toUpperCase().trim();

  if(!countryName){
    alert('Enter any Country Name');
    return;
  }

  let countryData = data.filter((country) => {
    if(country.name.toUpperCase() === countryName){
      return country;
    }
  });
  console.log(countryData);

  flag.src = countryData[0].flags.png;
  name.innerText = countryData[0].name;
  capital.innerText = countryData[0].capital;
  region.innerText = countryData[0].region;
  populatiion.innerText= countryData[0].population;
  area.innerText = countryData[0].area;
  timezone.innerText = countryData[0].timezones[0];
  border.innerText = countryData[0].borders;
  currencies.innerText = countryData[0].currencies[0].name;


};

submitBtn.addEventListener("click", getData);
