var view = {
  displayMessage: function(msg) {
    var message = document.getElementById('messageArea');
    message.innerHTML = msg;
  },
  displayHit: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class','hit');
  },
  displayMiss: function (location) {
    var cell = document.getElementById(location);
    cell.setAttribute('class','miss');
  },
}

var model = {
  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  ships: [{locations:['06,16,26'],hits:['','','']},
          {locations:['23,24,25'],hits:['','','']},
          {locations:['41,42,43'],hits:['','','']}],
  fire: function(guess) {
    for (var i = 0 ; i < this.numShips; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if (index >= 0) {
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMiss('Hit!');
        if (this.isSunk(ship)) {
          view.displayMessage('Congratulations! You have sanked all of my battleship!');
          this.shipsSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Ouch, You have missed, just try again!')
    return false;
  },
  isSunk: function(ship) {
    for (var i = 0; i < this.shipLength; i++){
      if (ship.hits[i] !== 'hit'){
        return false;
      }
    }
    return true;
  }
};
