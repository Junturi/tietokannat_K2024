//Tehtävä 15

var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  }
)

//GET-metodi ilman parametrejä
router.get('/', function(req,res){
        res.send('This is an example of a GET-method without parameters, using routers.');
        console.log('Example with no parameters, using routers');
    }
)

//GET-metodi kahdella parametrillä
router.get('/:firstName/:lastName',function(req, res){
    res.send('Hello '+req.params.firstName+" "+req.params.lastName+ '! This is an example of GET-method with two parameters, using routers.');
    console.log('Example with two parameters, using routers');
}
)

module.exports = router;