import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <div className="app">
      <Header />
      <Login />
      <Signup />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App;