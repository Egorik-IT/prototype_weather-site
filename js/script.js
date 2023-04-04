
function search__weather__in__sity() {
  document.querySelector(".loading").style.animation = "loadingse 1s cubic-bezier(0, 0, 0.27, 1.68) forwards";
  document.querySelector(".ellipsis").style.animation = "loading__ellipsis 1s cubic-bezier(0, 0, 0.27, 1.68) infinite";
  let acr = 35;
  let i = Math.floor(Math.random() * acr);
  let WVel = document.querySelector(".serch__weather__input").value;
  if(WVel) {
    document.querySelector(".weather__information").innerHTML = "В городе(или ПГТ)" + "  " + WVel + "  " + "сейчас" + "  " + i + "  " + "°C" + ".";
  } else {
    document.querySelector(".weather__information").innerHTML = "Ничего не найдено.";
  }
};
