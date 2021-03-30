var money = 0;//хранине монет
var upmoney=1;//сколько за один клик будет добавлять монет

function bitoc (){
  money += upmoney;
  document.getElementById("up").innerHTML = money;
}
