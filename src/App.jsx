import Login from './Components/Login'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Admin from './Components/Admin'
import Home from './Components/Home'
import { isAuthenticated } from './Services/utility'
import './App.css'

function App() {
  
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/login" />;
  };

  return (
    <div className='root'>
      
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/admin' element={<ProtectedRoute>
        <Admin/>
      </ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App

// import React, { Suspense } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LottieAnimation from './animation/animation';
// import Login from './Login';
// import Admin from './Admin';
// import Home from './Home';

// import './App.css';

// function App() {
//   return (
//     <div className="root">
//       <BrowserRouter>
//         <LottieAnimation />
//         <Suspense fallback={<div>Loading...</div>}>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/admin" element={<Admin />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/a" element={<LottieAnimation />} />
//           </Routes>
//         </Suspense>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

