import React from 'react';
import { WordsList } from './WordsList';

const miwokColorsList = ["weṭeṭṭi", "chokokki", "ṭakaakki", "ṭopoppi", "kululli", "kelelli", "ṭopiisә", "chiwiiṭә"];
const englishColorsList = ["red", "green", "brown", "gray", "black", "white", "dusty yellow", "mustard yellow"];

export const Colors = ( props ) => {
    const englishColorsListWithoutSpaces = englishColorsList.map( ( item ) => item.replace( " ", "_" ) );

    return(
        <WordsList miwokWordsList={ miwokColorsList } englishWordsList={ englishColorsListWithoutSpaces } wordType="color"/>
    );
}
