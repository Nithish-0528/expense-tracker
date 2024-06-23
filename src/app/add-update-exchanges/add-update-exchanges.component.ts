import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ExchangeTrackerService } from '../exchange-tracker.service';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Expense } from '../Domain/expense';
import { Observable, max } from 'rxjs';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { Store, StoreFeatureModule, StoreModule, StoreRootModule } from '@ngrx/store';
import { AppState } from '../app.state';
import * as ExpenseActions from './../actions/expense.actions'
import { reducer } from '../reducers/expense.reducer';


@Component({
  selector: 'app-add-update-exchanges',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, StoreRootModule],
  providers: [],
  templateUrl: './add-update-exchanges.component.html',
  styleUrl: './add-update-exchanges.component.css'
})
export class AddUpdateExchangesComponent {

  @ViewChild("expenseForm") expenseForm: NgForm;
  public config = ['expense', 'amount', 'action'];
  public data: Observable<Expense[]>;
  constructor(public exchangeTrackerService: ExchangeTrackerService,
    private store: Store<AppState>
  ) { }

  public onSubmit(expenseForm: any) {
    if (expenseForm && expenseForm.expense && expenseForm.amount) {
      var maximumId;
      var maxExpense;
      if (this.exchangeTrackerService.addedExpenses.length > 0) {
        maxExpense = this.exchangeTrackerService?.addedExpenses?.reduce(function (prev, curr) {
          return prev.id > curr.id ? prev : curr
        });
        maximumId = maxExpense.id;
      } else {
        maximumId = 0;
      }

      if (expenseForm?.id) {
        var index = this.exchangeTrackerService.addedExpenses
          .findIndex(x => x.id === expenseForm.id);
        this.exchangeTrackerService.addedExpenses[index] = expenseForm;
      } else {
        expenseForm.id = maximumId + 1
        this.exchangeTrackerService.addExpenses(expenseForm);
      }
      this.expenseForm.resetForm();
    } else {
      alert('Field Invalid')
    }

  }

  // public onSubmit(expenseForm: any) {
  //   console.log(expenseForm, 'form output');
  //   if (expenseForm && expenseForm.expense && expenseForm.amount) {

  //     if (expenseForm?.id) {
  //       console.log('id present')
  //       this.store.dispatch(new ExpenseActions.UpdateExpense(expenseForm))

  //     } else {
  //       console.log('id not present')
  //       // this.exchangeTrackerService.addedExpenses.
  //       this.store.dispatch(new ExpenseActions.AddExpense(expenseForm))

  //     }
  //     this.expenseForm.resetForm();
  //   } else {
  //     alert('Field Invalid')
  //   }

  // }
  public onEdit(expense: Expense) {
    this.expenseForm.setValue(expense);
  }

  public deleteExpense(expense: Expense) {
    this.store.dispatch(new ExpenseActions.RemoveExpense(expense.id));
  }

}
