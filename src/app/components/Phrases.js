import React from 'react';
import { WordsList } from './WordsList';

const miwokPhrasesList = ["lutti", "ottiko", "tolookosu", "oyyisa", "massokka", "temmokka", "kenekaku", "kawintan", "wo'e", "na'aacha"];
const englishPhrasesList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

export const Phrases = ( props ) => {
    return(
        <WordsList miwokWordsList={ miwokPhrasesList } englishWordsList={ englishPhrasesList } wordType="phrase"/>
    );
}
