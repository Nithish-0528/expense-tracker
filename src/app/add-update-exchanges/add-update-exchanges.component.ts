import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ExchangeTrackerService } from '../exchange-tracker.service';
import { CommonModule, NgFor } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Expense } from '../Domain/expense';
import { max } from 'rxjs';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-update-exchanges',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './add-update-exchanges.component.html',
  styleUrl: './add-update-exchanges.component.css'
})
export class AddUpdateExchangesComponent {

  @ViewChild("expenseForm") expenseForm: NgForm;
  public config = ['expense', 'amount', 'action']
  constructor(public exchangeTrackerService: ExchangeTrackerService) { }

  public onSubmit(expenseForm: any) {
    console.log(expenseForm, 'form output');
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
      console.log(maximumId, 'max')

      if (expenseForm?.id) {
        console.log('id present')
        var index = this.exchangeTrackerService.addedExpenses
          .findIndex(x => x.id === expenseForm.id);
        this.exchangeTrackerService.addedExpenses[index] = expenseForm;
      } else {
        console.log('id not present')
        // this.exchangeTrackerService.addedExpenses.
        expenseForm.id = maximumId + 1
        this.exchangeTrackerService.addExpenses(expenseForm);
      }
      this.expenseForm.resetForm();
    } else {
      alert('Field Invalid')
    }

  }


  public onEdit(expense: Expense) {
    this.expenseForm.setValue(expense);
  }

  public deleteExpense(expense: Expense) {
    var index = this.exchangeTrackerService.addedExpenses
      .findIndex(x => x.id === expense.id);
    if (index > -1) {
      this.exchangeTrackerService.addedExpenses.splice(index, 1);
    }
  }

}
