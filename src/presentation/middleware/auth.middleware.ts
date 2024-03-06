import { Request, Response, NextFunction } from 'express';

export function createContext(req: Request, res: Response, next: NextFunction): void {
  // Implementa lógica de middleware aquí si es necesario
  next();
}