import React, { Component } from 'react';
import RecipeInput from './RecipeInput';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';


class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Spaghetti",
          img: "spaghetti.jpg",
          ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
          instructions: "Open jar of Spaghetti sauce. Bring to simmer. Boil water. Cook pasta until done. Combine pasta and sauce."
        },
        {
          id: 1,
          title: "Milk Shake",
          img: "milkshake.jpg",
          ingredients: ["milk", "strawberry", "cherry"],
          instructions: "Pour milk on glass. Put ice. Shake and put cherry. Then put in fridge for good measure."
        },
        {
          id: 2,
          title: "Crispy Pata",
          img: "avocado.jpg",
          ingredients: ["pork", "garlic", "chilli"],
          instructions: "Deep fry pork, pour garlic over and shower with chilli and onions"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]

      }
    })
  }
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({ recipes });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({ showForm: true })} />
        {showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({ showForm: false })}
          /> : null}
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}


export default RecipeApp;
