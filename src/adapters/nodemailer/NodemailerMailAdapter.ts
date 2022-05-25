import nodemailer from 'nodemailer';

import { IMailAdapter, ISendMailData } from '../MailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'cf08b78b05b9db',
    pass: '8eace98d31a798',
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Kaic Pierre <kaicpierresilva2002@gmail.com>',
      subject,
      html: body,
    });
  }
}
