import {useState} from 'react';

const FormInput = ({setTasks}) => {
    const [input,setInput] = useState('');
    const [hour,setHour] = useState(1);
    const [min,setMin] = useState('00');
    const [amOrPm,setAmOrPm] = useState('AM');
  
    const handleAdd = e => {
      e.preventDefault();
      if(!input) return alert('Please Enter Something!')
      const newItem = {input, done : false , id : Date.now(),hour , min,amOrPm}
      setTasks(tasks => [...tasks,newItem])
      setInput('');
      setAmOrPm('AM')
      setHour(1)
      setMin('00')
  
    } 
  
    return (
      <form className="form-submit" onSubmit={handleAdd}>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <div>
          <select value={hour} onChange={e => setHour(e.target.value)}>
            {Array.from({length : 12 }, (_,i) => i + 1).map(i => <option key={i} value={i}>{i}</option>)}
          </select>
          <select value={min}onChange={e => setMin(e.target.value)}>
            {Array.from({length : 12 }, (_,i) => i * 5 ).map(i => i < 10 ? <option key={i} value={`0${i}`}>{`0${i}`}</option> : <option key={i} value={i}>{i}</option>)}
          </select>
          <select value={amOrPm}onChange={e => setAmOrPm(e.target.value)}>
            {Array.from({length : 2 }, (_,i) => i ).map(i => i ===0 ? <option key={i} value={'AM'}>AM</option> : <option key={i} value={`PM`}>PM</option>)}
          </select>
        </div>
        <button>➕</button>
      </form>
    )
  }

  export default FormInput;