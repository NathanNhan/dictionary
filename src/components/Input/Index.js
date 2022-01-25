import Search from 'antd/lib/input/Search';
import React, {useState, useEffect} from 'react';
import { meaningRef, wordRef } from '../../firebase';

export default function Index() {
  const [word,setWord] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const callApi = async () => {
     const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
     const data = await result.json();
     console.log(data[0].meanings[0].definitions[0].definition)
     if(!data) {
       setError("Word not match with result");
     } else {
       wordRef(word);
       meaningRef(data[0].meanings[0].definitions[0].definition)
     }

    }
    callApi();
  },[word])
  return <div>
      <p>{word}</p>
      <Search placeholder="input search text" onSearch={value => setWord(value)} enterButton />
  </div>;
}
