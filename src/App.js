import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleChande = ({ target }) => {
    const { type, name } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState(({
      [name]: value,
    }), this.validation);
  };

  isSaveBtnDe = (boleano) => {
    this.setState({
      isSaveButtonDisabled: boleano,
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
    const vlMin = 210;

    if (cardName
      && cardDescription
      && cardImage
      && cardRare
      && this.comparandoValor(cardAttr1)
      && this.comparandoValor(cardAttr2)
      && this.comparandoValor(cardAttr3)
      && valorTotal <= vlMin
    ) {
      this.isSaveBtnDe(false);
    } else {
      this.isSaveBtnDe(true);
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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
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
          // hasTrunfo,
          isSaveButtonDisabled={ isSaveButtonDisabled }
          // onSaveButtonClick={ onSaveButtonClick }
        />
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
      </>
    );
  }
}

export default App;
