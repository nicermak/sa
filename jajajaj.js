const http = require("http");
const fs = require("fs");

    
const server = http.createServer((request, response) => {
    console.log(request.url, request.method);
    const method = request.method;
    const url = request.url;
//i shited f
//type f in chat
     if (method === "GET") {
         if (url === "/") {
            sendResponse("Home.html", 200,  response);
         } else if (url === "/Snake!") {
            sendResponse("Snake.html", 200, response);
         } else if (url === "/Snake") {
            sendResponse("Snake.html", 200, response)};
     }

});
const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./${filename}`, (error, data) => {
        if (error) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/Plain");
            console.log(`[WARN]Error code ${error}`);
            alert("Error code 500");
        } else {
            response.statusCode = statusCode;
            response.setHeader("Content-Type", "text/html");
            response.end(data);
        }
    });
};
const port = 3000;
const ip = "192.168.11.9";

server.listen(port, ip, () => {
    console.log("work very well");
});