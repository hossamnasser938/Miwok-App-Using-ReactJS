import React from 'react';

const wordImageSize = "352px";

export const Word = ( props ) => {
    let miwokWord = props.miwokWord;
    let englishWord = props.englishWord;
    let wordType = props.wordType;

    const wordImage = require( `../resources/${wordType}_${englishWord}.png` );

    return (
        <div>
          <div className="wordsBlock">
            <p>{ miwokWord }</p>
            <p>{ englishWord }</p>
          </div>
          <img src={ wordImage } width={ wordImageSize } height={ wordImageSize }/>
        </div>
    );
}
