import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import data from '../../applinks.json'
import App from '../../pages/_app';



const greetings: string[] = ['Hello', 'Wassup', 'Good Morning', 'Hi', 'How\'s it going', 'Hell-o'];
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
// export default function SearchBar() {
//     const [search, setsearch] = useState('')
//     const [greeting, setgreeting] = useState(getRandomGreeting)

//     console.log('LOGGING var greeting   ' + greeting);
//     const element = (
//         <Box
//             direction="row" pad={"medium"}
//         >     <TextInput
//                 onKeyPress={(e) => {
//                     if (e.key === "Enter" && search.length > 0) {
//                         console.log("pressed ENTER");
//                         window.location.href = searchFunc(search);

//                     }
//                 }}
//                 type="text"
//                 placeholder={greeting}
//                 onChange={(e) => {
//                     setsearch(e.target.value);
//                     setgreeting(greeting);
//                 }}
//                 className="searchbar"
//                 value={search}
//             />

//         </Box>
//     );
//     return element;
// }

type App = {
  appname: string,
  apptype: string,
  appurl: string,
  appdescription: string,
}
// const Apps : [] = new Array();
// const boxes: [] = data.apps.map((item: App, i) =>

// );

export default function SearchBar() {
  const [search, setsearch] = useState('')
  const [greeting, setgreeting] = useState(getRandomGreeting)
  return (
    <Autocomplete
      freeSolo
      id="searchBarr"
      sx={{ width: 300 }}
      options={data.apps.map((app: App) => app.appname)}
      
      renderInput={(params) => <TextField {...params} label="App"
        onKeyPress={(e) => {
          if (e.key === "Enter" && search.length > 0) {
            console.log("pressed ENTER");
            window.location.href = searchFunc(search);

          }
        }}
      />}
    />
  );
}