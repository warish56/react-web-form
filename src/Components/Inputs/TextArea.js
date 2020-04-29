import React, { useState, useEffect, useContext, useRef, useCallback, memo } from 'react';

import Error from '../Error';

import FormContext from '../../Context/FormContext'

const InputManager = memo(({id,onChange, defaultValue= '', onInvalid, onBlur, validate, invalidText, emptyText, required, ...otherProps}) => {
    const [value, setValue] = useState(() => defaultValue);
    const [isInvalid, setInvalid] = useState(false);
    const [gotFocus, setFocus] = useState(false);

    const inputRef = useRef();
    const registerInput = useContext(FormContext);


    
   const  getValue =  useCallback(() => { return value; }, [value])


   const resetField = useCallback(() => {

    setInvalid(false);
    setFocus(false);
    setValue(defaultValue ? defaultValue : '')

    if(typeof onChange === 'function'){
    onChange(id, defaultValue ? defaultValue : '');
    }

  },[onChange, id, defaultValue]);


    useEffect(() => {
        if(typeof registerInput === 'function'){
            inputRef.current = {getValue, resetField};
            registerInput(id,inputRef.current);
        }

    },[inputRef,getValue, resetField])


    const checkAndSetError = useCallback((target) => {
        const val = target.value;
        const isInputInvalid = typeof validate === 'function' ? validate(val) : false;
        if (isInputInvalid) {
          target.setCustomValidity(val ? invalidText : emptyText);
        } else {
          target.setCustomValidity('');
        }

        return isInputInvalid;

    }, [validate, invalidText, emptyText])


    const onInputChange = useCallback((e) => {
        const val = e.target.value;
        setValue(val);

        if(gotFocus){
        const isInputInvalid = checkAndSetError(e.target)
        setInvalid(isInputInvalid);
        }
        
        if(typeof onChange === 'function'){
            onChange(id, val)
        }
    },[checkAndSetError,id,onChange,gotFocus])





    const onInvalidCalled = useCallback((e) => {

        const isInputInvalid = checkAndSetError(e.target)
        setInvalid(isInputInvalid);
        setFocus(true);

        if(typeof onInvalid === 'function'){
            onInvalid(e)
        }

      },[checkAndSetError, onInvalid])


      const onInputBlur = useCallback((e) => {
          if(!gotFocus){
              setFocus(true);
          }
          if(typeof onBlur === 'function'){
            onBlur(e)
        }
      },[gotFocus, onBlur])
    

const errorText = (isInvalid && gotFocus ? (value ? invalidText : emptyText) : '' );

    return (
        <div className="inputContainer">
         <textarea {...otherProps} value={value} onBlur={onInputBlur} required={required} onChange={onInputChange} onInvalid={onInvalidCalled}>
         </textarea>
         <Error  text={errorText}/>
        </div>
    )

})

export default InputManager;