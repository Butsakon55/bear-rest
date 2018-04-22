var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var bears = [

    {
     id:1,name:"bud"
    },{
        id:2,name:"bud1"
    }
];
var cors = require('cors');
router.route('/bears')
.get(function(req,res){
    res.send(bears)
})
.post(function(req, res) {
var bear = {};
bear.name = req.body.name;
bears.push(bear);
res.json({ message: 'Bear created!' });
});
app.use(cors())
// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);
app.listen(8000);