interface ISendMailData {
  subject: string;
  body: string;
}

interface IMailAdapter {
  sendMail: (data: ISendMailData) => Promise<void>;
}

export { IMailAdapter, ISendMailData };
