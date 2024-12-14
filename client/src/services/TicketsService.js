import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Ticket } from "@/models/Ticket.js"
import { AppState } from "@/AppState.js"

class TicketsService{

  async createTicket(towerEventData) {
    const response = await api.post('api/tickets', towerEventData)
    logger.log('Created ticket', response.data)
    const ticket = new Ticket(response.data)
    AppState.ticketHolders.push(ticket)
  }
}

export const ticketsService = new TicketsService()