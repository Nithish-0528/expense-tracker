import { Routes } from '@angular/router';
import { AddUpdateExchangesComponent } from './add-update-exchanges/add-update-exchanges.component';
import { TrackExpensesComponent } from './track-expenses/track-expenses.component';

export const routes: Routes = [
    {
        path: '',
        component: AddUpdateExchangesComponent
    },
    {
        path: 'track-expenses',
        component: TrackExpensesComponent
    }
];
