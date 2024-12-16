import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class CommentsService{
  
  async getCommentsByTowerEvent(towerEventId) {
    AppState.comments = []
    const response = await api.get(`api/event/${towerEventId}/comments`)
    logger.log('Comments by event', response.data)
    const comments = response.data.map(commentData => new Comment(commentData))
    AppState.comments = comments
  }
}

export const commentsService = new CommentsService()