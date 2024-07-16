import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import View from './Pages/View'
import Contact from './Pages/Contact'
import Login from './Pages/Login'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/view' element={<View/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
