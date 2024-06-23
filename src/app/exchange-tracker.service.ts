import { Injectable } from '@angular/core';
import { Expense } from './Domain/expense';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeTrackerService {

  addedExpenses: Expense[] = []

  constructor() { }

  public addExpenses(expense: Expense) {
    this.addedExpenses = [...this.addedExpenses, expense];
  }

  public listOfAddedExpenses(): Observable<Expense[]> {
    return of(this.addedExpenses);
  }
}
