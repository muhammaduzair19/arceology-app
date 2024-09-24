import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/register'
import SignIn from './pages/sign-in'
import ResetPassword from './pages/reset-password'
import ConfirmEmail from './pages/confirm-email'
import Confirmation from './pages/confirmation'
import Dashboard from './pages/Dashboard'
import DashboardLayout from './layout/dashboard-layout'
import AppLayout from './layout/app-layout'
import AddCollection from './pages/add-collection'
import MenuItem from './pages/menu-item'
import Guide from './pages/guide'
import Dig from './pages/dig'
import Points from './pages/points'
import Features from './pages/features'
import Relations from './pages/relations'

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
        <Route path='/' element={<DashboardLayout />} >
          <Route path='/' index element={<Dashboard />} />
          <Route path='/add-collection' element={<AddCollection />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/dig' element={<Dig />} />
        </Route>
        <Route path='/' element={<AppLayout />} >
          <Route path='/menu-item' element={<MenuItem />} />
          <Route path='/points' element={<Points />} />
          <Route path='/features' element={<Features />} />
          <Route path='/relations' element={<Relations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App