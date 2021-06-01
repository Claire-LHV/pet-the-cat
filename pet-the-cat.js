function petcat() {
  document.getElementById('DoNotPet').className = 'hidden';
  document.getElementById('GotBitten').className = 'bite container';
  var mess = "You've been bitten by the cat!";
  lateAlert(mess);
}

function ouch() {
  document.getElementById('DoNotPet').className = 'container';
  document.getElementById('GotBitten').className = 'hidden';
}

function lateAlert(message) {
  setTimeout(function () {
    alert(message);
  }, 1000);
}
