window.addEventListener('load', getQualifiedCountries)
function getQualifiedCountries() {
  fetch('/mundial/assest/data/clasificados.json')
  .then(response => response.json())
  .then(response => {
    initDraw(response.qualified)
  })
  .catch(error => console.log(error));
}

const initDraw = (qualifiedCountries)=>{
  qualifiedCountries.forEach(element => {
    if (element.drum === 1){
       let ab = document.createElement('div');
        ab.innerHTML = `<img src=${element.flag} alt =${element.country} class= flagSize> <p>${element.country}</p>`
        document.getElementById('drumOne').appendChild(ab)
      }
      if (element.drum === 2){
        let ab = document.createElement('div');
         ab.innerHTML = `<img src=${element.flag} alt =${element.country} class= flagSize> <p>${element.country}</p>`
         document.getElementById('drumTwo').appendChild(ab)
       }
       if (element.drum === 3){
        let ab = document.createElement('div');
         ab.innerHTML = `<img src=${element.flag} alt =${element.country} class= flagSize> <p>${element.country}</p>`
         document.getElementById('drumThree').appendChild(ab)
       }
       if (element.drum === 4){
        let ab = document.createElement('div');
         ab.innerHTML = `<img src=${element.flag} alt =${element.country} class= flagSize> <p>${element.country}</p>`
         document.getElementById('drumFour').appendChild(ab)
       }
    })
  }
