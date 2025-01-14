let subject = [
  {
    title: '酒',
    content: '隊代表的酒瓶內最少的'
  },
  {
    title: '勤',
    content: '最早到尾牙會場的'
  },
  {
    title: '少',
    content: '身上穿最少衣服'
  },
  {
    title: '多',
    content: '身上最多顏色'
  },
  {
    title: '小',
    content: '巴掌最小'
  },
  {
    title: '寬',
    content: '大小拇指尖距離最寬'
  },
  {
    title: '大',
    content: '生日的日期數字最大'
  },
  {
    title: '長',
    content: '襪子最長'
  },
  {
    title: '短',
    content: '英文名最短'
  },

]


document.addEventListener("DOMContentLoaded", function () {
  const actBtn = document.querySelector(".card .title span");
  let nowAt = null;

  const randomTodo = function () {
    document.querySelector(".answer .mask").classList.toggle("active");
    actBtn.removeEventListener("click", randomTodo);
    const redo = setInterval(() => {
      nowAt = Math.floor(Math.random() * subject.length);
      this.textContent = subject[nowAt].title;
      document.querySelector(".message").textContent = subject[nowAt].content;
    }, 100);

    setTimeout(() => {
      clearInterval(redo);
    }, 2000);
  }

  const showContent = function () {
    document.querySelector(".answer .mask").classList.toggle("active");
    subject.splice(nowAt, 1);
    actBtn.addEventListener("click", randomTodo);
  }


  actBtn.addEventListener("click", randomTodo);
  document.querySelector(".mask").addEventListener("click", showContent);
});
