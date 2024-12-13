import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"


class TicketsService {

  async createTicket(ticketData) {
    const ticket = await dbContext.Tickets.create(ticketData)
    await ticket.populate('profile', 'eventId')
    return ticket
  }

  async getMyTickets(userId) {
    const myTickets = await dbContext.Tickets.find({ accountId: userId }).populate('event')
    return myTickets
  }

  async getTicketsByTowerEvent(towerEventId) {
    const tickets = await dbContext.Tickets.find({ eventId: towerEventId }).populate('profile')
    return tickets
  }

  async deleteTicket(ticketId, userId) {
    const ticketToDelete = await dbContext.Tickets.findById(ticketId)
    if (ticketToDelete == null) {
      throw new Error(`Invalid ticket ID: ${ticketId}`)
    }
    if (ticketToDelete.accountId != userId) {
      throw new Forbidden("You're not allowed to delete another person's tickets")
    }
    await ticketToDelete.deleteOne()
    return 'No longer attending the event'
  }
}

export const ticketsService = new TicketsService()