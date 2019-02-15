import React from 'react';
import { render } from 'react-dom';
import { WordsList } from './components/WordsList'

const miwokNumbersList = ["lutti", "ottiko", "tolookosu", "oyyisa", "massokka", "temmokka", "kenekaku", "kawintan", "wo'e", "na'aacha"];
const englishNumbersList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

class App extends React.Component {
    render() {
        return (
            <div>
              <WordsList miwokWordsList={ miwokNumbersList } englishWordsList={ englishNumbersList } wordType="number"/>
            </div>
        );
    }
}

render( <App/>, window.document.getElementById( "app" ) );
