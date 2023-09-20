import equipos from '../equipos.json';
import { Equipo } from './equipo';
import Styles from './listadoEquipos.module.css'
import { Link } from 'react-router-dom'

export function ListaEquipos() {
  return ( 
    <div className={Styles.containerUlLink}>
      <ul className={Styles.listadoGrid}>
        {equipos.map((equipo) => <Equipo key={equipo.id} equipo={equipo}/>)}
      </ul>
      <Link className={Styles.link} to="/">volver</Link>
    </div> 
  );
}
