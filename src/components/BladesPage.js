import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBlades } from '../actions/blades';

class BladesPage extends Component {
    render() {
        return (
            <div>
                <h1>Blades Go Here!</h1>
            </div>
        )
    }
}

export default BladesPage;