import { Router } from 'express'
import { home, dogs, cats, fishes } from '../controllers/page'
import { search } from '../controllers/search'

const router = Router()

router.get('/', home)
router.get('/dogs', dogs)
router.get('/cats', cats)
router.get('/fishes', fishes)

router.get('/search', search)

export default router
