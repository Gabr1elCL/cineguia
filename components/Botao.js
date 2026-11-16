import { Pressable, StyleSheet, Text } from 'react-native';
import cores from '../theme/cores';

export default function Botao({ titulo, aoPressionar, tipo = 'principal' }) {
  const secundario = tipo === 'secundario';

  return (
    <Pressable
      onPress={aoPressionar}
      style={({ pressed }) => [
        styles.botao,
        secundario ? styles.secundario : styles.principal,
        pressed && styles.pressionado,
      ]}
    >
      <Text style={[styles.texto, secundario && styles.textoSecundario]}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  principal: {
    backgroundColor: cores.destaque,
  },
  secundario: {
    backgroundColor: cores.cartaoClaro,
  },
  pressionado: {
    opacity: 0.8,
  },
  texto: {
    fontSize: 15,
    fontWeight: '700',
    color: cores.textoEscuro,
    textAlign: 'center',
  },
  textoSecundario: {
    color: cores.texto,
  },
});
