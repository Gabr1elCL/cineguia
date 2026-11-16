import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Botao from '../components/Botao';
import CampoTexto from '../components/CampoTexto';
import cores from '../theme/cores';

const formularioInicial = {
  titulo: '',
  ano: '',
  genero: '',
  diretor: '',
  descricao: '',
};

export default function AdicionarFilme({ navigation, aoAdicionar }) {
  const [formulario, setFormulario] = useState(formularioInicial);
  const [erro, setErro] = useState('');

  const atualizarCampo = (campo, valor) => {
    setFormulario((atual) => ({ ...atual, [campo]: valor }));
  };

  const salvar = () => {
    const { titulo, ano, genero, diretor, descricao } = formulario;
    const anoNumero = Number(ano);

    if (!titulo.trim() || !genero.trim() || !diretor.trim()) {
      setErro('Preencha título, gênero e diretor.');
      return;
    }

    if (!Number.isInteger(anoNumero) || anoNumero < 1888 || anoNumero > 2100) {
      setErro('Informe um ano válido, por exemplo 2010.');
      return;
    }

    aoAdicionar({
      titulo: titulo.trim(),
      ano: anoNumero,
      genero: genero.trim(),
      diretor: diretor.trim(),
      descricao: descricao.trim() || 'Sem descrição.',
    });
    navigation.goBack();
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
      keyboardShouldPersistTaps="handled"
    >
      <CampoTexto
        rotulo="Título"
        valor={formulario.titulo}
        aoMudar={(texto) => atualizarCampo('titulo', texto)}
        placeholder="Ex.: Interestelar"
      />
      <CampoTexto
        rotulo="Ano"
        valor={formulario.ano}
        aoMudar={(texto) => atualizarCampo('ano', texto)}
        placeholder="Ex.: 2014"
        teclado="numeric"
      />
      <CampoTexto
        rotulo="Gênero"
        valor={formulario.genero}
        aoMudar={(texto) => atualizarCampo('genero', texto)}
        placeholder="Ex.: Ficção científica"
      />
      <CampoTexto
        rotulo="Diretor"
        valor={formulario.diretor}
        aoMudar={(texto) => atualizarCampo('diretor', texto)}
        placeholder="Ex.: Christopher Nolan"
      />
      <CampoTexto
        rotulo="Descrição"
        valor={formulario.descricao}
        aoMudar={(texto) => atualizarCampo('descricao', texto)}
        placeholder="Sobre o que é o filme?"
        multilinha
      />

      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <View style={styles.botoes}>
        <Botao titulo="Salvar filme" aoPressionar={salvar} />
        <View style={styles.espaco} />
        <Botao titulo="Cancelar" tipo="secundario" aoPressionar={() => navigation.goBack()} />
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
  erro: {
    color: cores.perigo,
    fontSize: 14,
    marginBottom: 14,
  },
  botoes: {
    marginTop: 6,
    marginBottom: 30,
  },
  espaco: {
    height: 10,
  },
});
