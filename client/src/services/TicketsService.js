import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Ticket } from "@/models/Ticket.js"
import { AppState } from "@/AppState.js"

class TicketsService{

  async createTicket(towerEventData) {
    const response = await api.post('api/tickets', towerEventData)
    logger.log('Created ticket', response.data)
    const ticket = new Ticket(response.data)
    AppState.purchasedEvents.push(ticket)
  }

  async getTicketHoldersByEvent(towerEventId) {
    AppState.ticketHolderProfiles = []
    const response = await api.get(`api/events/${towerEventId}/tickets`)
    logger.log('Tickets by event', response.data)
    const tickets = response.data.map(ticketData => new Ticket(ticketData))
    AppState.ticketHolderProfiles = tickets
  }
}

export const ticketsService = new TicketsService()