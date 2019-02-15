import React from 'react';

const wordImageSize = "352px";

export const Word = ( props ) => {
    let miwokWord = props.miwokWord;
    let englishWord = props.englishWord;
    let wordType = props.wordType;

    let hasImage = ( wordType === "phrase" )? false : true;

    if ( hasImage ) {
        var wordImage = require( `../resources/${wordType}_${englishWord}.png` );
    }

    return (
        <div className="word-container">
          <div>
            <p>{ miwokWord }</p>
            <p>{ englishWord }</p>
          </div>
          { hasImage? <img src={ wordImage } width={ wordImageSize } height={ wordImageSize }/> : "" }
        </div>
    );
}
