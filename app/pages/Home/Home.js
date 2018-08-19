import React from "react";
import { connect } from "react-redux";
import { fetchData } from "../../store/data/actions";

import Header from "../../components/Header/Header";

class Home extends React.Component {
    componentDidMount( ) {
        if ( this.props.circuits.length <= 0 ) {
            this.props.fetchData( );
        }
    }

    render( ) {
        const { circuits } = this.props;

        return (
            <section>
                <Header />
                <div className="data">
                    <h2>F1 2018 Season Calendar</h2>
                    { circuits.map( ( { circuitId, circuitName, Location } ) => (
                        <li key={ circuitId } >{ circuitName } - { Location.locality }, { Location.country }</li>
                    ) ) }
                </div>
            </section>
        );
    }
}

Home.serverFetch = fetchData;

const mapStateToProps = ( state ) => ( {
    circuits: state.data.circuits,
} );

const mapDispatchToProps = {
    fetchData,
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );
