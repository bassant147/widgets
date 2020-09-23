import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const languages = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
];

export default () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={e => setText(e.target.value)}></input>
        </div>
      </form>
      <br/>
      <Dropdown label='Choose a Language' options={languages} selected={language} onSelectedChange={setLanguage}/>
      <br/>
      <br/>
      <Convert text={text} language={language}/>
    </div>
  );
}

