const express = require('express')
app = express()

var url = require('url');
var dt = require('./date-time');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser. 
app.use(express.static(__dirname + '/static'))

function randGen()
  {
    return (Math.floor(Math.random() * 6)) + 1;
  }

app.get("/api/v1", (req, res) => {
    
    // const allDicerolls = dicerollService.getAllDicerolls();
    // res.send({ status: "OK", data: allDicerolls });

    const { body } = req;

    let roller = [0,0,0,0,0,0]


    // body[1] == "true" ? roller[1] = randGen() : roller[1] = 0;
    // body[2] == "true" ? roller[2] = randGen() : roller[2] = 0;
    // body[3] == "true" ? roller[3] = randGen() : roller[3] = 0;
    // body[4] == "true" ? roller[4] = randGen() : roller[4] = 0;
    // body[5] == "true" ? roller[5] = randGen() : roller[5] = 0;

    res.json(roller);

    return;

    
  });

  app.get("/api/v1/test", (req, res) => { 

    let roller = [0,0,0,0,0,0]

    roller[1] = randGen() * Math.pow(randGen(), 2);
    roller[2] = randGen() * Math.pow(randGen(), 2);
    roller[3] = randGen() * Math.pow(randGen(), 2);
    roller[4] = randGen() * Math.pow(randGen(), 2);
    roller[5] = randGen() * Math.pow(randGen(), 2);

    avg = (roller[1] + roller[2] + roller[3] + roller[4] + roller[5]) / 5;

    msg = "This is only testing part of the capabilities of my API: <br>";

    msg = msg + "("
          + roller[1].toString() + " + "
          + roller[2].toString() + " + "
          + roller[3].toString() + " + "
          + roller[4].toString() + " + "
          + roller[5].toString() + ") / 5 = "
          + "<b>" + avg.toString() + "</b>";

    // send is natively HTML code.
    res.send(msg);
  });




// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Really Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Is Now An Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
