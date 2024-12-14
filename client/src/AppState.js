import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  /** @type {import('./models/TowerEvent.js').TowerEvent []} */
  towerEvents: [],
  /** @type {import('./models/TowerEvent.js').TowerEvent} */
  activeTowerEvent: null,
  /** @type {import('./models/Ticket.js').Ticket []} */
  tickets: [],
  /** @type {import('./models/Ticket.js').Ticket []} */
  purchasedEvents: [],
  /** @type {import('./models/Ticket.js').Ticket []} */
  attendeeProfiles: [],
  /** @type {import('./models/Comment.js').Comment []} */
  comments: []
})