// eslint-disable-next-line
<template>
    <div class="pokemon-details">
      <img :src="pokemonImage" alt="Pokemon Image" class="pokemon-image" />
      <div class="details">
        <h2 class="pokemon-name">{{ pokemon.name }}</h2>
        <div class="abilities">
          <h3>Abilities:</h3>
          <ul>
            <li v-for="ability in pokemon.abilities" :key="ability.name">{{ ability.name }}</li>
          </ul>
        </div>
        <div class="weight">
          <h3>Weight:</h3>
          <p>{{ pokemon.weight }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import pokeApiService from '@/services/pokeApiService';
  
  export default {
    name: 'PokemonDetails',
    props: {
      pokemonId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        pokemon: null,
      };
    },
    computed: {
      pokemonImage() {
        return this.pokemon ? `https://pokeres.bastionbot.org/images/pokemon/${this.pokemonId}.png` : '';
      },
    },
    async created() {
      // Fetch Pokémon details
      await this.fetchPokemonDetails();
    },
    methods: {
      async fetchPokemonDetails() {
        try {
          const response = await pokeApiService.getPokemonDetails(this.pokemonId);
          this.pokemon = response;
        } catch (error) {
          console.error('Error fetching Pokémon details:', error);
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .pokemon-details {
    display: flex;
    align-items: center;
  
    .pokemon-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 20px;
    }
  
    .details {
      h2 {
        margin-bottom: 10px;
      }
  
      .abilities {
        h3 {
          margin-bottom: 5px;
        }
  
        ul {
          list-style-type: none;
          padding: 0;
        }
      }
  
      .weight {
        h3 {
          margin-bottom: 5px;
        }
      }
    }
  }
  </style>
  