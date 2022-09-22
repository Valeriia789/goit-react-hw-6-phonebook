import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [
    {id: 1, name: 'Rosie Simpson', number: '459-12-56', group: true,},
    {id: 2, name: 'Hermione Kline', number: '443-89-12', group: true,},
    {id: 3, name: 'Eden Clements', number: '645-17-79', group: false,},
    {id: 4, name: 'Annie Copeland', number: '227-91-26', group: false,},

    // { id: 0, text: "Learn HTML and CSS", completed: true },
    // { id: 1, text: "Get good at JavaScript", completed: true },
    // { id: 2, text: "Master React", completed: false },
    // { id: 3, text: "Discover Redux", completed: false },
    // { id: 4, text: "Build amazing apps", completed: false },
  ],
  filters: {
    status: "all",
  },
};

const rootReducer = (state = initialState, action) => {
  return state;
};

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// ПОРЯДОК АРГУМЕНТОВ
// Если вам не нужно начальное состояние preloadedState, 
// то значение enhancer передается вторым аргументом. 
// В противном случае - третьим.






// import { configureStore } from '@reduxjs/toolkit'
// import { createAction, createReducer } from '@reduxjs/toolkit'

// export const increment = createAction('myValue/increment')
// export const decrement = createAction('myValue/decrement')
// // console.log(increment(100));

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// })

// export const store = configureStore({
//   reducer: {
//     myValue: myReducer,
//   },
// })

