import { ToastContainer } from 'react-toastify'
import { MyRoutes } from './routes';


import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'



function App() {

  return (
    <div className="App">
        <MyRoutes/>
        <ToastContainer />
    </div>
    );
}

export default App;
