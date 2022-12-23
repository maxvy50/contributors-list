import React from 'react';
import './App.css';

function App() {
  // mainText -- строковый эквивалент содержимого div.main-text, 
  // необходим для маски текста над картинкой планеты
  const mainText = 'Explore Your own planet In our New metaverse';
  return (
    <>
        <div className={'container'}>
          <div className={'orbit-container'}>
            <div className="orbit"></div>
          </div>
          <div className={'main-text-container'}>
            <p className={'main-text'} data-text-mask={mainText}>
              Explore Your own planet In <span className='inverted'>our New</span> metaverse
            </p>
          </div>          
        </div>  
        <p className={'description-text'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
          
        
    </>
  );
}

export default App;
