// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const directory = "images";
const docsDirectory = path.join(__dirname, directory);

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join(docsDirectory, "veryhappydog.jpg");
    fs.readFile(imagePath, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Image not found</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1>Page not found! :(</h1>");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
