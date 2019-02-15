import React from 'react';
import { Word } from './Word'

export const WordsList = ( props ) => {
    let miwokWordsList = props.miwokWordsList;
    let englishWordsList = props.englishWordsList;
    let wordType = props.wordType;

    const words = [];
    for ( let i = 0; i < miwokWordsList.length; i++ ) {
        words.push( {
            miwokWord: miwokWordsList[i],
            englishWord: englishWordsList[i]
        } );
    }

    return(
        <div>
          <h2>{ wordType }s</h2>
          <ul className="words-list">
            { words.map( ( item, index ) => <li key={ index }><Word miwokWord={ item.miwokWord } englishWord={ item.englishWord } wordType={ wordType }/><hr/></li> ) }
          </ul>
        </div>
    );
}
