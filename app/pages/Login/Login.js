import React from "react";
import { connect } from "react-redux";

import { increaseCount } from "../../store/data/actions";

class Login extends React.PureComponent {
    
    render( ) {
        const { count, increaseCount } = this.props;

        return (
            <section>
                <div className="data gotham-light">
                    <h2>F1 2018 Season Calendar</h2>
                    <h4>{ count }</h4>
                    <button onClick={ increaseCount }>Click</button>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ( state ) => ( {
  count: state.data.count,
} );

const mapDispatchToProps = {
  increaseCount,
};

export default connect( mapStateToProps, mapDispatchToProps )( Login );
