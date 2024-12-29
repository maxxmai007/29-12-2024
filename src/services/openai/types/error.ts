export class OpenAIServiceError extends Error {
  constructor(
    message: string,
    public code: string,
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'OpenAIServiceError';
  }
}