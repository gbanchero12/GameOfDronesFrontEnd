# GameOfDrones
# Game Of Drones - Guillermo Banchero:

# FrontEnd - Angular: https://github.com/gbanchero12/GameOfDronesFrontEnd  
# BackEnd - NodeJs: https://github.com/gbanchero12/GameOfDrones

# BackEnd:

Install dependencies: npm install

Build: npm run build

Start application: npm start

EndPoints: 

GET http://localhost:3000/gamble/:id/:id

GET http://http://localhost:3000/statistics

MySQL:

Run the following script from the MySqlAdmin before run the app:

CREATE DATABASE NODE_DB;

USE NODE_DB;

CREATE TABLE table_statistics (
	ID INT(10) PRIMARY KEY,
	PLAYER VARCHAR(30),
	SCORE INT(10)
);

# FrontEnd:

Run ‘ng serve’ from the command line:

url: http://localhost:4200

Run in google chrome, previously deactivating CORS: https://alfilatov.com/posts/run-chrome-without-cors/


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

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
