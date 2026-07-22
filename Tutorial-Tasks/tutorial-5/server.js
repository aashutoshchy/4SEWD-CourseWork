import http from "http";

// PORT number is a window through which network is allowed to access or computer
const PORT = "3000";

// Creates server
// Also we can define, how to handle request
// and send response in this server
const server = http.createServer((request, response) => {
  // Logic for how to handle http request
  // response.write("Hello, world");
  // response.end("!!!");
  if (request.url === "/") {
    // response.end(
    //   `
    //   <html>
    //     <body>Hello World!!!</body>
    //   </html>
    //  `,
    // );
    response.end("Welcome to my app!");
  } else if (request.method === "GET" && request.url === "/api/test") {
    response.writeHead(200, {
      "content-type": "application/json",
    });
    const testObj = {
      message: "Get request",
    };
    const jsonResponse = JSON.stringify(testObj);
    response.end(jsonResponse);
  } else if (request.method === "POST" && request.url === "/api/test") {
    response.writeHead(200, {
      "content-type": "application/json",
    });
    const testObj = {
      message: "POST request",
    };
    const jsonResponse = JSON.stringify(testObj);
    response.end(jsonResponse);
  } else {
    response.writeHead(404, {
      "content-type": "application/json",
    });
    response.end("Page Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`The server is listening at http://localhost:${PORT}`);
});
