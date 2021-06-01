function petcat() {
  document.getElementById('DoNotPet').className = 'hidden';
  document.getElementById('GotBitten').className = '';
  var mess = "You've been biten by the cat!";
  lateAlert(mess);
}

function ouch() {
  document.getElementById('DoNotPet').className = '';
  document.getElementById('GotBitten').className = 'hidden';
}

function lateAlert(message) {
  setTimeout(function () {
    alert(message);
  }, 500);
}
