import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage'
import SecondPage from './pages/SecondPage/SecondPage';


const App = () => {

  const storeData = useSelector(state => state.shopReducer.test)






  return (
    <Router>

      <div className='wrapper'>
        {storeData}
        <NavBar />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} />

        </Routes>


        <Footer />
      </div>
    </Router>

  )

}


export default App
