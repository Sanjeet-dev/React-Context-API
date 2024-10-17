import './App.css';
import { useState } from 'react';
import { ItemContext, TotalContext } from './Context';
import Items from './components/Items';
import Navbar from './components/Navbar';


function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <ItemContext.Provider value={{item,setItem}} >
      <TotalContext.Provider value={{total, setTotal}}>
      <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
        </div>
      </TotalContext.Provider>
    </ItemContext.Provider>
  );
}
export default App;
