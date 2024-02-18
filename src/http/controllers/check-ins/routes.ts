import { FastifyInstance } from 'fastify'
import { verifyJWT } from '@/http/middleware/verify-jwt'
import { create } from './create'
import { history } from './history'
import { metrics } from './metrics'
import { validate } from './validate'

export async function checkRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('check-ins/history', history)
  app.get('check-ins/metrics', metrics)

  app.post('/gyms/:gymId/check-ins', create)
  app.patch('/gyms/:checkInId/check-ins', validate)
}
