import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import SignIn from './pages/sign-in'
import ResetPassword from './pages/reset-password'
import ConfirmEmail from './pages/confirm-email'
import Confirmation from './pages/confirmation'
import Dashboard from './pages/Dashboard'
import Layout from './layout'
import AddCollection from './pages/add-collection'
import Guide from './pages/guide'
import Dig from './pages/dig'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgot' element={<ResetPassword />} />
        <Route path='/confirm' element={<ConfirmEmail />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/' element={<Layout />} >
          <Route path='/' index element={<Dashboard />} />
          <Route path='/add-collection' element={<AddCollection />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/dig' element={<Dig />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App