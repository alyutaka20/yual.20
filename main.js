// id[slide-message]を取得し、[slideMessage]に代入。
// イベントリスナーでスクロールを指定する。スクロール系はwindow(画面)のスクロール量に対して処理を行うため、[window]指定。
// scrollingElementでスクロール量を取得し、変数[anime]に代入。
// if文で、[anime]に代入されたスクロール量と300pxどっちが大きいか比較。(anime >= 300)の所
// スクロール量が300pxを超えたら、クラス[slide-message]の要素が表示されるようになる。
// elseを指定するとスクロール量が300pxを下回った時、要素が消えてしまう。
const slideMessage = document.getElementById('slide-message');

window.addEventListener('scroll', () =>{
  const anime = document.scrollingElement.scrollTop;

  if(anime >= 200){
    slideMessage.style.display = 'inline';
  }
  // else{
  //   slideMessage.style.display = 'none';
  // }
});

const slideMessage2 = document.getElementById('slide-message2');

window.addEventListener('scroll', () =>{
  const anime2 = document.scrollingElement.scrollTop;

  if(anime2 >= 600){
    slideMessage2.style.display = 'inline';
  }
  // else{
  //   slideMessage.style.display = 'none';
  // }
});

// const aboutItems = document.getElementById('aboutItem');

// window.addEventListener('scroll', () =>{
//   const anime2 = document.scrollingElement.scrollTop;

//   if(anime2 >= 350){
//     aboutItems.style.display = 'inline';
//   }
//   else{
//     aboutItems.style.display = 'none';
//   }
// });

  // const aboutItems = document.getElementById('aboutItem');

  // for (i = 0; i < items.length; i++) {
  // items[i].addEventListener("scroll", function() {
  //   if(anime2 >= 500){
  //   aboutItems.style.display = 'inline';
  // }
  // else{
  //   aboutItems.style.display = 'none';
  // }

// クラスネームを使って複数要素を取得して、取得したものに対してcssで変化を与える為の書き方
// [mouseover],[mouseout]はホバーの意味。
// クラス[aboutItem]を取得し、[aboutItem]の要素を[mouseover],[mouseout]した時の動作を作る時に。
// クラス[active]で実際の動作を作る。(cssで指定)
  // const items = document.getElementsByClassName('items');

  // for (i = 0; i < items.length; i++) {
  // items[i].addEventListener("mouseover", function() {
  //   this.classList.add('active',);
  // });
  // items[i].addEventListener("mouseout", function() {
  // this.classList.remove('active',);
  // });
  // }

  $( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
     $(this).addClass('not-empty');
  } else {
     $(this).removeClass('not-empty');
  }
});


