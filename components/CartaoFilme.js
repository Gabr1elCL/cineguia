import { Pressable, StyleSheet, Text, View } from 'react-native';
import cores from '../theme/cores';

export default function CartaoFilme({ filme, favorito, aoPressionar, aoFavoritar }) {
  return (
    <Pressable style={styles.cartao} onPress={aoPressionar}>
      <View style={[styles.poster, { backgroundColor: filme.cor }]}>
        <Text style={styles.emoji}>{filme.emoji}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.titulo} numberOfLines={2}>
          {filme.titulo}
        </Text>
        <Text style={styles.detalhe}>{`${filme.ano} • ${filme.genero}`}</Text>
        <Text style={styles.detalhe} numberOfLines={1}>
          {filme.diretor}
        </Text>
      </View>

      <Pressable onPress={aoFavoritar} hitSlop={12} style={styles.botaoFavorito}>
        <Text style={[styles.coracao, favorito && styles.coracaoAtivo]}>
          {favorito ? '♥' : '♡'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: cores.cartao,
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
  },
  poster: {
    width: 64,
    height: 84,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 30,
  },
  info: {
    flex: 1,
    marginLeft: 14,
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: cores.texto,
    marginBottom: 4,
  },
  detalhe: {
    fontSize: 13,
    color: cores.textoSuave,
    marginTop: 2,
  },
  botaoFavorito: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coracao: {
    fontSize: 26,
    color: cores.textoSuave,
  },
  coracaoAtivo: {
    color: cores.perigo,
  },
});
