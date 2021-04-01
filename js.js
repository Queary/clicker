var money = 0;//хранине монет
var upmoney=1;//сколько за один клик будет добавлять монет

let i = 0;
let i2 = 2;
let texts = ["нажимай кнопку", "давай жми", "сильнее" ];
let porog = 5;
let porogBaf = 10;

let nameUser = prompt("Укажи свое имя, путник");
function nameUse() {
  document.getElementById("nameUsers").innerHTML = "Начнем игру: " + nameUser;
};
//что бы прогрузилась вся страница на 15 странице
window.onload = function() {
  nameUse();
  document.getElementById('gamesBody').style.display = "none";
};

function onGamesBody() {
  document.getElementById('hel').style.display = "none";
  document.getElementById('gamesBody').style.display = "block";
};

function exit() {
  document.getElementById('gamesBody', 'hello').style.display = "none";
}


function bitoc() {
  money += upmoney;
  document.getElementById("up").innerHTML = "Кнопку жми";
  i++;
  if (i == i2) {
  document.getElementById("list3").innerHTML = document.getElementById("list2").innerHTML;
  document.getElementById("list2").innerHTML = document.getElementById("list1").innerHTML;
  document.getElementById("list1").innerHTML = texts[Math.floor(Math.random() * 3)];
  i2 += 2;
  };
  document.getElementById("monet").innerHTML = "Монет в наличие: " + money;
};

function bigBitoc() {
  if (money >= porog) {
    money -= porog;
    upmoney += 1;
    document.getElementById("zaKlick").innerHTML = "При использования х2: " + upmoney;
    document.getElementById("monet").innerHTML = "Монет в наличие: " + money;
    porog += 5;
    document.getElementById("mon").innerHTML = "Нужно монет для Х2: " + porog;
  } else {
    alert("у тебя " + money + " а надо " + porog);
  };
};
function bigRealBitoc() {
  if (money >= porogBaf){
    document.getElementById('openBaf').style.display = "none";
    document.getElementById('bafMin').style.display = "block";
    document.getElementById('bafMone').style.display = "block";

    let ftime = setInterval(ready, 800);
    setTimeout(() => {
      clearInterval(ftime);
      //alert('endBaf');
      document.getElementById('openBaf').style.display = "inline";
      document.getElementById('bafMin').style.display = "none";
      document.getElementById('bafMone').style.display = "none";
    }, 5000);

    // описание 42-48 строки
    // синтаксис по ЕС6
    /*
      setTimeout(function (){
      clearInterval(ftime);
      alert('stop')
    },5000);
    */

  } else {
    alert("у тебя " + money + " а надо " + porogBaf);
  }
};

function ready () {
  money += 1;
  document.getElementById("monet").innerHTML = "Монет в наличие: " + money;
  porogBaf += 3;
  document.getElementById("oBf").innerHTML = "Нужно монет для openBaf: " + porogBaf;
};
