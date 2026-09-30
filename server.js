const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const index = fs.readFileSync(path.join(__dirname, "index.html"));

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(index);
  }

  if (req.url === "/api/login" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      let data = {};
      try {
        data = JSON.parse(body);
      } catch {}

      const ok =
        data.email === "teste@email.com" &&
        data.senha === "123456";

      res.writeHead(ok ? 200 : 401, {
        "Content-Type": "application/json"
      });

      res.end(JSON.stringify({
        sucesso: ok,
        mensagem: ok ? "Login realizado com sucesso" : "E-mail ou senha inválidos"
      }));
    });

    return;
  }

  res.writeHead(404);
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Aplicação: http://localhost:${PORT}`);
});