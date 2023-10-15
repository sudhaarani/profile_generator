const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name ? ', (answer) => {
  console.log(`Thank you for your valuable name: ${answer}`);

  rl.question('What\'s your favourite thing to eat for that meal ? ', (answer1) => {
    console.log(`ahh ${answer1}! It would taste delicious `);

    rl.question('What\'s your area of interest ? ', (answer2) => {
      console.log(`ohh ${answer2}!, my interest is that too `);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
        console.log(`Yes,${answer} should be simple and healthy.`);

        rl.question('Which sport is your absolute favourite? ', (answer) => {
          console.log(`${answer} it is always interesting to watch. `);

          rl.question('What do you listen to while doing that ? ', (answer) => {
            console.log(`${answer} thats a good choice! you know `);

            rl.close();
          });
        });
      });
    });
  });
});

// const readline = require('readline');
// const { stdin: input, stdout: output } = require('process');

// const rl = readline.createInterface({ input, output });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });