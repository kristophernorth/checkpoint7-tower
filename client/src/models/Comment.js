export class Comment {
  constructor(data) {
    this.creatorId = data.creatorId
    this.eventId = data.eventId
    this.body = data.body
    this.creator = data.creator
  }
}