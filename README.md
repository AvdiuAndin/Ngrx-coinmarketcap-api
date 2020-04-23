# Cryptocurrency
### Components in application
These are the components that are build in this application and they interact with coinmarketcap API and change the state. 

1. Cryptocurrency List  
   - The cryptocurrency has top 100 cryptocurrencies
   - The list has a refresh button
   - Each item in the list have the following info: 
     - rank
     - symbol
     - price in the selected fiat currency 
     - 24 hour change  
   - If you click on the item, you are shown the cryptocurrency details
     
2. Cryptocurrency Details: 
   - This screen should is more info about the selected cryptocurrency
     - rank
     - name
     - symbol
     - 24h volume and market cap in the selected fiat currency
     - price in bitcoin
     - 24 hour change 
     - 1h change, 24h change, 7d change
     - total and available supply
   - The list has a refresh (button)
  
3. Settings
    - This screen is accessible through an icon in the tool bar that is present on all other screens  
    - User can select one of the following fiat currencies:  
      - USD  
      - EUR  
      - CNY  
    - This component hold the state of the current selected currency
    


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
