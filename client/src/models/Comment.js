export class Comment {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.eventId = data.eventId
    this.picture = data.picture
    this.body = data.body
    this.creator = data.creator
  }
}