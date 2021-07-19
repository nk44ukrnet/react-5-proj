import React, {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Rout from "./components/Rout";
import Header from "./components/Header";

const items = [
    {
        title: 'What is INVENTOR?',
        content: 'INVENTORS IS A STEM-SCHOOL.',
    },
    {
        title: 'In what Countries INVENTOR can be found?',
        content: 'It can be found in Canada, USA, Moldova, Ukraine.',
    },
    {
        title: 'Does it has online lessons?',
        content: 'Yes, INVENTOR has online lesson in USA and Ukraine.',
    },
];
const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Rout path="/">
                <Accordion items={items} />
            </Rout>
            <Rout path="/list">
                <Search />
            </Rout>
            <Rout path="/dropdown">
                <Dropdown
                    selected={selected}
                    options={options}
                    onSelectedChange={setSelected}
                />
            </Rout>
            <Rout path="/translate">
                <Translate />
            </Rout>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            {/*<Dropdown
                selected={selected}
                options={options}
                onSelectedChange={setSelected}
            />*/}
            {/*<Translate />*/}
        </div>
    );
}

export default App;