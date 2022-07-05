import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numberCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();

// console.log(numberCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
const sort = new Sorter(charactersCollection);
sort.sort();

console.log(charactersCollection.data);
