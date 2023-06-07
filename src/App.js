import { Fragment } from 'react';
import Header from './components/Layout/Header';
import './App.css';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Fragment className="App">
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
