import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import filmesIniciais from './data/filmes';
import AdicionarFilme from './screens/AdicionarFilme';
import Detalhes from './screens/Detalhes';
import Favoritos from './screens/Favoritos';
import Home from './screens/Home';
import cores from './theme/cores';

const Stack = createNativeStackNavigator();

export default function App() {
  const [filmes, setFilmes] = useState(filmesIniciais);
  const [favoritos, setFavoritos] = useState([]);

  const alternarFavorito = (id) => {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]
    );
  };

  const adicionarFilme = (dados) => {
    const novoFilme = { id: Date.now(), emoji: '🎬', cor: cores.posterPadrao, ...dados };
    setFilmes((atuais) => [novoFilme, ...atuais]);
  };

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: cores.fundo },
          headerTintColor: cores.texto,
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: { backgroundColor: cores.fundo },
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'CineGuia' }}>
          {(props) => (
            <Home
              {...props}
              filmes={filmes}
              favoritos={favoritos}
              aoFavoritar={alternarFavorito}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detalhes"
          options={({ route }) => ({
            title: filmes.find((filme) => filme.id === route.params.id)?.titulo ?? 'Detalhes',
          })}
        >
          {(props) => (
            <Detalhes
              {...props}
              filmes={filmes}
              favoritos={favoritos}
              aoFavoritar={alternarFavorito}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Favoritos" options={{ title: 'Meus favoritos' }}>
          {(props) => (
            <Favoritos
              {...props}
              filmes={filmes}
              favoritos={favoritos}
              aoFavoritar={alternarFavorito}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AdicionarFilme" options={{ title: 'Adicionar filme' }}>
          {(props) => <AdicionarFilme {...props} aoAdicionar={adicionarFilme} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
