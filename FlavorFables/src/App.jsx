import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Explore from './pages/Explore'
import RecipeDetail from './pages/RecipeDetail'

function Layout(){
  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/recipe/:id' element={<RecipeDetail />} />
    </Route>
  </Routes>
    </>
  )
}

export default App
