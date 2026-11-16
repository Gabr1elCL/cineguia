import { Pressable, StyleSheet, Text } from 'react-native';
import cores from '../theme/cores';

export default function Chip({ texto, ativo, aoPressionar }) {
  return (
    <Pressable onPress={aoPressionar} style={[styles.chip, ativo && styles.chipAtivo]}>
      <Text style={[styles.texto, ativo && styles.textoAtivo]}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: cores.cartao,
    marginRight: 8,
  },
  chipAtivo: {
    backgroundColor: cores.destaque,
  },
  texto: {
    fontSize: 14,
    color: cores.textoSuave,
  },
  textoAtivo: {
    color: cores.textoEscuro,
    fontWeight: '700',
  },
});
