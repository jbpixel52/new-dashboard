import React, { useEffect, useState } from 'react';
import { TextInput, Box, Grommet } from 'grommet';

const greetings: string[] = ['Hello', 'Wassup', 'Good Morning', 'Hi', 'How\'s it going', 'Hell-o'];

type Greeting = {
    placeholder: string,
    day: string
}


function getRandomGreeting() {
    return greetings[getRndInteger(0, greetings.length - 1)];
}

function getDay() {
    let date: Date = new Date();
    let day: Number = date.getDay()
    console.log(date);
    return date
}
function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function searchFunc(query: string) {
    return "https://google.com/search?q=" + query;
}
export default function SearchBar() {
    const [search, setsearch] = useState('')
    const [greeting, setgreeting] = useState(getRandomGreeting)

    console.log('LOGGING var greeting   ' + greeting);
    const element = (
        <Box
            direction="row"
            border={{ color: 'brand', size: 'large' }}
            pad="medium"
        >     <TextInput
                onKeyPress={(e) => {
                    if (e.key === "Enter" && search.length > 0) {
                        console.log("pressed ENTER");
                        window.location.href = searchFunc(search);

                    }
                }}
                type="text"
                placeholder={greeting}
                onChange={(e) => {
                    setsearch(e.target.value);
                    setgreeting(greeting);
                }}
                className="searchbar"
                value={search}
            />
            < Box pad="small" background="dark-3" />
            <Box pad="medium" background="light-3" />
        </Box>
    );
    return element;
}