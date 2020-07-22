import React, { Component } from 'react';
import { connect } from 'react-redux';

class InfoGame extends Component {
    render() {
        return (
            <React.Fragment>
                Stock: {this.props.games.pokemon}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: {
            pokemon: state.games.pokemon
        }
    }
};

export default connect(mapStateToProps)(InfoGame);