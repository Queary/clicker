var money = 0;//хранине монет
var upmoney=1;//сколько за один клик будет добавлять монет

let i = 0;
let i2 = 2;
let texts = ["прожми меня", "уще прожми меня", "сильнее" ];

function bitoc (){
  money += upmoney;
  document.getElementById("up").innerHTML = money;
  i++;
  if (i == i2) {
  document.getElementById("tex").innerHTML = texts[Math.floor(Math.random() * 3)];
  i2 += 2;

  };
};
