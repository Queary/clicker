var money = 0;//хранине монет
var upmoney=1;//сколько за один клик будет добавлять монет

let i = 0;
let i2 = 2;
let texts = ["прожми меня", "уще прожми меня", "сильнее" ];
let porog = 5;

function bitoc (){
  money += upmoney;
  document.getElementById("up").innerHTML = money;
  i++;
  if (i == i2) {
  document.getElementById("list3").innerHTML = document.getElementById("list2").innerHTML;
  document.getElementById("list2").innerHTML = document.getElementById("list1").innerHTML;
  document.getElementById("list1").innerHTML = texts[Math.floor(Math.random() * 3)];
  i2 += 2;
  };
  document.getElementById("monet").innerHTML = "monet: " + money;
};

function bigBitoc() {
  if (money >= porog) {
    money -= porog;
    upmoney += 1;
    document.getElementById("zaKlick").innerHTML = "zaKlick: " + upmoney;
    document.getElementById("monet").innerHTML = "monet: " + money;
    porog += 5;
    document.getElementById("mon").innerHTML = "monPorog: " + porog;
  }else {
    alert("лох, где бабки????");
  };
};

function bigRealBitoc() {
  document.getElementById('openBaf').style.display = "none";
  document.getElementById('bafMin').style.display = "block";
  document.getElementById('bafMone').style.display = "block";

  let ftime = setInterval(ready(), 100);
};

function ready () {
  money += 1;
  document.getElementById("monet").innerHTML = "monet: " + money;
};
