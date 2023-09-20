import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import equipos from '../equipos.json';
import Styles from './detail.module.css'

export function Details(){ 
    let { equipoId } = useParams();
    const eq = equipos.find(e => e.id === equipoId);
    
    return(
        <div className={Styles.detailsContainer}>
            <img width={400} height={225} className={`${Styles.imgStadium} ${Styles.col}`} src={eq.stadium} alt={eq['stadium name']} />
            <div className={`${Styles.col}`}>
                <img className={Styles.imgLogo} src={eq.images.urlLogo} alt={eq.fullName} />
                <h1 className={Styles.strong}>{eq.fullName}</h1>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Fundacion: </strong>{eq.foundation}
                </p>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Apodo: </strong>{eq.nickName}
                </p>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Colores: </strong>{eq.color}
                </p>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Nombre Del Estadio: </strong>{eq['stadium name']}
                </p>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Apodo Del Estadio: </strong>{eq['stadium nickname']}
                </p>
                <p className={Styles.p}>
                    <strong className={Styles.strong}>Clasico Rival: </strong>{eq['classic rival']}
                </p>
            </div>
            <Link className={Styles.link} to="/equipos">volver</Link>
        </div>
    )
}