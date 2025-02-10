import transactions from '../../transactions.json';
import { Transaction } from '../models/Transaction';

export const fetchTransactions = (): Promise<Transaction[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(transactions as Transaction[]), 1000); // Type assertion
    });
};