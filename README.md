# Установка

```
npm install
```

# Запуск в режиме разработки

```
npm start
```
Адрес в браузере: [http://localhost:3000](http://localhost:3000)

Из сторонних библиотек используется [Redux](https://github.com/reduxjs/redux) (в том числе [react-redux](https://github.com/reduxjs/react-redux) и [redux-thunk](https://github.com/reduxjs/redux-thunk)) для управления состоянием приложения.
# Запуск тестов

```
npm test
```
Для юнит-тестов используется [Jest](https://github.com/facebook/jest) (в том числе [react-testing-library](https://github.com/testing-library/react-testing-library) и [jest-dom](https://github.com/testing-library/jest-dom) для тестирования React-компонентов и DOM), а также [redux-mock-store](https://github.com/reduxjs/redux-mock-store) для заглушки Redux Store.