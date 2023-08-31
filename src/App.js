import { useState, useEffect } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { GlobalStyle } from './styles/GlobalStyle';
import { Container } from './styles/AppStyles';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Container>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </Container>
    </>
  );
}

export default App;
