import React from 'react';
import SearchBar from './search-bar'
import unSplash from '../api/unSplash';
import ImageList from './imageList';

class App extends React.Component {
    state = {
        images: []
    };
    // this is a call back funvtion which is passed to the SearchBar component.
    //The parent creates a function that takes in parameters and passes a reference to that function as a prop to the child. Then the child calls the function with the arguments passed in and passes the data back to parent
    onSearchSubmit = async (term) => {
        const response = await unSplash.get('/search/photos', {
            params: {
                query: term
            }, 
        });

        this.setState({ images: response.data.results});
    };

    render() {
        return(
            <div className= 'ui container' style={{ marginTop: '10px'}}>
                <SearchBar onSubmit= {this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };

};

export default App;