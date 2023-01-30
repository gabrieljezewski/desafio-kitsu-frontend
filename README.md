<h1 align="center">Desafio Kitsu Frontend</h1>
<p> Desafio técnico para processo de nivelamento de conhecimento em desenvolvimento de software.</p>

## Features

- [x] Realizar consultas na API https://kitsu.docs.apiary.io
- [x] Listagem dos anime/mangás mais populares.
- [x] Ao clicar em algum anime/manga é aberto um modal com as seguintes informações:
  - Imagem;
  - Nome;
  - Ranking de popularidade;
  - Quantidade de capitulos/episódios;
  - Sinopse;
  - Media de avaliações;
- [x] O layout da aplicação deve estar conforme neste link <a href="https://www.figma.com/file/DoHcQ1PKnpYoj6kAYiKI2Q/Teste?node-id=134%3A607">Figma</a>.
- [x] Uma barra de pesquisa, onde é possível pesquisar um anime/mangá por nome.
- [ ] Possibilidade de colocar Anime/Manga como favorito.

## Pré- requisitos
Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas: <a href="https://git-scm.com/">Git</a>, <a href="https://nodejs.org/en/">Node.js</a>. Além disso é bom ter um editor para trabalhar com o código como <a href="https://code.visualstudio.com/">VSCode.</a>

## Rodando a aplicação

```bash
# Clone este repositório:
$ git clone https://github.com/gabrieljezewski/desafio-kitsu-frontend.git
```

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-ktisu-frontend
```

```bash
# Instale as dependências:
$ npm i
```

```bash
# Execute a aplicação em modo de desenvolvimento:
$ npm run dev
```

Após isso, no console do terminal irá apresentar em qual url:porta o servidor estará rodando, ex: http://localhost:3000, basta copiar e acessar este endereço em seu browser.

# Tecnologias

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled-components](https://styled-components.com/)

# Screenshot

<p>Animes mais populares.</p>
<img src="/src/assets/pagAnimes.PNG" />

<p>Mangás mais populares</p>
<img src="/src/assets/pagMangas.PNG" />

<p>Modal</p>
<img src="/src/assets/modal.PNG" />

<p>Página Mobile</p>
<img src="/src/assets/pagMobile.PNG" width="390px" heigth="844px" />

<p>Modal Mobile</p>
<img src="/src/assets/modalMobile.PNG" width="390px" heigth="844px" />
