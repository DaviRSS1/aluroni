import React from "react";
import { CgSearch } from 'react-icons/cg'
import styles from './Buscador.module.scss'

interface PropsBuscador{
    busca: string;
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: PropsBuscador) {
    return <div className={styles.buscador}>
        <input 
            value={busca}
            placeholder="Buscar"
            onChange={evento => setBusca(evento.target.value)}
        />
        <CgSearch 
            size={20}
            color="#4C4D5E"
        />
    </div>
}