## Data table

A sample data table which renders JSON dataset from [http://filltext.com](http://filltext.com).

Created with [Create React App](https://create-react-app.dev/). Deployed on [Heroku](https://www.heroku.com/).

URL: [https://data-table-wwwildcat.herokuapp.com/](https://data-table-wwwildcat.herokuapp.com/)

### Features
- Dataset size selection: small (32 rows) or large (1000 rows).
- Filter settings: filter can be applied on `Apply` button click or on change of input value.
- **Paging**: the table displays no more than 50 rows per page. A number input is used to navigate to the different pages.
- **Sorting**: click on the column header to sort the table by that column’s value. The first click will sort the data in ascending order, and the second click will then be descending.
- **Filtering**: enter a string into the filter input field, then apply it. The table will display only rows with data that includes the filter string.
- **Add new record**: click on `New record` button to open a form for adding a new record to the table. All fields in the form are required.
- Show additional fields: click on the table row to show additional user information at the bottom of the table.

### Technologies
- [Redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)

### Development
```
npm install
npm start
```
URL: [http://localhost:3000](http://localhost:3000)

### Unit testing
```
npm test
```
Using [Jest](https://github.com/facebook/jest), [react-testing-library](https://github.com/testing-library/react-testing-library), [jest-dom](https://github.com/testing-library/jest-dom) and [redux-mock-store](https://github.com/reduxjs/redux-mock-store).