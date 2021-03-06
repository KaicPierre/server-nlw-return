/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from './SubmitFeedbackUseCase';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy },
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64',
      }),
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: '',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png;base64',
      }),
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'image.jpg',
      }),
    ).rejects.toThrow();
  });
});
