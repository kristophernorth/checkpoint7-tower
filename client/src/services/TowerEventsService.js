import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class TowerEventsService{

  async getTowerEvents() {
    const response = await api.get('api/events')
    logger.log('Got tower events', response.data)
    // return towerEvents
}
}

export const towerEventsService = new TowerEventsService()