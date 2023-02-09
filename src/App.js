import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [sended, setSended] = useState(false);
  const [blur, setBlur] = useState(false);

  const handleSetText = (e) => {
    setText(e.target.value);
    setSended(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText('');
    setSended(true);
    setBlur(false);
  }

  const handleBlur = () => {
    setBlur(true);
    setSended(false);
  }

  return (
    <div className="App">
      <form className='form' onSubmit={handleSubmit}>
        <input className={`${!text ? 'is-error' : ''}`} 
               type="text"
               value={text} 
               onBlur={handleBlur} 
               onChange={handleSetText}/>
        <button disabled={!text}>Отправить</button>
      </form>
      {sended && <output style={{color: '#ff7f50'}}>Сообщение успешно отправлено</output>}
      {!text && blur && <output style={{color: 'red'}}>Поле ввода не должно быть пустым</output>}
    </div>
  );
}

export default App;
