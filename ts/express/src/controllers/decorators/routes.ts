import 'reflect-metadata';
import { Methods } from './Methods';
import { Metadatakeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandleDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandleDescriptor) {
      Reflect.defineMetadata(Metadatakeys.path, path, target, key);
      Reflect.defineMetadata(Metadatakeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const post = routeBinder(Methods.post);
export const put = routeBinder(Methods.put);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);
