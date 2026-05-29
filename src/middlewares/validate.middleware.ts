import type { Request, Response, NextFunction } from 'express'
import { Result, validationResult, type ValidationError } from 'express-validator'

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors: Result<ValidationError> = validationResult(req)

  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() })
    return
  }

  next()
}
