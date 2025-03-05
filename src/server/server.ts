import Express from "express";
import funcionarios from "./routes/funcionarios";
import pacientes from "./routes/pacientes";
import login from "./routes/login";

const server = Express();

server.get("/", (req, res) => {
  res.send("test");
});

server.use(Express.json());
server.use("/funcionarios",funcionarios)
server.use("/login",login)
server.use("/pacientes",pacientes)

export default server;
