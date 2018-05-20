require('dotenv').config();

const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		auth: {
			user: process.env.GMAIL_USERNAME,
			pass: process.env.GMAIL_PW
		}
  });

  // Configure body parser for AJAX requests
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  //mailer routing
  app.post('/sendemail', function(req, res){
  	console.log("req!", req);
  	const mailOptions = {
  	  from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      text: req.body.text
   }
  	// console.log(mailOptions);
  	transporter.sendMail(mailOptions, function(error, response){
  		if(error){
  			console.log(error);
  			res.end("error");
  		} else {
  		// console.log("Message sent: " + response.message);
  		res.end("sent");
  		}
  	});
  });

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
