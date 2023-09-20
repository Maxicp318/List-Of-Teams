import { Link } from 'react-router-dom';
import afa from '../public/afa3estrellas.png';
import Styles from './mainPage.module.css'

export function MainPage(){
    return(
        <div className={Styles.containerPageMain}>
            <Link className={Styles.linkAfa} to="/equipos">
                <img className={Styles.imgAfa} src={afa} alt="logoAfa" />
            </Link>
        </div>
    )
}