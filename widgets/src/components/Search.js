import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);
        }, 1000);
        return ()=>{
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(()=>{
        const search = async () => {
            const { data } =  await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        }
        search();
    }, [debouncedTerm]);

    //2nd goes array [] empty or with parameters
    /*
    [] - Run initial render
    no array - run initial render-> run after re-render
    [data] - run at initial render->  Run after every render if data has changed
     */

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >
                        Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {<span dangerouslySetInnerHTML={{__html: result.snippet}}></span>}
                    {/*result.snippet*/}
                </div>
            </div>
        )
    })

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label htmlFor="searchField">Enter Search term</label>
                    <input
                        id="searchField"
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;