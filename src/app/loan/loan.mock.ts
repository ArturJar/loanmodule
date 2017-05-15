import { Loan } from './loan';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryLoanService implements InMemoryDbService {
    createDb() {
        let loans: Loan[] = [
            { id: 1, userId: 2, bookId: 1 },
            { id: 2, userId: 3, bookId: 2 },
            { id: 3, userId: 4, bookId: 4 },
        ];
        return { loans };
    }
}
