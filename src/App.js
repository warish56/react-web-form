import React, { memo } from 'react';
import './App.css';
import FormManager from './Components/FormManager';
import InputManager from './Components/Inputs/Inputmanager';

import Error from './Components/Error';


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
        label="Name" 
        required 
        type="text"
        invalidText="name is invalid"
        emptyText="Name is required"
        validate={validateName}
        FooterComponent={memo(({error}) => {
        return <Error text={error}/>
      }) }
        />

        <InputManager.Text
        className="input-text"
        id="city" 
        label="City" 
        required 
        type="text"
        invalidText="City is invalid"
        emptyText="City is required"
        validate={validateName}
        />

        <InputManager.Select 
        className="input-text"
        validate={validateName}
         id="animal"
          emptyText="Animal is required" 
          required 
          placeholder="Select Animal">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
        </InputManager.Select>


        <InputManager.Group label="Hobbies --------" required id="hobby"   emptyText="hobby required">
        
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

        </InputManager.Group>


        <InputManager.Group  label="Items --------" required id="items"   emptyText="hobby required">
        
        <div>
        <InputManager.CheckBox name="items" value="Marketing" />
        <span>Marketing</span>
        </div>

        <div>
        <InputManager.CheckBox name="items" value="Fishing" />
        <span>Fishing</span>
        </div>

        <div>
        <InputManager.CheckBox name="items" value="hawking" />
        <span>hawking</span>
        </div>

        <div>
        <InputManager.CheckBox name="items" value="bashing" />
        <span>bashing</span>
        </div>

        </InputManager.Group>

        <button type="submit">SUbmit</button>
      </FormManager>

      </div>

    </div>
  );
}

export default App;
