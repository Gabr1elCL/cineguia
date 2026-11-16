const filmes = [
  {
    id: 1,
    titulo: 'O Poderoso Chefão',
    ano: 1972,
    genero: 'Drama',
    diretor: 'Francis Ford Coppola',
    emoji: '🌹',
    cor: '#8b2e2e',
    descricao:
      'A saga de uma família mafiosa italiana nos Estados Unidos e a transição de poder do pai para o filho mais novo.',
  },
  {
    id: 2,
    titulo: 'Pulp Fiction',
    ano: 1994,
    genero: 'Crime',
    diretor: 'Quentin Tarantino',
    emoji: '💼',
    cor: '#a88400',
    descricao:
      'Várias histórias de criminosos de Los Angeles se cruzam em uma narrativa fora de ordem, cheia de diálogos marcantes.',
  },
  {
    id: 3,
    titulo: 'Matrix',
    ano: 1999,
    genero: 'Ficção científica',
    diretor: 'Lana e Lilly Wachowski',
    emoji: '💊',
    cor: '#0f7d31',
    descricao:
      'Um programador descobre que a realidade que conhece é uma simulação e se junta à resistência humana.',
  },
  {
    id: 4,
    titulo: 'Interestelar',
    ano: 2014,
    genero: 'Ficção científica',
    diretor: 'Christopher Nolan',
    emoji: '🚀',
    cor: '#2a5db0',
    descricao:
      'Com a Terra em declínio, um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade.',
  },
  {
    id: 5,
    titulo: 'A Origem',
    ano: 2010,
    genero: 'Ficção científica',
    diretor: 'Christopher Nolan',
    emoji: '🌀',
    cor: '#5b4bd6',
    descricao:
      'Um ladrão especializado em invadir sonhos recebe a missão de plantar uma ideia na mente de um empresário.',
  },
  {
    id: 6,
    titulo: 'Parasita',
    ano: 2019,
    genero: 'Drama',
    diretor: 'Bong Joon-ho',
    emoji: '🏠',
    cor: '#4f7a4f',
    descricao:
      'Uma família pobre se infiltra aos poucos na vida de uma família rica, com consequências cada vez mais imprevisíveis.',
  },
  {
    id: 7,
    titulo: 'Cidade de Deus',
    ano: 2002,
    genero: 'Crime',
    diretor: 'Fernando Meirelles',
    emoji: '🔫',
    cor: '#c26a14',
    descricao:
      'Dois jovens crescem em uma favela do Rio de Janeiro e seguem caminhos opostos em meio à violência do tráfico.',
  },
  {
    id: 8,
    titulo: 'Clube da Luta',
    ano: 1999,
    genero: 'Drama',
    diretor: 'David Fincher',
    emoji: '🥊',
    cor: '#a33a63',
    descricao:
      'Um homem insone cria, junto de um desconhecido carismático, um clube secreto de lutas que foge do controle.',
  },
  {
    id: 9,
    titulo: 'A Viagem de Chihiro',
    ano: 2001,
    genero: 'Animação',
    diretor: 'Hayao Miyazaki',
    emoji: '🐉',
    cor: '#1f8a9c',
    descricao:
      'Uma menina fica presa em um mundo de espíritos e precisa trabalhar numa casa de banhos para salvar seus pais.',
  },
  {
    id: 10,
    titulo: 'Central do Brasil',
    ano: 1998,
    genero: 'Drama',
    diretor: 'Walter Salles',
    emoji: '🚉',
    cor: '#8f7340',
    descricao:
      'Uma ex-professora que escreve cartas numa estação do Rio acompanha um menino em busca do pai no sertão.',
  },
  {
    id: 11,
    titulo: 'Blade Runner',
    ano: 1982,
    genero: 'Ficção científica',
    diretor: 'Ridley Scott',
    emoji: '🌃',
    cor: '#a52a6d',
    descricao:
      'Em uma Los Angeles futurista e chuvosa, um caçador de androides persegue réplicas que fugiram para a Terra.',
  },
  {
    id: 12,
    titulo: 'Mad Max: Estrada da Fúria',
    ano: 2015,
    genero: 'Ação',
    diretor: 'George Miller',
    emoji: '🔥',
    cor: '#d9640f',
    descricao:
      'Em um deserto pós-apocalíptico, uma fuga em alta velocidade vira uma perseguição sem trégua por água e liberdade.',
  },
  {
    id: 13,
    titulo: 'Whiplash',
    ano: 2014,
    genero: 'Drama',
    diretor: 'Damien Chazelle',
    emoji: '🥁',
    cor: '#7a4f17',
    descricao:
      'Um jovem baterista entra em um conservatório e enfrenta um professor extremamente rigoroso e perfeccionista.',
  },
  {
    id: 14,
    titulo: 'O Silêncio dos Inocentes',
    ano: 1991,
    genero: 'Suspense',
    diretor: 'Jonathan Demme',
    emoji: '🦋',
    cor: '#555570',
    descricao:
      'Uma agente do FBI pede ajuda a um brilhante e perigoso criminoso preso para encontrar outro assassino em série.',
  },
];

export default filmes;
