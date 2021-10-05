import DrinkMenu from './DrinkMenu.js';
import SearchBar from './SearchBar.js'; // may need to change where to import this component

function CoffeeShopPage() {
  return (
    <div>
      <h1>CoffeeShopPage component</h1>
      <SearchBar />
      <DrinkMenu />
    </div>
  );
}

export default CoffeeShopPage;