import Search from 'antd/lib/input/Search';
import React, {useState, useEffect} from 'react';

export default function Index() {
  const [word,setWord] = useState('');
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => console.log(data));
  },[word])
  return <div>
      <p>{word}</p>
      <Search placeholder="input search text" onSearch={value => setWord(value)} enterButton />
  </div>;
}
