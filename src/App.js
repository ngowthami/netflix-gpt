import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Browse from './components/Browse';
import Login from './components/Login';

function App() {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    }, 
    {
      path: "/browse",
      element: <Browse/>
    }
  ])
  
    return (
      <div>
      <RouterProvider router={appRouter}/>
      </div>
    );
}

export default App;
