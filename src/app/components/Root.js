import React from 'react';
import { Header } from './Header';

export const Root = ( props ) => {
    return(
        <div>
          <Header/>
          { props.children }
        </div>
    );
}
