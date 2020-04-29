import React, { useState, useEffect, useContext, useRef, useCallback, memo } from 'react';
import Error from '../Error';

import FormContext from '../../Context/FormContext'
import RadioContext from '../../Context/RadioContext'


export const Radio = memo(({id, value, ...otherProps}) => {

    const {onChange, selectedValue,onInvalid } = useContext(RadioContext);

    return (
        <input {...otherProps}  onInvalid={onInvalid} value={value} onChange={onChange} checked={selectedValue === value} type="radio" />
    )

})


export const RadioGroup = ({id, children, onChange, defaultValue='', emptyText, onInvalid }) =>{

    const [value, setValue] = useState( () => defaultValue);
    const [isInvalid, setInvalid] = useState(false);
    const [gotFocus, setFocus] = useState(false);

    const inputRef = useRef();
    const registerInput = useContext(FormContext);

    const  getValue =  useCallback(() => { return  value }, [value])
    const resetField = useCallback(() => {

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


    const checkAndSetError = useCallback((targetValue = '') => {

        const isInputInvalid = targetValue ? targetValue === '' : value === '' ;
        return isInputInvalid;
    }, [value])


    const onInputChange = useCallback((e) => {
        const val = e.target.value;
        console.log({value:val}, e.target, gotFocus)
        setValue(val);

        if(gotFocus){
        const isInputInvalid = checkAndSetError(val)
        setInvalid(isInputInvalid);
        }
        
        if(typeof onChange === 'function'){
            onChange(id, val)
        }


    },[id,onChange,gotFocus, checkAndSetError])

    const onInvalidCalled = useCallback((e) => {

        const isInputInvalid = checkAndSetError()
        setInvalid(isInputInvalid);
        setFocus(true);

        if(typeof onInvalid === 'function'){
            onInvalid(e)
        }

      },[checkAndSetError, onInvalid])

    const errorText = (isInvalid && gotFocus ? emptyText : '' );

    return (

        <div>
            <RadioContext.Provider value={{selectedValue:value, onChange:onInputChange, onInvalid: onInvalidCalled}}>
            {children}
            </RadioContext.Provider>
            <Error text={errorText}/>
        </div>
    )
}

