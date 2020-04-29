import React from 'react';
import './App.css';
import FormManager from './Components/FormManager';
import InputManager from './Components/Inputs/Inputmanager';



function App() {

  const onSubmit = (data,resetForm) => {

    console.log({data});
    resetForm();

  }

  const validateName = (val) => val.trim().length < 3;

  return (
    <div className="App">

     <div className="app-conatiner">
      <FormManager onSubmit={onSubmit}>
        <InputManager.Text
        className="input-text"
        id="name" 
        placeholder="Name" 
        required 
        type="text"
        invalidText="name is invalid"
        emptyText="Name is required"
        validate={validateName}
        />

        <InputManager.Text
        className="input-text"
        id="city" 
        placeholder="City" 
        required 
        type="text"
        invalidText="City is invalid"
        emptyText="City is required"
        validate={validateName}
        />


        <InputManager.RadioGroup id="hobby" required  emptyText="hobby required">
        
        <div>
        <InputManager.Radio name="hobby" value="Marketing" />
        <span>Marketing</span>
        </div>

        <div>
        <InputManager.Radio name="hobby" value="Fishing" />
        <span>Fishing</span>
        </div>

        <div>
        <InputManager.Radio name="hobby" value="hawking" />
        <span>hawking</span>
        </div>

        <div>
        <InputManager.Radio name="hobby" value="bashing" />
        <span>bashing</span>
        </div>

        </InputManager.RadioGroup>

        <button type="submit">SUbmit</button>
      </FormManager>

      </div>

    </div>
  );
}

export default App;
