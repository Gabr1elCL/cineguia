import { useEffect, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Botao from '../components/Botao';
import CartaoFilme from '../components/CartaoFilme';
import Chip from '../components/Chip';
import cores from '../theme/cores';

export default function Home({ navigation, filmes, favoritos, aoFavoritar }) {
  const [busca, setBusca] = useState('');
  const [generoAtivo, setGeneroAtivo] = useState('Todos');
  const [indiceDestaque, setIndiceDestaque] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceDestaque((atual) => (atual + 1) % filmes.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [filmes.length]);

  const generos = ['Todos', ...new Set(filmes.map((filme) => filme.genero))];
  const destaque = filmes[indiceDestaque % filmes.length];
  const termo = busca.trim().toLowerCase();

  const filmesFiltrados = filmes.filter((filme) => {
    const combinaGenero = generoAtivo === 'Todos' || filme.genero === generoAtivo;
    const combinaBusca =
      filme.titulo.toLowerCase().includes(termo) || filme.diretor.toLowerCase().includes(termo);

    return combinaGenero && combinaBusca;
  });

  const abrirDetalhes = (id) => navigation.navigate('Detalhes', { id });

  const cabecalho = (
    <View>
      <Pressable style={styles.destaque} onPress={() => abrirDetalhes(destaque.id)}>
        <Text style={styles.destaqueRotulo}>EM DESTAQUE</Text>
        <Text style={styles.destaqueTitulo}>{`${destaque.emoji} ${destaque.titulo}`}</Text>
        <Text style={styles.destaqueDetalhe}>{`${destaque.ano} • ${destaque.genero}`}</Text>
      </Pressable>

      <View style={styles.acoes}>
        <View style={styles.acao}>
          <Botao titulo="♥ Favoritos" aoPressionar={() => navigation.navigate('Favoritos')} />
        </View>
        <View style={styles.acao}>
          <Botao
            titulo="+ Adicionar filme"
            tipo="secundario"
            aoPressionar={() => navigation.navigate('AdicionarFilme')}
          />
        </View>
      </View>

      <TextInput
        style={styles.busca}
        value={busca}
        onChangeText={setBusca}
        placeholder="Buscar por título ou diretor"
        placeholderTextColor={cores.textoSuave}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>
        {generos.map((genero) => (
          <Chip
            key={genero}
            texto={genero}
            ativo={genero === generoAtivo}
            aoPressionar={() => setGeneroAtivo(genero)}
          />
        ))}
      </ScrollView>

      <Text style={styles.contador}>
        {`${filmesFiltrados.length} ${filmesFiltrados.length === 1 ? 'filme' : 'filmes'}`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filmesFiltrados}
        keyExtractor={(filme) => String(filme.id)}
        renderItem={({ item }) => (
          <CartaoFilme
            filme={item}
            favorito={favoritos.includes(item.id)}
            aoPressionar={() => abrirDetalhes(item.id)}
            aoFavoritar={() => aoFavoritar(item.id)}
          />
        )}
        ListHeaderComponent={cabecalho}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhum filme encontrado.</Text>}
        contentContainerStyle={styles.lista}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  lista: {
    padding: 16,
  },
  destaque: {
    backgroundColor: cores.cartaoClaro,
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  destaqueRotulo: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    color: cores.destaque,
    marginBottom: 6,
  },
  destaqueTitulo: {
    fontSize: 20,
    fontWeight: '700',
    color: cores.texto,
  },
  destaqueDetalhe: {
    fontSize: 14,
    color: cores.textoSuave,
    marginTop: 4,
  },
  acoes: {
    flexDirection: 'row',
    marginBottom: 14,
  },
  acao: {
    flex: 1,
    marginHorizontal: 4,
  },
  busca: {
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: cores.cartao,
    color: cores.texto,
    fontSize: 16,
    marginBottom: 12,
  },
  chips: {
    flexGrow: 0,
    marginBottom: 12,
  },
  contador: {
    fontSize: 13,
    color: cores.textoSuave,
    marginBottom: 10,
  },
  vazio: {
    textAlign: 'center',
    color: cores.textoSuave,
    fontSize: 16,
    marginTop: 30,
  },
});
