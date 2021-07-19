import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [deboucedText, setDebouncedText] = useState(text);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedText(text);
        }, 500);
        return ()=>{
            clearTimeout(timerId);
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: deboucedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                });
            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation();
    }, [deboucedText, language]);
    return (
        <div>
            <h1 className="ui header">
                <span dangerouslySetInnerHTML={{__html: translated}}></span>
            </h1>
        </div>
    );
}

export default Convert;