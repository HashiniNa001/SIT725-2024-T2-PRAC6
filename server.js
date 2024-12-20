const express= require("express");
const res = require("express/lib/response");
const app= express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })

  app.get('/subtractTwoNumbers/:firstNumber/:secondNumber', function(req, res, next) {
    var firstNumber = parseInt(req.params.firstNumber);
    var secondNumber = parseInt(req.params.secondNumber);

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        res.json({ result: null, statusCode: 400, message: "Invalid input. Please provide numbers." }).status(400);
    } else {
        var result = firstNumber - secondNumber;
        res.json({ result: result, statusCode: 200 }).status(200);
    }
})


const port=8080;
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})