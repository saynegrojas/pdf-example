const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

//pdf
const pdfTemplate = require('./documents/pdf-template.js');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//options for pdftemplate
const options = { 
  format: "Letter",
  orientation: "portrait",
  border: {
    "top": "0.5in",  
    "right": "0.5in",
    "bottom": "0.5in",
    "left": "0.5in"
  },

  paginationOffset: 1,
  header: {
    height: "25mm",
    contents: '<div style="text-align: center;"> Header Balboa Digital</div><hr>'
  },
  footer: {
    "height": "10mm",
    // contents: {
    //   first: '<div>Balboa Digital Footer<span style="color: #444; text-align: center;">{{page}}</span>/<span>{{pages}}</span></div>',
    //   2: '<div>Balboa Digital Footer<span style="color: #444; text-align: center;">{{page}}</span>/<span>{{pages}}</span></div>', // Any page number is working. 1-based index
    //   // default: '<span style="color: #444; display: text-align: end;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //   last: 'Balboa Digital Footer'
    // }
    contents: '<div style="text-align: center;"> Page {{page}} </div><hr>'
  }
}

//POST fetch data and generate pdf
app.post('/create-pdf', (req, res) => {
  //create requires us to pass html format value
  //pdfTemplate we set to require what is being sent from our client data and pass as an argument
  //last param is for options
  //toFile creates a file for us
  pdf.create(pdfTemplate(req.body), options).toFile('result.pdf', (err) => {
    //send back to client
    if (err) res.send(Promise.reject());
    res.send(Promise.resolve());
  });
});
//GET send generated pdf to client
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

app.listen(port, () => console.log(`Listening on port: ${port}`));