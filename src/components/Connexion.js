import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

  handleChange = event => {
    const pseudo = event.target.value
    this.setState({ pseudo })
  }

  handleSubmit = event => {
    // annule levenement par defaut
    event.preventDefault()
    this.setState({ goToChat: true })
  }

  render() {
    if(this.state.goToChat) {
      return <Redirect to={`/pseudo/${this.state.pseudo}`}></Redirect>
    }


    return (
      <div className='connexionBox'>
        <form className="connexion" onSubmit={this.handleSubmit}>
        <div className="wrapper">
          <p>Coding is</p>
          <div className="words">
            <span>fantastic</span>
            <span>interesting</span>
            <span>awesome</span>
            <span>incredible</span>
            <span>fantastic</span>
          </div>
        </div>
          <input 
            value={this.state.pseudo}
            onChange={this.handleChange}
            placeholder='Pseudo'
            type="text" 
            required
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    );
  }
}

export default Connexion