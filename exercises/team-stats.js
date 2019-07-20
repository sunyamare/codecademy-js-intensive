const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 21
    },
    {
      firstName: 'Mark',
      lastName: 'Zuckerberg',
      age: 31
    },
    {
      firstName: 'Franz',
      lastName: 'Kohler',
      age: 24
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Dooshs',
      teamPoints: 4,
      opponentPoints: 80
    },
    {
      opponent: 'FCB',
      teamPoints: 99,
      opponentPoints: 3
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  }, 
  addPlayer(firstName, lastName, age) {
    let newPlayer = { 
      firstname: firstName, 
      lastName: lastName,
      age: age 
    };
    this._players.push(newPlayer);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this._games.push(newGame);
  }
};
team.addPlayer('Steph', 'Curry',28);
team.addPlayer('Lisa', 'Leslie',44);
team.addPlayer('Bugs', 'Bunny',76);
console.log(team);
team.addGame('Anybody', '0', '44');
team.addGame('Nobody', '5', '442');
team.addGame('Rah', '999', '0');
console.log(team);
