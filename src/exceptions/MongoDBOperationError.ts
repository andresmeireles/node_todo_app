export default class MongoDBOperationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
