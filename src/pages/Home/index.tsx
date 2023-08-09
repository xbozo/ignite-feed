import { Header } from "../../components/Header"
import { Post, PostType } from "../../components/Post"
import { Sidebar } from "../../components/Sidebar"

import "../../global.css"
import styles from "./styles.module.css"


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/xbozo.png",
      name: "Guilherme Viana",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala tropinhaaa 👋'},
      { type: 'paragraph', content: 'Acabei de aprender um pouco mais a fundo alguns fundamentos do React e exemplos de uso na vida real, com isso montei esse projeto abaixo 🐓' },
      { type: 'link', content:'abre.ai/81nomads'},
    ],
    publishedAt: new Date("2023-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://cdn.discordapp.com/attachments/966337602678566914/1125424062076817479/image11121111.png",
      name: "Yago Arruda",
      role: "Estelionatário"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Sou desempregado e estou em busca de emprego, qualquer um que quiser comprar conta de Valorant aí pra fortalecer, tamo junto!' },
      { type: 'link', content:'ggmax.com/yagu171'},
    ],
    publishedAt: new Date("2023-04-10 20:30:00"),
  },
]

export const Home = () => {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post  
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}