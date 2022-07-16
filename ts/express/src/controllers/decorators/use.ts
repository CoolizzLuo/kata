import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Metadatakeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares = Reflect.getMetadata(Metadatakeys.middleware, target, key) || [];

    middlewares.push(middleware);

    Reflect.defineMetadata(Metadatakeys.middleware, [...middlewares, middleware], target, key);
  };
}
