const readline = require('readline'); //The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.


//nstances of the InterfaceConstructor class are constructed using the readline.createInterface() method. Every
//instance is associated with a single input Readable stream and a single output Writable stream.The output stream
// is used to print prompts for user input that arrives on, and is read from, the input stream.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//heavily nested callback functions is called as callback waterfall
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

            rl.close();//the Node.js application will not terminate until the readline.Interface is closed because the interface waits for data to be received on the input stream.
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