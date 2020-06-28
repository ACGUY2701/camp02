var result1 = "あいこです";
var result2 = "あなたの勝ちです";
var result3 = "あなたの負けです";

var computer_h = Math.floor(Math.random() * 3);

var pc_hands = document.querySelector("#pc_hands");
var judge = document.querySelector("#judge");
var gu_btn = document.querySelector("#gu_btn");
var cho_btn = document.querySelector("#cho_btn");
var par_btn = document.querySelector("#par_btn");
var reset = document.querySelector("#reset");

//   グーボタンを押したとき
gu_btn.onclick = function (e) {
  var my_hands = 0;
  console.log(my_hands);
  console.log(computer_h);

  if (my_hands == computer_h) {
    pc_hands.innerHTML = gu_btn.innerHTML;
    judge.innerHTML = result1;
    console.log(judge);
  } else if (my_hands + 1 == computer_h) {
    pc_hands.innerHTML = cho_btn.innerHTML;
    judge.innerHTML = result2;
    console.log(judge);
  } else {
    pc_hands.innerHTML = par_btn.innerHTML;
    judge.innerHTML = result3;
    console.log(judge);
  }
};

//   チョキボタンを押したとき
cho_btn.onclick = function (e) {
  var my_hands = 1;
  console.log(my_hands);
  console.log(computer_h);

  if (my_hands == computer_h) {
    pc_hands.innerHTML = cho_btn.innerHTML;
    judge.innerHTML = result1;
    console.log(judge);
  } else if (my_hands + 1 == computer_h) {
    pc_hands.innerHTML = par_btn.innerHTML;
    judge.innerHTML = result2;
    console.log(judge);
  } else {
    pc_hands.innerHTML = gu_btn.innerHTML;
    judge.innerHTML = result3;
    console.log(judge);
  }
};

//   パーボタンを押したとき
par_btn.onclick = function (e) {
  var my_hands = 2;
  console.log(my_hands);
  console.log(computer_h);

  if (my_hands == computer_h) {
    pc_hands.innerHTML = par_btn.innerHTML;
    judge.innerHTML = result1;
    console.log(judge);
  } else if (my_hands - 1 == computer_h) {
    pc_hands.innerHTML = cho_btn.innerHTML;
    judge.innerHTML = result3;
    console.log(judge);
  } else {
    pc_hands.innerHTML = gu_btn.innerHTML;
    judge.innerHTML = result2;
    console.log(judge);
  }
};

// リセットボタン

reset.onclick = function (e) {
  window.location.reload();
};
