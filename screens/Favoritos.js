import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartaoFilme from '../components/CartaoFilme';
import cores from '../theme/cores';

export default function Favoritos({ navigation, filmes, favoritos, aoFavoritar }) {
  const filmesFavoritos = filmes.filter((filme) => favoritos.includes(filme.id));

  return (
    <View style={styles.container}>
      <FlatList
        data={filmesFavoritos}
        keyExtractor={(filme) => String(filme.id)}
        renderItem={({ item }) => (
          <CartaoFilme
            filme={item}
            favorito
            aoPressionar={() => navigation.navigate('Detalhes', { id: item.id })}
            aoFavoritar={() => aoFavoritar(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Você ainda não favoritou nenhum filme. Toque no coração de um filme para salvá-lo aqui.
          </Text>
        }
        contentContainerStyle={styles.lista}
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
  vazio: {
    textAlign: 'center',
    color: cores.textoSuave,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 40,
  },
});
