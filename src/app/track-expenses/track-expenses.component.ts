import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Expense } from '../Domain/expense';
import { ExchangeTrackerService } from '../exchange-tracker.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-track-expenses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './track-expenses.component.html',
  styleUrl: './track-expenses.component.css'
})
export class TrackExpensesComponent implements OnInit {

  public config = ['expense', 'amount'];
  public total = 0;

  public observable: Observable<any>;

  getAddedExpensesApi: Observable<Expense[]>;
  constructor(public exchangeTrackerService: ExchangeTrackerService,
    public store: Store<AppState>
  ) {
  }

  ngOnInit() {
    this.getAddedExpensesApi = this.exchangeTrackerService.listOfAddedExpenses();
    this.exchangeTrackerService.listOfAddedExpenses().subscribe((e: Expense[])=> {
      if (e.length) {
        e.forEach((expense: Expense)=> {
          this.total += expense.amount;
        })
      }
    })
    // this.observable = this.store.select('expenseStore')
    // this.observable.subscribe((e: Expense[]) => {
    //   if (e.length) {
    //     e.forEach((expense: Expense) => {
    //       this.total += expense.amount;
    //     })
    //   }
    // })
  }

}
