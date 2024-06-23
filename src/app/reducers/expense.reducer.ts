import { Expense } from "../Domain/expense";
import { AppState } from "../app.state";
import * as ExpenseActions from './../actions/expense.actions';
import { ActionReducerMap } from "@ngrx/store";


const initialState: Expense = {
    expense: 'Food',
    amount: 120,
    id: 1
}

export function reducer(state: Expense[] | undefined = [initialState], action: ExpenseActions.Actions) {
    return state;
    // switch (action.type) {
    //     case ExpenseActions.ADD_EXPENSE:
    //         var maximumId;
    //         var maxExpense;
    //         if (state.length > 0) {
    //             maxExpense = state.reduce(function (prev, curr) {
    //                 return prev.id > curr.id ? prev : curr
    //             });
    //             maximumId = maxExpense.id;
    //         } else {
    //             maximumId = 0;
    //         }
    //         action.payload.id = maximumId + 1;
    //         return [...state, action.payload];
    //     case ExpenseActions.REMOVE_EXPENSE:
    //         var index = state.findIndex(x => x.id === action.payload);
    //         state.splice(index, 1);
    //         return state;
    //     case ExpenseActions.UPDATE_EXPENSE:
    //         var index = state.findIndex(x => x.id === action.payload.id);
    //         state[index] = action.payload;
    //         return state;
    //     default:
    //         return state;
    // }
}