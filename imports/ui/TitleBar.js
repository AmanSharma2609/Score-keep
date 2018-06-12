import React from 'react';
import PropTypes from 'prop-types';
export default class TitleBar extends React.Component {
  renderSubttitle (){
    if (this.props.subtittle){
    return   <h2 className= "title-bar__subtittle">{this.props.subtittle}</h2>;
    }
  }
  render(){
    return (
      <div className = "title-bar">
        <div className="wrapper">
          <h1> {this.props.tittle}</h1>
          {this.renderSubttitle()}
        </div>
      </div>
    );
  }
}
TitleBar.propTypes = {
  tittle:PropTypes.string.isRequired,
  subtittle:PropTypes.string
};

//TitleBar.defaultProps = {
//  tittle : 'Default tittle'
//}
