import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

import PhoneItem from './model/PhoneItem';
import Phone from './model/Phone';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.phone = new Phone();

    this.state = {
      items: this.phone.items
    };


    this.createItem = this.createItem.bind(this);

    this.deleteItem = this.deleteItem.bind(this);

  }

  createItem(name, content) {
    
    let item = new PhoneItem(name, content);
    let items = this.phone.add(item);

    this.setState({items: items});
    
  }



  deleteItem(item) {
    let items = this.phone.delete(item);
    this.setState({ items: items });
  }



  render() {
    return (<div id="app-container">
      <Body items={this.state.items} onDeleteItem={this.deleteItem}></Body>
      <Footer createItem={this.createItem}></Footer>
    </div>)
  }

}

export default App;
