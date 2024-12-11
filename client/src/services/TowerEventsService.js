import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { TowerEvent } from "@/models/TowerEvent.js"

class TowerEventsService{

  async getTowerEvents() {
    const response = await api.get('api/events')
    logger.log('Got tower events', response.data)
    const towerEvents = response.data.map(towerEventData => new TowerEvent(towerEventData))
    AppState.towerEvents = towerEvents
}

  async getTowerEventById(towerEventId) {
    const response = await api.get(`api/events/${towerEventId}`)
    logger.log('Got album by ID', response.data)    
    const towerEvent = new TowerEvent(response.data)
    AppState.activeTowerEvent = towerEvent
}
}

export const towerEventsService = new TowerEventsService()