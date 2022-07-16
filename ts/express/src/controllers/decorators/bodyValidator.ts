import 'reflect-metadata';
import { Metadatakeys } from './MetadataKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(Metadatakeys.validator, keys, target, key);
  };
}
