import type { RequestHandler } from 'express'

export const search: RequestHandler = (_, res) => {
  res.send('Search page')
}
