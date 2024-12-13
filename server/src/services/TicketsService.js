import { dbContext } from "../db/DbContext"


class TicketsService {

  async createTicket(ticketData) {
    const ticket = await dbContext.Tickets.create(ticketData)
    await ticket.populate('profile', 'eventId')
    return ticket
  }
  async getMyTickets(userId) {
    const myTickets = await dbContext.Tickets.find({ accountId: userId }).populate({
      path: 'ticket', populate: {
        path: 'profile event',
        select: 'name picture'
      }
    })
    return myTickets
  }

  async getTicketsByEvent(eventId) {
    const tickets = await
  }
}

export const ticketsService = new TicketsService()