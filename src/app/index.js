import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Root } from './components/Root';
import { Numbers } from './components/Numbers';
import { Colors } from './components/Colors';
import { Phrases } from './components/Phrases';
import { Family_Members } from './components/Family_Members';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <Root>
                <Route exact path="/" component={ Numbers }/>
                <Route path="/numbers" component={ Numbers }/>
                <Route path="/colors" component={ Colors }/>
                <Route path="/phrases" component={ Phrases }/>
                <Route path="/family_members" component={ Family_Members }/>
              </Root>
            </BrowserRouter>

        );
    }
}

render( <App/>, window.document.getElementById( "app" ) );
