import { Link } from "react-router-dom";
import Styles from "./equipo.module.css";

export function Equipo({ equipo }){
    return(
        <Link className={Styles.linkLogo} to={"/details/" + equipo.id}>
            <li className={Styles.equipo}>
                <img  width={144} height={144} className={Styles.imgEquipo} src={equipo.images.urlLogo} alt="" />
                <div>     
                    {equipo.fullName}
                </div>
            </li>
        </Link>   
    )
}