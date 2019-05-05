import React from 'react';
import SearchBar from './SearchBar';

export default class App extends React.Component {
    state = {
        videos: []
    }
    
    onSubmit = (event) => {
        


    }
    
    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSubmit}/>
            </div>
        )
    }
}