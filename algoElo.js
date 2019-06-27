let players = [
  {
    name: "Kevin",
    elo: 1000
  },
  {
    name: "Sylène",
    elo: 1000
  },
  {
    name: "Cloé",
    elo: 1000
  },
  {
    name: "Amine",
    elo: 1000
  },
  {
    name: "Enzo",
    elo: 1000
  }
];

K = 32;

//eloX is the player who won

const ratingChange = (PlayerX, PlayerY) => {
  //Expected Winning percentage of player X

  let EWP_X = 1 / ((1 + 10) ^ ((PlayerY - PlayerX) / 400));
  let EWP_Y = 1 / ((1 + 10) ^ ((PlayerX - PlayerY) / 400));

  //WP=Winning Percentage

  WP = 1;

  //Player X and Y rating change

  PlayerX = Math.round(PlayerX + K * (WP - EWP_X));
  PlayerY = Math.round(PlayerY - K * (WP - EWP_Y));

  console.log(`WinnerElo = ${PlayerX}, LoserElo = ${PlayerY}`);
};
ratingChange(players[0].elo, players[1].elo);

// export default ratingChange;
