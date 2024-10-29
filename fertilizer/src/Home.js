import React from 'react';
import './App.css';

function Home() {
  // const [showDropdown, setShowDropdown] = useState(false);

 

  return (
    <div className="background">
      <h1 className="heading1">ಬೆಳೆಯ ವಿವರ</h1>
      <div className="input-container">
      <label className='label'>ಬೆಳೆ</label>
      <select id="crop" name="cars">
        <option></option>
        <option>ಕಬ್ಬು</option>
        <option>ಅಕ್ಕಿ</option>
        <option>ರಾಗಿ</option>
        <option>ಜೋಳ</option>
      </select>
      <label className='label1'>ಸ್ಥಳ</label>
      <input id="crop1"></input>
      <label className='label'>ವಿಸ್ತೀರ್ಣ</label>
      <select id="crop" name="cars">
        <option></option>
        <option> ಬಹಳ ಸಣ್ಣ (10-20 ಗುಂಟೆ)</option>
        <option>ಸಣ್ಣ (20-40 ಗುಂಟೆ)</option>
        <option>ಮಧ್ಯಮ</option>
        <option>ದೊಡ್ಡ (3-6 ಎಕರೆ)</option>
        <option>ಬಹಳ ದೊಡ್ಡ (6+ ಎಕರೆ)</option>
      </select>
      <label className='label'>ಬೆಳೆ</label>
      <select id="crop" name="cars">
        <option>ಮೆಕ್ಕಲು ಮಣ್ಣು</option>
        <option>ಕಪ್ಪು ಮಣ್ಣು</option>
        <option>ಕೆಂಪು ಮಣ್ಣು</option>
        <option>ಲ್ಯಾಟರೈಟ್ ಮಣ್ಣು</option>
        <option>ಶುಷ್ಕ ಮಣ್ಣು</option>
        <option>ಪರ್ವತ ಮಣ್ಣು</option>
        <option>ಪೀಟಿ ಮಣ್ಣು</option>
      </select>
      </div>
    </div>
  );
}


export default Home;
