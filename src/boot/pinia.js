/* eslint-disable */
import { createPinia } from 'pinia';

const pinia = createPinia();

export const usePokemonStore = pinia.defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    currentPage: 1,
    perPage: 5,
    selectedPokemon: null,
  }),
  actions: {
    setPokemons(pokemons) {
      this.pokemons = pokemons;
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    setPerPage(perPage) {
      this.perPage = perPage;
    },
    setSelectedPokemon(pokemon) {
      this.selectedPokemon = pokemon;
    },
  },
});

export default pinia;