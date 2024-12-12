import { dbContext } from "../db/DbContext"

class TowerEventsService {

  async createTowerEvent(towerEventData) {
    const towerEvent = await dbContext.TowerEvents.create(towerEventData)
    await towerEvent.populate('creator', 'name event')
    return towerEvent
  }
  async getAllTowerEvents() {
    const towerEvents = await dbContext.TowerEvents.find().populate('creator', 'name event').sort('startDate')
    return towerEvents
  }

  async getTowerEventById(towerEventId) {
    const towerEvent = (await dbContext.TowerEvents.findById(towerEventId)).populate('creator', 'name event')
    return towerEvent
  }

}
export const towerEventsService = new TowerEventsService()