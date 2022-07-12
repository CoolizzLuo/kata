import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { Metadatakeys } from './MetadataKeys';
import { Request, Response, NextFunction, RequestHandler } from 'express';

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        console.log(req.body);
        res.status(422).send(`Missing property ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  return function (target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(Metadatakeys.path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(Metadatakeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(Metadatakeys.middleware, target.prototype, key) || [];
      const requiredBodyProps = Reflect.getMetadata(Metadatakeys.validator, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
