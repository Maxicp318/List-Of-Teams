import { ListaEquipos } from "./components/listadoEquipos";
import Styles from './app.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from "./pages/mainPage";
import { Details } from './pages/details';

export function App(){
    return(
        <Router>
            <header>
                <h1 className={Styles.titulo}>Equipos de futbol Argentino</h1>          
            </header>
            <main>
                <Routes>
                    <Route exact path="/details/:equipoId" element={<Details />} />
                    <Route exact path="/equipos" element={<ListaEquipos />}/>
                    <Route path="/" element={<MainPage />}></Route>
                    {/*<Route path="/" element={<MainPage />}></Route> */}   
                </Routes>
            </main>
        </Router>
    )
}




