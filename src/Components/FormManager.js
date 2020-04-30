import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react';


import FormContext from '../Context/FormContext';

let refs = {};
const FormManager = ({children, onSubmit, ...otherProps})=>{

    const formRef = useRef();

    const registerInput = useCallback((id, ref) => {
        refs={
            ...refs,
            [id]: ref
        }
    }, [])

    if(!formRef.current){
        formRef.current = registerInput;
    }


    const clearFields = useCallback(() => {
        Object.keys(refs).forEach((refId) => {
            const {resetField} = refs[refId];
            if(typeof resetField === 'function'){
                resetField();
            }
        })
        
    },[refs])

    const onFormSubmit = useCallback((e) => {
        e.preventDefault();
        const data = {};
        console.log(refs)
        Object.keys(refs).forEach((refId) => {
            const {getValue} = refs[refId];
            if(typeof getValue === 'function'){
                data[refId] = getValue();
            }
        })

        if(typeof onSubmit === 'function'){
            onSubmit(data,clearFields)
        }

    },[refs])

    return (

        <form  {...otherProps} onSubmit={onFormSubmit}>
        <FormContext.Provider value={formRef.current}>
         {children}
        </FormContext.Provider>
        </form>
    )
    
}

export default FormManager;