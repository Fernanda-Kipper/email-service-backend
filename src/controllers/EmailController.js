const MailQueue = require("../queue/MailQueue");

async function sendEmail(request, reply){
    const {
        email,
        firstName,
        lastName
    } = request.body

    const template = `
        Olá ${firstName} ${lastName}, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos você precisa basta clicar aqui.
    `

    try {
        await MailQueue.add({
            to: email,
            from: process.env.EMAIL_FROM,
            subject: "Assinatura Confirmada",
            text: template
        })
        return reply.code(200).send();
    } catch {
        return reply.code(500).send("Internal Server Error");
    }
}

module.exports = {
    sendEmail
}