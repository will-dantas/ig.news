<h1 align="center">
  <img width="350px" src="https://raw.github.com/will-dantas/ig.news/main/public/images/Ig.news.png">
  <br />
  <a href="https://www.linkedin.com/in/william-dantas/">
    <img alt="Linkedin" src="https://img.shields.io/badge/-William%20Dantas-61dafb?label=Linkedin&logo=linkedin&style=flat-square">
  </a>
  <a href="https://github.com/will-dantas/dtmoney/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/will-dantas/dtmoney?color=eba417&style=flat-square">
  </a>
  <a href="https://github.com/will-dantas/dtmoney/issues?q=is%3Aissue+is%3Aclosed">
    <img alt="GitHub issues" src="https://badgen.net/github/closed-issues/will-dantas/dtmoney?color=61dafb&style=flat-square">
  </a>
  <a href="https://github.com/will-dantas/dtmoney/network">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/will-dantas/dtmoney?color=eba417&style=flat-square">
  </a>
  <a href="https://github.com/will-dantas/dtmoney/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/will-dantas/dtmoney?color=61dafb&style=flat-square">
  </a>
</h1>

# ✍️ Description
### Se trata de uma aplicação web Front-End e JAMSatck densenvolvido com os frameworks JavaScript ReactJS e Next.JS.
O Ignews é uma plataforma de posts atualizados sobre o ReactJS, onde o usuário pode se autenticar pelo GitHub graças ao Next-auth, mas só poderá ter acesso aos posts completos ao se inscrever na plataforma, que é feito utilizando a API do Stripe, onde todos os dados importantes para a aplicação vão ficar salvos no banco de dados serverless do FaunaDB. Os posts são publicados e atualizados através do CMS Prismic, mais uma vez sendo possível pelo consumo de suas APIs.
<br />
Para que as pesquisa, como feitas no Google, possam indexar e rastrear facilmente o conteúdo, é se utilizado do método de SSR (Server-Side Rendering), de forma que, o conteúdo pode ser renderizado antes que a página seja carregada, feito de forma dinâmica. Nas páginas que são estáticas, é utilizado o método de SSG (Static Site Generator), onde a performance do carregamento das páginas HTML passa a ser muito mias rápido, graças ao seu pré carregamento.


<br />

## ⚙️ Tools Used
- [React.js](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [HTML](https://www.learn-html.org/)
- [SASS](https://sass-lang.com/)
- [Stripe](https://stripe.com/br)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)
- [Figma](https://www.figma.com/ui-design-tool/)


# 📋 Installation

```bash
# Clone this repository HTTPS.
$ git clone https://github.com/will-dantas/ig.news.git

## Available Scripts
In the project directory, you can run:

$ yarn dev
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

$ yarn build
Builds the app for production to the `build` folder.

$ yarn eject
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
```
