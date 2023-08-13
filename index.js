// // 8ccc934b6d145f5d0102f4feb774c877
// // https://api.openweathermap.org/data/2.5/weather?appid=8ccc934b6d145f5d0102f4feb774c877&q=delhi
let article = document.querySelector(".data-block");

let form = document.querySelector("form");
let input = document.querySelector("input");

function fetchData(city) {
    fetch(
      ` https://api.openweathermap.org/data/2.5/weather?appid=8ccc934b6d145f5d0102f4feb774c877&q=${city}&units=metric`
    )
      .then(res => {
        res
          .json()
          .then(data => {
            console.log(data);
            let url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            article.innerHTML = `
              <div class="name">
                      <h2> ${data.name} </h2>
                      <h3>  ${data.sys.country} </h3>
                      <img src=${url}>
                      <p>Temp : ${data.main.temp} <sup> o</sup>C </p>
                      <p>Humidity : ${data.main.humidity} %</p> 
                      <p>  Wind Speed : ${data.wind.speed}</p>
  
              </div>
                  `;
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  
  form.addEventListener("submit", e => {
    e.preventDefault();
  
    fetchData(input.value);
  });