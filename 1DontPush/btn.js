const textElement = document.getElementById('text');

const btnElement = document.getElementById('btn');
// javascriptだと型ないから宣言しないで行けるのか。

let count = 0;

// 昔の度胸試しボタンとか作れそう。
// ifにするとうまくいかなかった。
btnElement.addEventListener('click', () => {
  if(count == 0){
    textElement.textContent = "ウイルスが混入しました";
    count++;
  }
  else if(count == 1){
    textElement.textContent = "このパソコンのデータを全て消去します";
    count++;
  }
  else if(count >= 2){
    textElement.textContent = "なーんちゃって";
    count=0;
  }
});