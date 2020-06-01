import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="U7n5Ydmfp8FCasg4FF/giphy.gif?cid=ecf05e47dfe9ae202ef400719e99087bb34c37c7c775bbc7&rid=giphy"/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
      );
  }
}

export default App;
