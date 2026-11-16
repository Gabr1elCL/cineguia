# CineGuia

## Descrição
CineGuia é um aplicativo de catálogo de filmes feito com React Native e Expo. Dá para buscar filmes por título ou diretor, filtrar por gênero, ver os detalhes de cada filme, favoritar os que gostar e cadastrar novos filmes pelo formulário.

## Aluno
Gabriel Carvalho Lemos — RGM: 42943124

## Telas
- **Home**: lista de filmes com filme em destaque que muda sozinho, campo de busca, filtro por gênero e botões para as outras telas.
- **Detalhes**: mostra os dados completos de um filme e permite favoritar ou remover dos favoritos.
- **Favoritos**: lista somente os filmes favoritados, com aviso quando não há nenhum.
- **Adicionar filme**: formulário para cadastrar um novo filme, com validação dos campos.

## Fonte de dados
Dados locais: array de objetos em `data/filmes.js`.

## Onde estão os requisitos
- Componentes: `components/CartaoFilme.js`, `components/Botao.js`, `components/Chip.js` e `components/CampoTexto.js`
- Props com callback: `aoPressionar` e `aoFavoritar` em `CartaoFilme`, `aoPressionar` em `Botao` e `Chip`, `aoMudar` em `CampoTexto`
- useState: `App.js` (filmes e favoritos), `screens/Home.js` (busca, gênero ativo e filme em destaque), `screens/AdicionarFilme.js` (formulário e erro)
- useEffect: `screens/Home.js`, com `setInterval` para trocar o filme em destaque, array de dependências e função de limpeza (`clearInterval`)
- Navegação com parâmetros: `navigation.navigate('Detalhes', { id })` em `screens/Home.js` e `screens/Favoritos.js`, lido com `route.params` em `screens/Detalhes.js`

## Vídeo de demonstração
demo/demo.mp4

## Como executar
```bash
npm install
npx expo start
```