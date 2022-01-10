import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'; 
import Head from 'next/head';
import styles from './styles.module.scss'
import { getPrismicClient } from '../../services/prismic';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title> 
      </Head>

      <main className={styles.container}>
        <div className={styles.posts }>
          <a href="">
            <time>9 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>exceto para obter alguma vantagem com isso? Mas quem tem o direito de criticar um homem que escolhe desfrutar de um prazer que não tem consequências desagradáveis, ou aquele que evita uma dor que não produz o prazer resultante?</p>
          </a>
          <a href="">
            <time>9 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>exceto para obter alguma vantagem com isso? Mas quem tem o direito de criticar um homem que escolhe desfrutar de um prazer que não tem consequências desagradáveis, ou aquele que evita uma dor que não produz o prazer resultante?</p>
          </a>
          <a href="">
            <time>9 de janeiro de 2022</time>
            <strong>Titulo</strong>
            <p>exceto para obter alguma vantagem com isso? Mas quem tem o direito de criticar um homem que escolhe desfrutar de um prazer que não tem consequências desagradáveis, ou aquele que evita uma dor que não produz o prazer resultante?</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100, 
  })
  console.log(JSON.stringify(response, null, 2))

  return {
    props: {}
  }

}