import React from 'react';
import {Players} from './../api/players';



export default class  AddPlayer extends React.Component {
  handleSubmit(e)
  {let playerName  = e.target.playerName.value;//storing the name as typed in box

  e.preventDefault();//preventing from name getting in url and refresh.

debugger;
if(playerName){
  e.target.playerName.value='';//empty the box of the input
  Players.insert({
     name: playerName,
     score: 0
  });
}

  }
  render (){
    return (
      <div className= "item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)} >
          <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
          <button className="button"> Add Player</button>
        </form>
      </div>
    );
  }
}
