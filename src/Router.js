
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Galery from './Routers/Galery';
import Layout from './Routers/Layout';
import "./App.css"
import "./Error.css";
const Router = () => {
  const Home = () => <h1>Home</h1>;
  const AboutMe = () => <h1>About Me</h1>;
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout />} className="App">
            <Route path="home" element={<Home />}></Route>
            <Route path="aboutMe" element={<AboutMe />}></Route>
            <Route path="galery" element={<Galery />}></Route>
            **<Route path="galery/:id" element={<h2>Detalles</h2>}></Route>**
            <Route path="*" element={<div className='error'></div>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;