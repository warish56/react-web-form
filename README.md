# react-web-form

## Why?
##### Great performant optimization. it will only re-render that input element which needs to be updated.

## Installation
`npm i react-web-form`

`yarn add react-web-form`

## Usage

#### 1. TextInput

```javascript
import React, { memo } from 'react';
import {InputManager, FormManager} from 'react-web-form'
import './App.css';


function App() {

  const onSubmit = (data,resetForm) => {
    console.log({data});
    resetForm();
  }
  const isInvalidName = (val) => val.trim().length < 3;
  return (
    <div className="App">
      <div className="app-conatiner">
              <FormManager onSubmit={onSubmit}>
                    <InputManager.Text
                    id="name"  
                    required 
                    className="input-text"
                    type="text"
                    label="Name" 
                    invalidText="name is invalid"
                    emptyText="Name is required"
                    validate={isInvalidName}
                    />
                    <button type="submit">SUbmit</button>
              </FormManager>
       </div>
     </div>
  );
}

export default App;

```

### InputManager.Text ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `id`     | same key will be used to identify the input field when the form will be submitted.| `true` |
|required     |  if input filed is required deuring submit      |   false |
|errorClass     |  css style className which will be apllied to input element when the field is invalid    |   false |
| label | to display a label on top of input      |    false |
| invalidText | text to display when the field is invalid      |    false |
| emptyText |text to display when the field is empty       |    false |
| validate | function to validate if the field is invalid or not      |    false |
| HeaderComponent | a react component to display on top of input element      |    false |
| FooterComponent |  a react component to display at bottom of input element and it will receive an error in props; |    false |
| onChange | function will be called on every change and it will receive an (id, value) as params    |    false |
| all other input props | all the props which are passed to an input element    |    false |



#### 2. SelectInput

```javascript
import React, { memo } from 'react';
import {InputManager, FormManager} from 'react-web-form'
import './App.css';


function App() {

  const onSubmit = (data,resetForm) => {
    console.log({data});
    resetForm();
  }
  const isInvalidAnimal = (val) => val.trim().length < 3;
  return (
    <div className="App">
      <div className="app-conatiner">
              <FormManager onSubmit={onSubmit}>
                   <InputManager.Select 
                    id="animal"
                    required 
                    className="input-text"
                    validate={isInvalidAnimal}
                    emptyText="Animal is required" 
                    placeholder="Select Animal"
                    >
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                    </InputManager.Select>
                    <button type="submit">SUbmit</button>
                </FormManager>
       </div>
     </div>
  );
}

export default App;

```

### InputManager.Select ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `id`     | same key will be used to identify the input field when the form will be submitted.| `true` |
|required     |  if input filed is required deuring submit      |   false |
|errorClass     |  css style className which will be apllied to input element when the field is invalid    |   false |
| label | to display a label on top of input      |    false |
| invalidText | text to display when the field is invalid      |    false |
| emptyText |text to display when the field is empty       |    false |
| validate | function to validate if the field is invalid or not      |    false |
| HeaderComponent | a react component to display on top of input element      |    false |
| FooterComponent |  a react component to display at bottom of input element and it will receive an error in props; |    false |
| onChange | function will be called on every change and it will receive an (id, value) as params    |    false |
| all other select props | all the props which are passed to an  select input element    |    false |


#### 3. TextArea

```javascript
import React, { memo } from 'react';
import {InputManager, FormManager} from 'react-web-form'
import './App.css';


function App() {

  const onSubmit = (data,resetForm) => {
    console.log({data});
    resetForm();
  }
  const isInvalidName = (val) => val.trim().length < 3;
  return (
    <div className="App">
      <div className="app-conatiner">
              <FormManager onSubmit={onSubmit}>
                    <InputManager.TeaxtArea
                    id="name"  
                    required 
                    className="input-text"
                    type="text"
                    label="Name" 
                    invalidText="name is invalid"
                    emptyText="Name is required"
                    validate={isInvalidName}
                    />
                    <button type="submit">Submit</button>
              </FormManager>
       </div>
     </div>
  );
}

export default App;

```

### InputManager.TextArea ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `id`     | same key will be used to identify the input field when the form will be submitted.| `true` |
|required     |  if input filed is required deuring submit      |   false |
|errorClass     |  css style className which will be apllied to input element when the field is invalid    |   false |
| label | to display a label on top of input      |    false |
| invalidText | text to display when the field is invalid      |    false |
| emptyText |text to display when the field is empty       |    false |
| validate | function to validate if the field is invalid or not      |    false |
| HeaderComponent | a react component to display on top of input element      |    false |
| FooterComponent |  a react component to display at bottom of input element and it will receive an error in props; |    false |
| onChange | function will be called on every change and it will receive an (id, value) as params    |    false |
| all other input props | all the props which are passed to an `<textarea/>` input element    |    false |



#### 4. RadioInput

```javascript
import React, { memo } from 'react';
import {InputManager, FormManager} from 'react-web-form'
import './App.css';


function App() {

  const onSubmit = (data,resetForm) => {
    console.log({data});
    resetForm();
  }
  const isInvalidAnimal = (val) => val.trim().length < 3;
  return (
    <div className="App">
      <div className="app-conatiner">
              <FormManager onSubmit={onSubmit}>
                   <InputManager.Group 
                   id="hobby"
                   required  
                   label="Hobbies --------" 
                   emptyText="hobby required"
                   >
        
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
                    <button type="submit">Submit</button>
                </FormManager>
       </div>
     </div>
  );
}

export default App;

```

### InputManager.Group ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `id`     | same key will be used to identify the input field when the form will be submitted.| `true` |
|required     |  if input filed is required deuring submit      |   false |
| label | to display a label on top of input      |    false |
| invalidText | text to display when the field is invalid      |    false |
| emptyText |text to display when the field is empty       |    false |
| validate | function to validate if the field is invalid or not      |    false |
| HeaderComponent | a react component to display on top of input element      |    false |
| FooterComponent |  a react component to display at bottom of input element and it will receive an error in props; |    false |
| onChange | function will be called on every change and it will receive an (id, value) as params    |    false |



### InputManager.Radio ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `name`     | required to make the only a single radio input to be selected in a group| `true` |
| `value`     |  value to be updtated when form  is submitted    |   `true` |
| radio input props | all other props available on a  `<input type="radio"/>`  element   |    false |



#### 5. CheckBox

```javascript
import React, { memo } from 'react';
import {InputManager, FormManager} from 'react-web-form'
import './App.css';


function App() {

  const onSubmit = (data,resetForm) => {
    console.log({data});
    resetForm();
  }
  const isInvalidAnimal = (val) => val.trim().length < 3;
  return (
    <div className="App">
      <div className="app-conatiner">
              <FormManager onSubmit={onSubmit}>
                   <InputManager.Group  
                   id="Hobbies"
                   label="Hobbies --------" 
                   required 
                   emptyText="hobby required"
                   >
        
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
                    <button type="submit">Submit</button>
                </FormManager>
       </div>
     </div>
  );
}

export default App;

```



### InputManager.Group ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `id`     | same key will be used to identify the input field when the form will be submitted.| `true` |
|required     |  if input filed is required deuring submit      |   false |
| label | to display a label on top of input      |    false |
| invalidText | text to display when the field is invalid      |    false |
| emptyText |text to display when the field is empty       |    false |
| validate | function to validate if the field is invalid or not      |    false |
| HeaderComponent | a react component to display on top of input element      |    false |
| FooterComponent |  a react component to display at bottom of input element and it will receive an error in props; |    false |
| onChange | function will be called on every change and it will receive an (id, value) as params    |    false |

### InputManager.CheckBox ----- Props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `name`     | required to make a group of selected elements| `true` |
| `value`     |  value to be updtated when form  is submitted    |   `true` |
| other input props | all other props available on a  `<input type="checkbox"/>`  element   |    false |



### `FormManager` ---- props

 
| Props       | Description           | required  |
| ------------- |:-------------:| -----:|
| `onSubmit`     | function which will be called when the form is submitted and none of the field is invalid| `true` |
|all other form props     |  all the other `<form/>` props can be passed     |   false |





