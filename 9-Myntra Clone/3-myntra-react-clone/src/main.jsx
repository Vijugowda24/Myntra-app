import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Bag from './routes/Bag.jsx';
import Home from './routes/Home.jsx';
import store from './redux/store.jsx'
import { Provider } from 'react-redux';
const router = createBrowserRouter([
{
  path:"/", element:<App/>,
  children:[
    {
      path:'/', element: <Home/>
    },
    {
      path:'/bag', element:<Bag />
    }
  ]
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </Provider>

  </React.StrictMode>,
)
