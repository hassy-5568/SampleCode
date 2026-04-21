const textElement = document.getElementById('text');

const btnElement = document.getElementById('btn');

let count = 0;

// 昔の度胸試しボタンとか作れそう。
btnElement.addEventListener('click', () => {
  if(count == 0){
    textElement.textContent = "ウイルスが混入しました";
    count++;
  }
  if(count == 1){
    textElement.textContent = "このパソコンのデータを全て消去します";
    count++;
  }
  if(count >= 2){
    textElement.textContent = "なーんちゃって";
    count=0;
  }
});