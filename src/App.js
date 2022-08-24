import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    cardSave: [],
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleChande = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }), this.validation);
  };

  handleClick = (objeto) => {
    this.setState((state) => ({
      cardSave: [...state.cardSave, objeto],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: this.trunfo(),
      cardTrunfo: this.trunfoON(),
      isSaveButtonDisabled: true,
    }));
  };

  trunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    if (cardTrunfo || hasTrunfo) {
      return true;
    }
  };

  trunfoON = () => {
    const { hasTrunfo } = this.state;
    if (hasTrunfo) {
      return false;
    }
  };

  setStateDefault = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  comparandoValor = (cardValue) => {
    const max = 90;
    return !!(Number(cardValue) >= 0 && Number(cardValue) <= max);
  };

  validation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const valorTotal = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const valorMin = 210;

    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && this.comparandoValor(cardAttr1)
      && this.comparandoValor(cardAttr2)
      && this.comparandoValor(cardAttr3)
      && valorTotal <= valorMin
    ) {
      this.setStateDefault('isSaveButtonDisabled', false);
    } else {
      this.setStateDefault('isSaveButtonDisabled', true);
    }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardSave,
    } = this.state;
    return (
      <main>
        <div className="conteudo">
          <div className="divForm">
            <Form
              onInputChange={ this.handleChande }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.handleClick }
            />
          </div>

          <div className="divPrev">
            <Card
              onInputChange={ this.handleChande }
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
        <div>
          <ul>
            {cardSave.map((e) => (
              <li key={ e.cardName }>
                <Card
                  onInputChange={ this.handleChande }
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardImage={ e.cardImage }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
              </li>))}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
