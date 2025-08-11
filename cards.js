$(".card").click(function () {
    $(".card").removeClass("active");
    $(this).addClass("active");
  });
  document.getElementById(".card").style.transition = "all 0.2s";


  // function changeBackground() {
  //   var card = document.getElementById('card1');
  //   if (window.innerWidth <= 600) {
  //     card.style.background = "url('../Imagens/portfolioapmResponsivo.jpeg')";
  //   } else if (window.innerWidth <= 900) {
  //     card.style.background = "url('../Imagens/portfolioapmResponsivo.jpeg')";
  //   } else {
  //     card.style.background = "url('./Imagens/portfolioapm.jpg')";
  //   }
  // }

  // window.onload = changeBackground;
  // window.onresize = changeBackgroun;