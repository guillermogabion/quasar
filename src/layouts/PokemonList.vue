// eslint-disable-next-line
/* eslint-disable */
<template>
    <div>
      <q-list bordered>
        <q-item v-for="pokemon in paginatedPokemons" :key="pokemon.id">
          <q-item-section>
            <q-item-label>{{ pokemon.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
  
      <q-pagination
        v-model="currentPage"
        :total-pages="totalPages"
        @input="updatePage"
      />
    </div>
  </template>
  
  <script>
  import pokeApiService from '@/services/pokeApiService';
  
  export default {
    name: 'PokemonList',
    data() {
      return {
        pokemons: [],
        perPage: 5,
        currentPage: 1,
      };
    },
    computed: {
      // Calculate total number of pages
      totalPages() {
        return Math.ceil(this.pokemons.length / this.perPage);
      },
      // Paginate the list of pokemons
      paginatedPokemons() {
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        return this.pokemons.slice(startIndex, endIndex);
      },
    },
    async created() {
      // Fetch the list of Pokémon
      await this.fetchPokemonList();
    },
    methods: {
      async fetchPokemonList() {
        try {
          const response = await pokeApiService.getPokemonList();
          this.pokemons = response.results;
        } catch (error) {
          console.error('Error fetching Pokémon list:', error);
        }
      },
      // Update current page when pagination control changes
      updatePage(page) {
        this.currentPage = page;
      },
    },
  };
  </script>
  