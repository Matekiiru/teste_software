const http = require("http");
const fs = require("fs");
const path = require("path");
const { validarLogin } = require("./auth");

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
      } catch {
        // Um corpo inválido será tratado como credenciais inválidas.
      }

      const resultado = validarLogin(data);
      res.writeHead(resultado.status, {
        "Content-Type": "application/json"
      });
      res.end(JSON.stringify({
        sucesso: resultado.sucesso,
        mensagem: resultado.mensagem
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
