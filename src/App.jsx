import React from 'react'
import Navbar from './Components/Navbar';

const App = () => {
  return (
  <>
    <div className='Tablet:overflow-x-hidden Tablet:overflow-y-auto Tablet:h-auto LS:overflow-x-hidden LS:overflow-y-auto LS:h-auto'>
      <Navbar />
    </div>
  </>
  )
}

export default App;