
# Pokédex Project

Welcome to the **Pokédex Project**! This project is a web application built with React and styled with Fanta CSS. The project provides information about Pokémon by utilizing data from the [PokeAPI](https://pokeapi.co/). It's designed to showcase fundamental and advanced React concepts, including state management, component structures, hooks, and API integration.

---

## Features

- **Pokémon Listing**: Displays the first 151 Pokémon with their names and Pokédex numbers.
- **Search Functionality**: Allows users to search for Pokémon by name or number.
- **Dynamic Navigation**: Interactive side navigation to select and view specific Pokémon details.
- **API Integration**: Fetches Pokémon data dynamically using the PokeAPI.
- **Responsive UI**: Built with a mobile-first approach to ensure compatibility across devices.

---

## Key React Concepts

- **Components**: Modular structure with reusable components such as `SideNav`, `PokemonCard`, and `SearchInput`.
- **State Management**: Utilizes `useState` for managing search queries and selected Pokémon.
- **Hooks**: Implements React hooks like `useEffect` for API calls and real-time updates.
- **Conditional Rendering**: Dynamically renders filtered Pokémon based on user input.
- **Props**: Efficiently passes data between components.

---

## How It Works

1. **Data Initialization**: Fetches Pokémon data from PokeAPI and preloads the first 151 Pokémon into the state.
2. **Search & Filter**: Users can type into the search bar to filter Pokémon by name or number. Matching Pokémon are displayed without altering their original Pokédex numbers.
3. **Interaction**: Users can click on a Pokémon to view additional details dynamically fetched from the API.

---

---

## Future Enhancements

- **Expanded Search**: Add advanced search filters like type, abilities, and evolution stages.
- **Pagination**: Implement pagination for smoother navigation of larger datasets.
- **Styling Improvements**: Enhance the UI with CSS frameworks or custom animations.

---

## Acknowledgments

- **React**: For its robust library enabling efficient development.
- **PokeAPI**: For providing a rich dataset of Pokémon information.
- **Open Source Community**: For inspiration and resources.

---

Feel free to fork the project, contribute, or suggest features! ✨
