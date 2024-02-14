// const game = (p1, p2) => {
//    const params = { 'rock': 1, 'paper': 2, 'scissors': 3 };
//    p1 = params[p1];
//    p2 = params[p2];
//    if (p1 === p2) { return "Draw!" }
//    if (p1 % 3 === p2 - 1) { return "Player 1 won!" }
//    return "Player 2 won!";
//  };
 
//  console.log(game('rock', 'scissors')); 
//  console.log(game( 'scissors', 'rock')); 
 
 const game = (p1, p2) => {
   const params = { 'rock': 3, 'paper': 1, 'scissors': 2 };
   p1 = params[p1];
   p2 = params[p2];
   if (p1 === p2)  return "Draw!" 
   if ((p1 === 3 && p2 === 1) || (p1 === 1 && p2 === 2) || (p1 === 2 && p2 === 3))  return "Player 2 won!" 
   return "Player 1 won!";
 };
 
 console.log(game('rock', 'scissors'));
//  console.log(game( 'scissors', 'rock'));
 console.log(game( 'rock', 'rock'));
 