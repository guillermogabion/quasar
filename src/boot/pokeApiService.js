// Import Axios
import axios from 'axios'

// Base URL of the PokéAPI
const BASE_URL = 'https://pokeapi.co/api/v2'

const axiosInstance = axios.create({
  baseURL: BASE_URL
})

const pokeApiService = {
  async getPokemonList (offset = 0, limit = 20) {
    try {
      const response = await axiosInstance.get(`/pokemon?offset=${offset}&limit=${limit}`)
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon list:', error)
      throw error
    }
  },

  async getPokemonDetails (pokemonIdOrName) {
    try {
      const response = await axiosInstance.get(`/pokemon/${pokemonIdOrName}`)
      return response.data
    } catch (error) {
      console.error('Error fetching Pokémon details:', error)
      throw error
    }
  }
}

export default pokeApiService
