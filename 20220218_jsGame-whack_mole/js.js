//宣告
const
  btn = document.querySelector("button"),
  holes = document.querySelectorAll(".hole"),
  clrRY = new Array();
let
  timeNode = document.getElementById("time"),
  countNode = document.getElementById("count"),
  sec = 60, count = 0;

// function
const
  // 遊戲開始
  gamestart = () => {
    //初始
    timeNode.textContent = sec = 60;
    countNode.textContent = count = 0;
    btn.removeEventListener('click', gamestart);//避免觸發按鈕

    // 倒數至0
    const start = setInterval(() => {
      if (!sec) {
        clearInterval(start);
        btn.addEventListener('click', gamestart);
      }
      else {
        sec--;
        timeNode.textContent = sec;
      }
    }, 1000);

    //圖片替換前置準備
    for (let i = 0; i < 100; i++) {
      const
        onTime = Math.floor(Math.random() * 55000),   // 0~54999 ms
        onSpace = Math.floor(Math.random() * 9),  // 0~8
        onDelay = Math.floor(Math.random() * 3) + 2;  // 2~4

      setTimeout(() => {
        showOn(i, onSpace, onDelay);
      }, onTime);
    }
  },

  //圖片替換出現作業
  showOn = (siwho, siwhere, sihow) => {
    if (!holes[siwhere].classList.contains('open')) {
      holes[siwhere].classList.toggle('open');
      holes[siwhere].alt = siwho;

      //red to yellow, you need keep this serial number
      clrRY[siwho] = setTimeout(() => {
        holes[siwhere].classList.toggle('open');
        holes[siwhere].removeAttribute('alt');
      }, sihow * 1000);
    } else setTimeout(() => {
      showOn(siwho, (siwhere + 1) % 9, sihow);
    }, 100);
  },

  //得分計算
  getCount = (item) => {
    if (!item.children[0].classList.contains('active')) {
      // console.log(Array.prototype.indexOf.call(holes, item));
      item.children[0].classList.toggle('active');
      countNode.textContent = ++count;

      //green to yellow
      setTimeout(() => {
        item.classList.toggle('open');
        item.removeAttribute('alt');
        setTimeout(() => item.children[0].classList.toggle('active'), 1000);
      }, 1000);

      // clear red to yellow's bomb
      clearTimeout(clrRY[item.alt]);
    }
  };


//event 規劃
//按鈕
btn.addEventListener('click', gamestart);

//滑鼠
for (let i = 0; i < holes.length; i++) {
  holes[i].addEventListener('click', function () {
    getCount(this);
  });
}

//鍵盤
window.addEventListener('keydown', function (e) {
  // console.log(e);
  switch (e.code) {
    case "Numpad7": getCount(holes[0]); break;
    case "Numpad8": getCount(holes[1]); break;
    case "Numpad9": getCount(holes[2]); break;
    case "Numpad4": getCount(holes[3]); break;
    case "Numpad5": getCount(holes[4]); break;
    case "Numpad6": getCount(holes[5]); break;
    case "Numpad1": getCount(holes[6]); break;
    case "Numpad2": getCount(holes[7]); break;
    case "Numpad3": getCount(holes[8]); break;
  }
});


