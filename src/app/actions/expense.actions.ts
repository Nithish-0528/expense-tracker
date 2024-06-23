import { Action } from '@ngrx/store';
import { Expense } from '../Domain/expense';

export const ADD_EXPENSE = 'Add Expense';
export const REMOVE_EXPENSE = 'Remove Expense';
export const UPDATE_EXPENSE = 'Update Expense';


export class AddExpense implements Action {
    readonly type = ADD_EXPENSE;

    constructor(public payload: Expense) { }
}

export class RemoveExpense implements Action {
    readonly type = REMOVE_EXPENSE;

    constructor(public payload: number) { }
}

export class UpdateExpense implements Action {
    readonly type = UPDATE_EXPENSE;

    constructor(public payload: Expense) { }
}

export type Actions = AddExpense | RemoveExpense | UpdateExpense;