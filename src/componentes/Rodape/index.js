import React from 'react'
import styles from './Rodape.module.css'

// importando svg como componente 
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada.svg'

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />

      Desenvolvido por Raí
    </footer>
  )
}
