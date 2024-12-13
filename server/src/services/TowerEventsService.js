import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"

class TowerEventsService {

  async createTowerEvent(towerEventData) {
    const towerEvent = await dbContext.TowerEvents.create(towerEventData)
    await towerEvent.populate('creator', 'name event')
    await towerEvent.populate('ticketCount')
    return towerEvent
  }
  async getAllTowerEvents() {
    const towerEvents = await dbContext.TowerEvents.find().populate('creator').populate('ticketCount').sort('startDate')
    return towerEvents
  }

  async getTowerEventById(towerEventId) {
    const towerEvent = (await (await dbContext.TowerEvents.findById(towerEventId)).populate('creator', 'name event')).populate('ticketCount')
    if (towerEvent == null) {
      throw new Error(`Invalid event id: ${towerEventId}`)
    }
    return towerEvent
  }

  async updateTowerEvent(towerEventId, updateData, userId) {
    const originalTowerEvent = await dbContext.TowerEvents.findById(towerEventId)

    if (!originalTowerEvent) throw new Error(`No event to update at id: ${towerEventId}`)
    if (userId != originalTowerEvent.creatorId) throw new Forbidden("Can't update the event, you are not the creator")
    if (updateData.name) originalTowerEvent.name = updateData.name
    if (updateData.description) originalTowerEvent.description = updateData.description
    if (updateData.coverImg) originalTowerEvent.coverImg = updateData.coverImg
    if (updateData.location) originalTowerEvent.location = updateData.location
    if (updateData.capacity) originalTowerEvent.capacity = updateData.capacity
    if (updateData.startDate) originalTowerEvent.startDate = updateData.startDate
    if (updateData.type) originalTowerEvent.type = updateData.type
    originalTowerEvent.isCanceled = updateData.completed ?? originalTowerEvent.isCanceled
    await originalTowerEvent.save()
    return originalTowerEvent
  }

  async cancelTowerEvent(towerEventId) {
    const towerEventToCancel = await this.getTowerEventById(towerEventId)
    towerEventToCancel.isCanceled = !towerEventToCancel.isCanceled
    await towerEventToCancel.save()
    return towerEventToCancel
  }

}
export const towerEventsService = new TowerEventsService()