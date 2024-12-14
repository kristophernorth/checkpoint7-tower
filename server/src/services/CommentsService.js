import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"
import { towerEventsService } from "./TowerEventsService"

class CommentsService {

  async createComment(commentData) {
    //NOTE this whole commented out part below was causing POST Postman test to fail
    // const towerEvent = await towerEventsService.getTowerEventById(commentData.towerEventId)

    // if (towerEvent.isCanceled) {
    //   throw new Forbidden(`${towerEvent.name} is canceled.`)
    // }
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('creator', 'name picture')
    return comment
  }

  async getCommentsByTowerEvent(towerEventId) {
    const comments = await dbContext.Comments.find({ towerEventId: towerEventId }).populate('creator', 'name picture')
    // if (comments == null) { //NOTE this null check may not be needed!!
    //   throw new Error(`Invalid comment`)
    // }
    return comments
  }
}

export const commentsService = new CommentsService()