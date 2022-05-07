import React from 'react'
// import Phone from './Components/Question 2/screens/Phone'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import { UserDetails,Nav,NotFound, Error } from './Components/Question 1/UserDetails';
import ImagesGallery from './Components/Question 3/ImagesGallery'
// import Layout from './Components/Question 1/Layout';



function App() {
  return ( 
    <>
    <div>
     <ImagesGallery />
     {/* <Phone /> */}
     
    </div>
    {/* <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/Userdetails" element={<UserDetails />}  />
                <Route path="/Nav/:uname" element={<Nav />}></Route>
                <Route path="/Error" element={<Error />}></Route>
                <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    </div> */}
    </>
  )
}

export default App