import supertest from "supertest";
import server from "../server/server";

const testServer = supertest(server)

export default testServer