# ExchangeTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Expense tracker with standalone components

This project is a simple expense tracker built using Angular. It allows users to add, edit, and delete expenses. The application uses NgRx for state management and showcases the use of standalone components.

Features
Add new expenses with description, amount, and date.
Edit existing expenses.
Delete expenses.
View a list of all expenses.

Components
Add Update Expense Component (expense-list)

Provides a form to add or edit expenses.
Validates input fields for description and amount.
Uses reactive forms for managing user input.

Calculate Expenses Component (expense-form)

Displays a list of all expenses.
Displays total expenses amount.

State Management
NgRx Store
Uses a single store to manage the application state.
State includes an array of expenses (Expense[]).
