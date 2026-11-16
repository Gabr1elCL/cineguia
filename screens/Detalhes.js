import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';
import cores from '../theme/cores';

export default function Detalhes({ route, navigation, filmes, favoritos, aoFavoritar }) {
  const { id } = route.params;
  const filme = filmes.find((item) => item.id === id);

  if (!filme) {
    return (
      <View style={styles.container}>
        <Text style={styles.aviso}>Filme não encontrado.</Text>
      </View>
    );
  }

  const favorito = favoritos.includes(id);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <View style={[styles.poster, { backgroundColor: filme.cor }]}>
        <Text style={styles.emoji}>{filme.emoji}</Text>
      </View>

      <Text style={styles.titulo}>{filme.titulo}</Text>
      <Text style={styles.meta}>{`${filme.ano} • ${filme.genero}`}</Text>
      <Text style={styles.meta}>{`Direção: ${filme.diretor}`}</Text>

      <Text style={styles.descricao}>{filme.descricao}</Text>

      <View style={styles.botoes}>
        <Botao
          titulo={favorito ? 'Remover dos favoritos' : '♥ Favoritar'}
          aoPressionar={() => aoFavoritar(id)}
        />
        <View style={styles.espaco} />
        <Botao titulo="Voltar" tipo="secundario" aoPressionar={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },
  conteudo: {
    padding: 16,
  },
  poster: {
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  emoji: {
    fontSize: 72,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: cores.texto,
    marginBottom: 6,
  },
  meta: {
    fontSize: 15,
    color: cores.textoSuave,
    marginBottom: 2,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 24,
    color: cores.texto,
    marginTop: 18,
    marginBottom: 24,
  },
  botoes: {
    marginBottom: 20,
  },
  espaco: {
    height: 10,
  },
  aviso: {
    textAlign: 'center',
    color: cores.textoSuave,
    fontSize: 16,
    marginTop: 40,
  },
});
