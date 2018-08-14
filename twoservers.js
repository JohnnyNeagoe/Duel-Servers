const HTTP = require("http");

const PORT1 = 7000;
const PORT2 = 7500;

let handleRequestOne = (request,response) => 
{ 
    let randomMessenger = ["Youre Awsome", "Looking good"];
    let rand = Math.round(Math.random()*randomMessenger.length - 1)
    let msg = randomMessenger[rand];
    response.end(msg, 'html');
    
};
let handleRequestTwo = (request,response) => 
{ 
    let randomMessenger = ["You suck", "Your coding is garbage"];
    let rand = Math.round(Math.random()*randomMessenger.length - 1)
    let msg = randomMessenger[rand];
    response.end(msg, 'html');
};

const goodServer = HTTP.createServer(handleRequestOne);
const badServer = HTTP.createServer(handleRequestTwo);

goodServer.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);

});
badServer.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
});