import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from  './PlayerList';
import PropTypes from 'prop-types';

export default class App extends React.Component{

  render (){
    return(
      <div>
        <TitleBar tittle = {this.props.tittle} subtittle="Created by Aman Sharma"/>
        <div className = "wrapper">
        <PlayerList players= {this.props.players}/>
        <AddPlayer/>
      </div>
      </div>

    );
  }
};
App.propTypes= {
  tittle: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
}
