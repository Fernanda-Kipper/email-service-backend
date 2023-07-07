const fastify = require("fastify");
const EmailRoutes = require("./routes/email");
const cors = require("@fastify/cors");
const formBody = require("@fastify/formbody");

const server = fastify();

const corsOptions = {
    credentials: true,
    origin:  /localhost\:5173/,
}
server.register(cors, corsOptions);
server.register(formBody);

server.register(EmailRoutes);

server.listen({
    port: process.env.PORT || 3200
})