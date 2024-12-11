export class TowerEvent {
  constructor(data) {
    this.id = data.id //TODO Should it be .id or _id?
    this.capacity = data.capacity
    this.coverImg = data.coverImg
    this.createdAt = data.createdAt
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.description = data.description
    this.isCanceled = data.isCanceled
    this.location = data.location
    this.name = data.name
    this.type = data.type
    this.startDate = new Date(data.startDate)
    this.updatedAt = new Date(data.updatedAt)
  }
}