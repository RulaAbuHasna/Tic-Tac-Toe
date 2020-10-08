import React from 'react';
import './board.style.css';
import Swal from 'sweetalert2';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      cell9: '',
      score1: 0,
      score2: 0,
      player1: 'put your name here',
      player2: 'put your name here',
      style: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.reset = this.reset.bind(this);
    this.playAgain = this.playAgain.bind(this);

    this.player1Won = () => {
      this.setState({ style: 'none' });
      Swal.fire({
        title: `Congrats!`,
        text: this.state.player1 + ` won this round`,
        icon: `sucess`,
        confirmButtonText: `back to the game`,
      });
    };
    this.player2Won = () => {
      this.setState({ style: 'none' });
      Swal.fire({
        title: `Congrats!`,
        text: this.state.player2 + ` won this round`,
        icon: `sucess`,
        confirmButtonText: `back to the game`,
      });
    };
  }
  //handle chnaging the name of the playes
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  //check if the board is filled to deteremine the results
  componentDidUpdate = (previousProps, previousState) => {
    var cell1 = this.state.cell1;
    var cell2 = this.state.cell2;
    var cell3 = this.state.cell3;
    var cell4 = this.state.cell4;
    var cell5 = this.state.cell5;
    var cell6 = this.state.cell6;
    var cell7 = this.state.cell7;
    var cell8 = this.state.cell8;
    var cell9 = this.state.cell9;
    //check the rows
    //but first, a condition to prevent infinite loop :D
    if (
      previousState.score1 === this.state.score1 &&
      previousState.score2 === this.state.score2
    ) {
      //check the results
      //first row
      if (cell1 === cell2 && cell1 === cell3) {
        if (cell1 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell1 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
        // this.playAgain();
      }
      //second row
      if (cell4 === cell5 && cell4 === cell6) {
        if (cell4 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell4 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }

      //third row
      if (cell7 === cell8 && cell7 === cell9) {
        if (cell7 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell7 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }

      //first column
      if (cell1 === cell4 && cell1 === cell7) {
        if (cell1 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell1 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }

      //second col
      if (cell2 === cell5 && cell2 === cell8) {
        if (cell2 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell2 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }
      //third col
      if (cell3 === cell6 && cell3 === cell9) {
        if (cell3 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell3 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }
      //first diagonal
      if (cell1 === cell5 && cell1 === cell9) {
        if (cell1 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell1 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }
      //second diagonal
      if (cell3 === cell5 && cell3 === cell7) {
        if (cell3 === 'X') {
          this.setState({ score1: previousState.score1 + 1 });
          this.player1Won();
        } else if (cell3 === 'O') {
          this.setState({ score2: previousState.score2 + 1 });
          this.player2Won();
        }
      }
    }
  };
  //changing the player from x to y and vice versa
  //chnaging the state of every cell in the board
  submitClick = (e) => {
    if (!e.target.textContent) {
      if (this.state.player === 'X') {
        this.setState({ player: 'O' });
      } else if (this.state.player === 'O') {
        this.setState({ player: 'X' });
      }
      this.setState({ [e.target.id]: this.state.player });
      console.log(e.target.id);
    }
  };
  // the play again btn
  playAgain = () => {
    this.setState({ style: '' });
    this.setState({ player: 'X' });
    this.setState({
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      cell9: '',
    });
  };
  //the reset btn for the game
  reset = () => {
    this.setState({ style: '' });
    this.setState({ player: 'X' });
    this.setState({
      cell1: '',
      cell2: '',
      cell3: '',
      cell4: '',
      cell5: '',
      cell6: '',
      cell7: '',
      cell8: '',
      cell9: '',
      score1: 0,
      score2: 0,
    });
  };

  render() {
    return (
      <div>
        <div>
          <table id='results'>
            <tr>
              <td className='right bottom'>
                <input
                  type='text'
                  name='player1'
                  value={this.state.player1}
                  onChange={this.handleChange}
                />
              </td>
              <td className='bottom'>
                <input
                  type='text'
                  name='player2'
                  value={this.state.player2}
                  onChange={this.handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className='right'>{this.state.score1}</td>
              <td>{this.state.score2}</td>
            </tr>
          </table>
        </div>
        <div>
          <table id='board' style={{ pointerEvents: this.state.style }}>
            <tr>
              <td className='right' id='cell1' onClick={this.submitClick}>
                {this.state.cell1}
              </td>
              <td className='right' id='cell2' onClick={this.submitClick}>
                {this.state.cell2}
              </td>
              <td id='cell3' onClick={this.submitClick}>
                {this.state.cell3}
              </td>
            </tr>
            <tr>
              <td className='top right' id='cell4' onClick={this.submitClick}>
                {this.state.cell4}
              </td>
              <td className='top right' id='cell5' onClick={this.submitClick}>
                {this.state.cell5}
              </td>
              <td className='top' id='cell6' onClick={this.submitClick}>
                {this.state.cell6}
              </td>
            </tr>
            <tr>
              <td className='top right' id='cell7' onClick={this.submitClick}>
                {this.state.cell7}
              </td>
              <td className='top right' id='cell8' onClick={this.submitClick}>
                {this.state.cell8}
              </td>
              <td className='top' id='cell9' onClick={this.submitClick}>
                {this.state.cell9}
              </td>
            </tr>
          </table>
        </div>
        <div>
          <button id='btn1' onClick={this.playAgain}>
            Play Again
          </button>
          <button id='btn2' onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
