class UI {
    constructor() {
      this.uiContainer = document.getElementById("content");
      this.city;
<<<<<<< HEAD
      this.defaultCity = "Austin, Texas";
=======
      this.defaultCity = "Austin";
>>>>>>> 1dfac96da79370dd9a25f87017327014200ff4e7
    }
  
    populateUI(data) {
      //de-structure vars
  
      //add them to inner HTML
  
      this.uiContainer.innerHTML = `
          
<<<<<<< HEAD
          <div class="card mx-auto mt-5" style="width: 18rem;">
=======
          <div class="card mx-auto mt-5" style="width: 40rem;">
            <div style="text-align:center">
>>>>>>> 1dfac96da79370dd9a25f87017327014200ff4e7
              <div class="card-body justify-content-center">
                  <h5 class="card-title">${data.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h6>
                  <p class="card-text ">Weather conditions are described as: ${data.weather[0].description}</p>
                  
              </div>
          </div>
<<<<<<< HEAD
          
          
=======
>>>>>>> 1dfac96da79370dd9a25f87017327014200ff4e7
          `;
    }
  
    clearUI() {
      uiContainer.innerHTML = "";
    }
  
    saveToLS(data) {
      localStorage.setItem("city", JSON.stringify(data));
    }
  
    getFromLS() {
      if (localStorage.getItem("city" == null)) {
        return this.defaultCity;
      } else {
        this.city = JSON.parse(localStorage.getItem("city"));
      }
  
      return this.city;
    }
  
    clearLS() {
      localStorage.clear();
    }
  }