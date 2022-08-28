import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';
import Filter from './components/Filter';

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
    filterI: '',
    filterR: 'todas',
    trunfo: false,
  };

  handleChange = ({ target }) => {
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

  handleClickDelete = ({ target }) => {
    this.setState({
      hasTrunfo: false,
    });
    target.parentNode.remove();
  };

  trunfo = () => {
    const { cardTrunfo, hasTrunfo } = this.state;
    return !!(cardTrunfo || hasTrunfo);
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

  filterList = (filterI, Rare, trunfo) => {
    const { cardSave, filterR } = this.state;

    if (trunfo) {
      return cardSave.filter((e) => e.cardTrunfo);
    }
    if (filterI) {
      return cardSave.filter((f) => f.cardName.includes(filterI));
    }
    if (Rare === 'todas') {
      return cardSave;
    }
    return cardSave.filter((f) => f.cardRare === filterR);
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
      filterI,
      filterR,
      trunfo,
    } = this.state;
    return (
      <main className="main">
        <div className="container">
          <div className="container-form">
            <h1>Adicionar nova carta</h1>
            <Form
              onInputChange={ this.handleChange }
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
          <div className="container-preview">
            <h1>Pré-visualização</h1>
            <Card
              onInputChange={ this.handleChange }
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
          <Filter
            filterI={ filterI }
            onInputChange={ this.handleChange }
            filterR={ filterR }
            trunfo={ trunfo }
          />
        </div>
        <div>
          <ul>
            { this.filterList(filterI, filterR, trunfo).map((e) => (
              <li key={ e.cardName }>
                <Card
                  onInputChange={ this.handleChange }
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardImage={ e.cardImage }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
                <button
                  type="button"
                  data-testid="delete-button"
                  onClick={ this.handleClickDelete }
                >
                  Excluir

                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}

export default App;
