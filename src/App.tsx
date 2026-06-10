import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Music from './Music/Music';
import Programming from './Programming/Programming';
import RootLayout from './Root';
import Home from './home/Home';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home />},
      { path: '/music', element: <Music />},
      { path: '/programming', element: <Programming />}
    ]
  },
])


function App() {
  console.log(location.pathname);
  return (
    <>
     <div>Welcome to my page</div>
     <div className="page-title">Tomasz Laboj</div>
      <RouterProvider router={router} />
    </>
  )
}

export default App
