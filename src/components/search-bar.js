import React from 'react';

class SearchBar extends React.Component {

    state= {
        term: '',
    };

    // to use 'this', we have to bind the method(onFormSubmit) to the class(SearchBar) in the constructor object.
    //there is another method by changing the onformsubmit method as arrow function.

    onFormSubmit= (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
        <div className= 'ui segment'>
            <form onSubmit= {this.onFormSubmit} className= 'ui form'>
                <div className='field'>
                    <label>Image Search</label>
                    <input 
                        type='text' 
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })} 
                    />
                </div>
            </form>
        </div>
        )
    };
};

export default SearchBar;

//Three ways to 