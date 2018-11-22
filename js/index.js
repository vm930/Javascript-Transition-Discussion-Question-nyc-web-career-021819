const saveInterval = document.getElementById( 'interval' )
const startSaving = document.getElementById( 'save_lincoln' ).addEventListener( "click", () => ( saveLincoln( parseInt( saveInterval.value ) ) ) )
const zombieFace = document.getElementById( 'foreground' )
const hiddenMessage = document.getElementById( 'hidden-message' )

function saveLincoln( interval ) {
  console.log(interval)
  if ( isNaN( interval ) ) {
    interval = 100
  }
  var op = 1;
  var timer = setInterval( function () {
    if ( op <= 0.1 ) {
      clearInterval( timer );
      zombieFace.style.display = 'none';
      hiddenMessage.style.display = 'block'
    }
    zombieFace.style.opacity = op;
    op -= op * 0.01;
  }, interval );
}
