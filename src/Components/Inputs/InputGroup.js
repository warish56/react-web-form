import React, { useState, useEffect, useContext, useRef, useCallback, memo } from 'react';
import Error from '../Error';

import FormContext from '../../Context/FormContext'
import InputGroupContext from '../../Context/InputGroupContext'


 const InputGroup = ({id, children, onChange, defaultValue='', emptyText, onInvalid, required=false, HeaderComponent, FooterComponent, label  }) =>{

    const [value, setValue] = useState( () => defaultValue);
    const [isCheckBox, setCheckBox] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
    const [gotFocus, setFocus] = useState(false);

    const inputRef = useRef();
    const registerInput = useContext(FormContext);

    useEffect(() => {
       const childrenArray =  React.Children.toArray(children);
      
       let gotCheckBox = false
       const isCheckBox = (childArray) => {
        if(gotCheckBox){ return;}

        for(let i =0 ; i< childArray.length ; i++){
            if(gotCheckBox){ break;}
         const child = childArray[i];

            if(child.type.displayName === 'CheckBox'){
                setCheckBox(true);
                const values = {};
                if(Array.isArray(defaultValue)){
                    defaultValue.forEach((value) => {
                        values[value] = true;
                    } )
                }
                setValue(values)
                gotCheckBox= true;
                break;
            }

            if(child.props.children && Array.isArray(child.props.children) && child.props.children.length > 0 ){
                isCheckBox(child.props.children)
            }
        }
       }

       isCheckBox(childrenArray);

       
       
    }, [])

    const  getValue =  useCallback(() => { return  value }, [value])

    const resetField = useCallback(() => {

        if(isCheckBox){
            setValue(defaultValue ? {[defaultValue]: true}: {}) 
        }else{
        setValue(defaultValue ? defaultValue : '')
        }
        

        if(typeof onChange === 'function'){
        onChange(id, defaultValue ? defaultValue : '');
        }
    
      },[onChange, id, defaultValue,isCheckBox]);

      const checkAndSetError = useCallback(( target, targetValue = '') => {

        let isInputInvalid = false;

        if(targetValue){

            switch(isCheckBox){
                case true:  isInputInvalid = Object.keys(targetValue).length < 1; break;
                case false: isInputInvalid = targetValue === ''; break;
            }

        }else{

            switch(isCheckBox){
                case true:  isInputInvalid = Object.keys(value).length < 1; break;
                case false: isInputInvalid = value === ''; break;
            }

        }

       
        if(target){
            if (isInputInvalid) {
                target.setCustomValidity(emptyText);
            } else {
                target.setCustomValidity('');
            }
        }

          setInvalid(isInputInvalid);
          setFocus(true);
        return isInputInvalid;
    }, [value,emptyText, isCheckBox])


    useEffect(() => {
        if(typeof registerInput === 'function'){
            inputRef.current = {getValue, resetField, checkAndSetError};
            registerInput(id,inputRef.current);
        }

    },[inputRef,getValue, resetField, checkAndSetError])





    const onInputChange = useCallback((e) => {
        const val = e.target.value;
        let newCheckBoxVal = '';

        if(isCheckBox){
        const {checked} = e.target;
        newCheckBoxVal = typeof value === 'object' ? {...value,[val]: checked} : {[val]: checked};
          if(!checked){
              delete newCheckBoxVal[val];
          }
        setValue(newCheckBoxVal);

        }else{
        setValue(val);
        }

        if(gotFocus){
        checkAndSetError(e.target,isCheckBox ? newCheckBoxVal : val);
        }
        
        if(typeof onChange === 'function'){
            onChange(id, val)
        }


    },[id,onChange,gotFocus, isCheckBox,checkAndSetError])

    const onInvalidCalled = useCallback((e) => {

        checkAndSetError(e.target)
        if(typeof onInvalid === 'function'){
            onInvalid(e)
        }

      },[checkAndSetError, onInvalid])

    const errorText = (isInvalid && gotFocus ? emptyText : '' );

    return (

        <div className="inputContainer">
            { HeaderComponent && React.isValidElement(<HeaderComponent/>) ? <HeaderComponent label={label}/> : <label>{label}</label>}
            <InputGroupContext.Provider value={{selectedValue:value, onChange:onInputChange, onInvalid: onInvalidCalled, isRequired: required}}>
            {children}
            </InputGroupContext.Provider>
            {FooterComponent && React.isValidElement(<FooterComponent/>) ? <FooterComponent error={errorText}/> : <Error  text={errorText}/>}
        </div>
    )
}


export default InputGroup;
