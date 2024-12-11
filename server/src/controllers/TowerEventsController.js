import { Auth0Provider } from "@bcwdev/auth0provider";
import { towerEventsService } from "../services/TowerEventsService";
import BaseController from "../utils/BaseController";

export class TowerEventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAllTowerEvents)
      .get('/:towerEventId', this.getTowerEventById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTowerEvent)
  }

  async createTowerEvent(request, response, next) {
    try {
      const towerEventData = request.body
      towerEventData.creatorId = request.userInfo.id
      const towerEvent = await towerEventsService.createTowerEvent(towerEventData)
      response.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async getAllTowerEvents(request, response, next) {
    try {
      const towerEvents = await towerEventsService.getAllTowerEvents()
      response.send(towerEvents)
    } catch (error) {
      next(error)
    }
  }

  async getTowerEventById(request, response, next) {
    try {
      const towerEventId = request.params.towerEventId
      const towerEvent = await towerEventsService.getTowerEventById(towerEventId)
      response.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }
}