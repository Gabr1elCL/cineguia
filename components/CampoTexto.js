import { StyleSheet, Text, TextInput, View } from 'react-native';
import cores from '../theme/cores';

export default function CampoTexto({
  rotulo,
  valor,
  aoMudar,
  placeholder,
  teclado = 'default',
  multilinha = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.rotulo}>{rotulo}</Text>
      <TextInput
        style={[styles.campo, multilinha && styles.multilinha]}
        value={valor}
        onChangeText={aoMudar}
        placeholder={placeholder}
        placeholderTextColor={cores.textoSuave}
        keyboardType={teclado}
        multiline={multilinha}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  rotulo: {
    fontSize: 14,
    fontWeight: '600',
    color: cores.texto,
    marginBottom: 6,
  },
  campo: {
    minHeight: 48,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: cores.cartao,
    color: cores.texto,
    fontSize: 16,
  },
  multilinha: {
    minHeight: 96,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
});
