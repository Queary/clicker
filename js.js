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
  document.getElementById("tex").innerHTML = texts[0 - 0.5 + Math.random() * ((texts.lenght - 1) - 0 + 1))];
  i2 += 2;

  };
};
