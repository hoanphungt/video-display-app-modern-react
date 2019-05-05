import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    state = { input: '' }

    onChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.input);
    }
    
    render() {
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={this.onSubmit} className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input type='text' value={this.state.input} onChange={this.onChange} />
                    </div>
                </form>
            </div>
        )
    }
}