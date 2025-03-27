import './global/reset.css';
import './global/App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Tools/Router';
import MainLayout from './components/Layouts/MainLayout';


function App() {

  return (
    <>
      <RouterProvider router={router}>
          <MainLayout />
      </RouterProvider>
    </>
  )
}

export default App;
