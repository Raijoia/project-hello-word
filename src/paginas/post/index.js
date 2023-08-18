import React from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NaoEncontrado from 'paginas/NaoEncontrada'
import PaginaPadrao from 'componentes/PaginaPadrao'
import PostCard from 'componentes/PostCard'
import styles from './Post.module.css'

export default function Post() {
  // useParams pega o seletor coringa :id que está no routes e nos passa o valor dele
  const parametros = useParams()

  const post = posts.find((post) => {
    return post.id === Number(parametros.id)
  })

  if (!post) {
    return <NaoEncontrado />
  }

  // filter => filtra | sort => coloca em forma decrescente | slice => deixa apenas 4 elementos na array
  const postsRecomendados = posts.filter((post) => post.id !== Number(parametros.id)).sort((a, b) => b.id - a.id).slice(0, 4)

  return (
    <PaginaPadrao>
      <PostModelo 
        fotoCapa={`/assets/posts/${post.id}/capa.png`} 
        titulo={post.titulo} 
      >
        <div className='post-markdown-container'>
          {/* ReactMarkdown => dependência para traduzir markdown para htm*/}
          <ReactMarkdown>
             {post.texto}
          </ReactMarkdown>
        </div>

        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>

        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>

      </PostModelo>
    </PaginaPadrao>
  )
}
