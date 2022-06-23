import React, { useEffect, useState } from 'react';

const greetings: string[] = ['Hello ', 'Wassup ', 'Good Morning ', 'Hi', 'How\'s it going ', 'Hell-o '];
var randomEmoji = require('random-unicode-emoji');

type Greeting = {
  placeholder: string,
  day: string
}

function getRandomGreeting() {
  return greetings[getRndInteger(0, greetings.length - 1)];
}
function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function searchFunc(query: string) {
  return "https://google.com/search?q=" + query;
}

export default function SearchBar() {
  const [search, setsearch] = useState('')
  const [greeting, setgreeting] = useState('')

  useEffect(() => {
    setgreeting(`${getRandomGreeting()} ${randomEmoji.random({ count: 1 })}`);
  }, []);
  return(<></>);
}