class Fetch {
    async getCurrent(input) {
      const myKey = "d579661585e4dc8105217f168751a17c";
  
      //make request to url
  
      const response = await fetch(
<<<<<<< HEAD
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${d579661585e4dc8105217f168751a17c}`
=======
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=imperial`
>>>>>>> 1dfac96da79370dd9a25f87017327014200ff4e7
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }