// App.tsx
import * as React from 'react';
import TodoProvider from './context/todoContext';
import Todos from './containers/Todos';
import AddTodo from './components/AddTodo';
import ThemeWrapper from './components/ThemeWrapper';
import './styles.css';
import ThemeProvider from './context/themeContext';

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className='App'>
            <h1>My Todos</h1>
            <AddTodo />
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  )
}