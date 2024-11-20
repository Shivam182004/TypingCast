
import { Children } from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import DefaultFooter from './components/DefaultFooter';



function App() {
 
  return (
    <div className='max-w-screen-2xl mx-auto md:px-4'>
      <NavBar/>
    <div className='max-h[calc(100vh-80px)]'> 
     <Outlet/>
    </div>
    <DefaultFooter/>
    </div>
  )
}

export default App
