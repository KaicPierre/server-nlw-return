interface IFeedbackData {
  type: string;
  comment: string;
  screenshot?: string;
}

interface IFeedbacksRepository {
  create: (data: IFeedbackData) => Promise<void>;
}

export { IFeedbacksRepository, IFeedbackData };
