import React from 'react';
import AddItemForm from '../src/AddItemForm';
import ShoppingList from '../src/ShoppingList';

class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem(item) {
    console.log('handle delete item called', { item })
  }
  handleCheckItem(item) {
    console.log('handle check item called', { item })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList 
              items={this.state.shoppingItems} 
              // add the two callback props here
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}



export default App;
