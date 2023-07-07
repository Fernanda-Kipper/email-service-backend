const emailController = require("../controllers/EmailController");

async function EmailRoutes(server){
    server.post("/send", emailController.sendEmail)
}

module.exports = EmailRoutes;