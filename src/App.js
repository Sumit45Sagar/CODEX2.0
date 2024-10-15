// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Home from './pages/Home';
// import EditorPage from './pages/EditorPage';

// function App() {
//     return (
//         <>
//             <div>
//                 <Toaster
//                     position="top-right"
//                     toastOptions={{
//                         success: {
//                             theme: {
//                                 primary: '#4aed88',
//                             },
//                         },
//                     }}
//                 ></Toaster>
//             </div>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<Home />}></Route>
//                     <Route
//                         path="/editor/:roomId"
//                         element={<EditorPage />}
//                     ></Route>
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;



// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Home from './pages/Home'; // Keep this in pages
// import EditorPage from './pages/EditorPage'; // Keep this in pages
// import Login from './components/Login';  // Updated path


// function App() {
//     return (
//         <>
//             <div>
//                 <Toaster
//                     position="top-right"
//                     toastOptions={{
//                         success: {
//                             theme: {
//                                 primary: '#4aed88',
//                             },
//                         },
//                     }}
//                 ></Toaster>
//             </div>
//             <BrowserRouter>
//                 <Routes>
//                     {/* Existing Routes */}
//                     <Route path="/" element={<Home />}></Route>
//                     <Route path="/editor/:roomId" element={<EditorPage />}></Route>
                    
//                     {/* New Routes */}
//                     <Route path="/login" element={<Login />}></Route>
                   
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default App;



import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'; // Keep this in pages
import EditorPage from './pages/EditorPage'; // Keep this in pages
import Login from './components/Login';  // Updated path
import Signup from './components/Signup';  // Import the Signup component

function App() {
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <Routes>
                    {/* Existing Routes */}
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/editor/:roomId" element={<EditorPage />}></Route>
                    
                    {/* New Routes */}
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route> {/* Added signup route */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
