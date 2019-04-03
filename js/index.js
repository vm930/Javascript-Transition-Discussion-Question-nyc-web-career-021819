// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener("DOMContentLoaded",function(){
  const buttonTag = document.querySelector("#save_lincoln")
  const userInputTag = document.querySelector("#interval")

  buttonTag.addEventListener("click",function(e){
    console.log("its in")
    let interval = parseInt(userInputTag.value)
    console.log(interval)
    fadeOutEffect()

  })
})


function fadeOutEffect() {
  var fadeTarget = document.getElementById("foreground");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.001;
    } else {
      clearInterval(fadeEffect);
    }
  }, interval);
}
