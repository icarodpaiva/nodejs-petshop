import type { RequestHandler } from 'express'

export const home: RequestHandler = (_, res) => {
  res.render('pages/page')
}

export const dogs: RequestHandler = (_, res) => {
  res.render('pages/page')
}

export const cats: RequestHandler = (_, res) => {
  res.render('pages/page')
}

export const fishes: RequestHandler = (_, res) => {
  res.render('pages/page')
}
