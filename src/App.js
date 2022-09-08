import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'

const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./pages/Home')), 800);
    });
});

function App() {

  return (
      <Suspense fallback={<Loader/>}>
          <Home/>
      </Suspense>
    );
}

export default App;
