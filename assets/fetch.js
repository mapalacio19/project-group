class Fetch {
  async getCurrent(input) {
    const myKey = "d579661585e4dc8105217f168751a17c";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=imperial`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}



//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
const currentVal = search.value;

ft.getCurrent(currentVal).then((data) => {
  //call a UI method//
  ui.populateUI(data);
  //call saveToLS
  ui.saveToLS(data);
});
});

//event listener for local storage

window.addEventListener("DOMContentLoaded", () => {
const dataSaved = ui.getFromLS();
ui.populateUI(dataSaved);
});
