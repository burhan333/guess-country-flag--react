import { lazy, Suspense } from "react";
import './assets/styles/app.scss'

// import Home from "./pages/Home";
// const Home = lazy(() => import('./pages/Home'))
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
