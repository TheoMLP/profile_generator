const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const paragraphContent = {};

rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  paragraphContent["name"] = answer1;
  rl.question("What's an activity you like doing?", (answer2) => {
    paragraphContent["activity"] = answer2;
    rl.question("What do you listen to while doing that?", (answer3) => {
      paragraphContent["music"] = answer3;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        paragraphContent["favoriteMeal"] = answer4;
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          paragraphContent["favoriteFood"] = answer5;
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            paragraphContent["sport"] = answer6;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!)", (answer7) => {
              paragraphContent["superpower"] = answer7;
              console.log(`${paragraphContent["name"]} loves listening to ${paragraphContent["music"]} while ${paragraphContent["activity"]}, devouring ${paragraphContent["favoriteFood"]} for ${paragraphContent["favoriteMeal"]}, prefers ${paragraphContent["sport"]} over any other sport, and is amazing at ${paragraphContent["superpower"]}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});