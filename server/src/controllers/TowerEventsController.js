import { Auth0Provider } from "@bcwdev/auth0provider";
import { towerEventsService } from "../services/TowerEventsService";
import BaseController from "../utils/BaseController";
import { ticketsService } from "../services/TicketsService";
import { commentsService } from "../services/CommentsService";

export class TowerEventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAllTowerEvents)
      .get('/:towerEventId', this.getTowerEventById)
      .get('/:towerEventId/tickets', this.getTicketsByTowerEvent)
      .get('/:towerEventId/comments', this.getCommentsByTowerEvent)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createTowerEvent)
      .put('/:towerEventId', this.updateTowerEvent)
      .delete('/:towerEventId', this.cancelTowerEvent)
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

  async updateTowerEvent(request, response, next) {
    try {
      const towerEventId = request.params.towerEventId
      const updatedData = request.body
      const userInfo = request.userInfo
      const updatedTowerEvent = await towerEventsService.updateTowerEvent(towerEventId, updatedData, userInfo.id)
      response.send(updatedTowerEvent)
    } catch (error) {
      next(error)
    }
  }

  async cancelTowerEvent(request, response, next) {
    try {
      const towerEventId = request.params.towerEventId
      const towerEvent = await towerEventsService.cancelTowerEvent(towerEventId)
      response.send(towerEvent)
    } catch (error) {
      next(error)
    }
  }

  async getTicketsByTowerEvent(request, response, next) {
    try {
      const towerEventId = request.params.towerEventId
      const tickets = await ticketsService.getTicketsByTowerEvent(towerEventId)
      response.send(tickets)
    } catch (error) {
      next(error)
    }
  }

  async getCommentsByTowerEvent(request, response, next) {
    try {
      const towerEventId = request.params.towerEventId
      const comments = await commentsService.getCommentsByTowerEvent(towerEventId)
      response.send(comments)
    } catch (error) {
      next(error)
    }
  }
}