import { lazy, Suspense } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'

const Home = lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./pages/Home')), 300);
    });
});

function App() {

  return (
      <Suspense fallback={<h1>LOADING....</h1>}>
          <Home/>
      </Suspense>
    );
}

export default App;
