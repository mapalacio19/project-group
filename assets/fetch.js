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