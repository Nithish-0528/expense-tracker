import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/expense.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'exchangeTracker';

  constructor(private router: Router) {
    this.router.navigate(['']);
  }
}
