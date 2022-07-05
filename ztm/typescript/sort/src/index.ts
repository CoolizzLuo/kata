import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numberCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();

// console.log(numberCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// const sort = new Sorter(charactersCollection);
// sort.sort();

// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
