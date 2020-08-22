# My Pokédex Web App

For this React project I wanted to create a reactive interface that utilized React in many different ways. I also wanted to incorporate an API. Once I discovered the [PokéAPI](https://pokeapi.co/), I knew building a Pokédex Web App would be a great way to do all that and combine it with one of my favorite video games, Pokémon.

I created a component to display all of the Pokémon using a flexbox layout. A child component that would be an info card for a Pokémon was also created. The child component would be rendered for each Pokémon, displaying their name, Pokédex number, picture, weight, and height.

![Pokémon info cards](/public/images/pokemon_display.PNG)

I wanted to do more than just display the Pokémon's data, I also wanted to create a filter feature based off the features of the Pokémon. So, I created a component that would house the different buttons to active the different filter methods. These buttons would change the state and make the interface display a child component that would contain the tools the user would need to define the filter.

![Pokémon filter tools](/public/images/pokemon_search.PNG)

Once the filter has been defined the component that contains all of the Pokémon information is refreshed and shows the Pokémon that fit the filter. Once a new filter is selected the old one is no longer used. There is also a button to remove the applied filter.
