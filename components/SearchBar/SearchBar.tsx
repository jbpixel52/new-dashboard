import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import data from '../../applinks.json'
import type App from '../Types/App';

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

function getDay() {
  let date: Date = new Date();
  let day: Number = date.getDay()
  console.log(date);
  return date
}

function searchFunc(query: string) {
  return "https://google.com/search?q=" + query;
}
// onKeyPress={(e) => {
//     if (e.key === "Enter" && search.length > 0) {
//         console.log("pressed ENTER");
//         window.location.href = searchFunc(search);

export default function SearchBar() {
  const [search, setsearch] = useState('')
  const [greeting, setgreeting] = useState('')

  useEffect(() => {
    setgreeting(`${getRandomGreeting()} ${randomEmoji.random({ count: 1 })}`);
  }, []);


  return (
    <Autocomplete
      freeSolo
      id="searchBarr"
      sx={{ width: 300 }}
      options={data.apps.map((app) => app.appname)}
      blurOnSelect={true}
      renderInput={(params) => <TextField {...params} label={greeting}
      onChange={(value) => {
        setsearch(value);
      }}

        onKeyPress={(e) => {
          if (e.key === "Enter") {

            console.log("pressed ENTER");
            window.location.href = searchFunc(search);

          }
        }}


      />}
    />
  );
}