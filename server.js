// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 3010;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/api/job', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});



router.route('/job')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        const response = {"clientName":"TestCviaPost1","address":"addvipostman1","coatingSpec":null,"coatingSys":null,"tcno":"TC-9991","date":null,"maskingReq":null,"nacelevelcert":null,"inspector":null,"partList":[{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part2","qnt":null,"jobwo":null,"tcno":null,"revNo":"3","inspector":"VT"},{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part1","qnt":null,"jobwo":null,"tcno":null,"revNo":null,"inspector":"AM"}]};
        res.json(response);

    })

    // get all the bears (accessed at GET http://localhost:8080/api/bears)
    .get(function(req, res) {
        const response = [{"clientName":"TestCviaPost1","address":"addvipostman1","coatingSpec":null,"coatingSys":null,"tcno":"TC-9991","date":null,"maskingReq":null,"nacelevelcert":null,"inspector":null,"partList":[{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part2","qnt":null,"jobwo":null,"tcno":null,"revNo":"3","inspector":"VT"},{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part1","qnt":null,"jobwo":null,"tcno":null,"revNo":null,"inspector":"AM"}]},
        {"clientName":"TestCviaPost1","address":"addvipostman1","coatingSpec":null,"coatingSys":null,"tcno":"TC-9991","date":null,"maskingReq":null,"nacelevelcert":null,"inspector":null,"partList":[{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part2","qnt":null,"jobwo":null,"tcno":null,"revNo":"3","inspector":"VT"},{"pono":null,"partno":null,"serialno":null,"heatno":null,"heatlotno":null,"partname":"Part1","qnt":null,"jobwo":null,"tcno":null,"revNo":null,"inspector":"AM"}]}]
        res.json(response);
    });


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);