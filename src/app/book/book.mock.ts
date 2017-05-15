import { Book } from './book';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryBooksService implements InMemoryDbService {
  createDb() {
    let books: Book[] = [
      { id: 1, title: 'Fairy Tales Every Child Should Know', author: 'Charles Bukowski', identificationNumber: '258-59-34587-23-3' },
      { id: 2, title: 'Winnie the pooh', author: 'Ernest Hemingway', identificationNumber: '578-15-52459-18-5' },
      { id: 3, title: 'The Little Prince', author: 'Leopold Tyrmand', identificationNumber: '247-65-97654-59-5' },
      { id: 4, title: 'Adventures of Huckleberry Finn', author: 'Célinie Charles', identificationNumber: '618-24-59746-89-7' },
      { id: 5, title: 'The Secret Adversary', author: 'Mick Jagger', identificationNumber: '834-91-57298-24-9' },
      { id: 6, title: 'Dracula', author: 'Fiodor Michajłowicz Dostojewski', identificationNumber: '549-27-369854-64-8' }
    ];
    return { books };
  }
}
