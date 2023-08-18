import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './sobreMim.module.css'
import fotoSobreMim from 'assets/minha_foto.jpg'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre Mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Raí!
      </h3>

      <img src={fotoSobreMim} alt="Foto sobre mim" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>Eu sou Desenvoldedor Fronte-end apaixonado por programação, atualmente curso Ciências da Computação na USJT.</p>
      <p className={styles.paragrafo}>Minha paixão por computadores vem desde cedo, quando era criança sempre gostei de ficar jogando no computador e video-game, sempre busquei saber coisas relacionadas ao computador consequentemente me apaixonando cada vez mais pela área desde criança.</p>

    </PostModelo>
  )
}
