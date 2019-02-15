import React from 'react';
import { WordsList } from './WordsList';

const miwokFamilyMembersList = ["әpә", "әṭa", "angsi", "tune", "taachi", "chalitti", "teṭe", "kolliti", "ama", "paapa"];
const englishFamilyMembersList = ["father", "mother", "son", "daughter", "older brother", "younger brother", "older sister", "younger sister", "grandmother", "grandfather"];

export const Family_Members = ( props ) => {
    const englishFamilyMembersListWithoutSpaces = englishFamilyMembersList.map( ( item ) => item.replace( " ", "_" ) )

    return(
        <WordsList miwokWordsList={ miwokFamilyMembersList } englishWordsList={ englishFamilyMembersListWithoutSpaces } wordType="family"/>
    );
}
