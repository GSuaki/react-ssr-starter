import React from "react";
import { connect } from "react-redux";

import { increaseCount } from "../../store";

class Home extends React.Component {
    
    render( ) {
        const { count } = this.props;

        return (
            <div className="data">
                <h2>F1 2018 Season Calendar</h2>
                <h4>{count}</h4>
                <button onClick={ this.props.increaseCount }>Click</button>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => ( {
  count: state.data.count,
} );

const mapDispatchToProps = {
  increaseCount,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
