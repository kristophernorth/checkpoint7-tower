import { dbContext } from "../db/DbContext"

class TowerEventsService {

  async createTowerEvent(towerEventData) {
    const towerEvent = await dbContext.TowerEvents.create(towerEventData)
    await towerEvent.populate('creator')
    return towerEvent
  }
  async getAllTowerEvents() {
    const towerEvents = await dbContext.TowerEvents.find()
    return towerEvents
  }
}
export const towerEventsService = new TowerEventsService()