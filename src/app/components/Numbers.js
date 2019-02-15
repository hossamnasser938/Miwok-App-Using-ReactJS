import React from 'react';
import { WordsList } from './WordsList';

const miwokNumbersList = ["lutti", "ottiko", "tolookosu", "oyyisa", "massokka", "temmokka", "kenekaku", "kawintan", "wo'e", "na'aacha"];
const englishNumbersList = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

export const Numbers = ( props ) => {
    return(
        <WordsList miwokWordsList={ miwokNumbersList } englishWordsList={ englishNumbersList } wordType="number"/>
    );
}
