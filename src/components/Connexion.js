import React, { Component } from 'react';

class Connexion extends Component {
  state = {
    pseudo: ''
  }

  render() {
    return (
      <div className='connexionBox'>
        <form className="connexion">
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