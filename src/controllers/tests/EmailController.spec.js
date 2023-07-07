const MailQueue = require('../../queue/MailQueue');
const { sendEmail } = require('../emailController');

jest.mock('../../queue/MailQueue');

describe('sendEmail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send an email successfully and return 200', async () => {
    const request = {
      body: {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
      },
    };
    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await sendEmail(request, reply);

    expect(MailQueue.add).toHaveBeenCalledTimes(1);
    expect(MailQueue.add).toHaveBeenCalledWith({
      to: 'test@example.com',
      from: process.env.EMAIL_FROM,
      subject: 'Assinatura Confirmada',
      text: `
        Olá John Doe, sua assinatura foi confirmada!
        Para acessar seus recursos exclusivos você precisa basta clicar aqui.
    `,
    });
    expect(reply.code).toHaveBeenCalledWith(200);
    expect(reply.send).toHaveBeenCalledTimes(1);
  });

  it('should handle errors and return 500 status code', async () => {
    const request = {
      body: {
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
      },
    };
    const reply = {
      code: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    MailQueue.add.mockRejectedValue(new Error('Some error'));

    await sendEmail(request, reply);

    expect(MailQueue.add).toHaveBeenCalledTimes(1);
    expect(reply.code).toHaveBeenCalledWith(500);
    expect(reply.send).toHaveBeenCalledWith('Internal Server Error');
  });
});
