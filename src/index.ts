import server from "./server/server";
import * as dotenv from "dotenv" 

dotenv.config({ path: __dirname + "./../.env" })
const PORT = process.env.PORT || 2333;

server.listen(PORT , () => {
  console.log("Servidor rodando na porta " + PORT);
  
});
