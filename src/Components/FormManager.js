import React, { useState, useCallback } from 'react';


import FormContext from '../Context/FormContext';

const FormManager = ({children, onSubmit, ...otherProps})=>{

    const [refs, setRef] = useState({});

    const registerInput = useCallback((id, ref) => {
        setRef((prevRefs) => ({...prevRefs, [id]: ref}) )
    }, [])


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


    

    return(

        <form  {...otherProps} onSubmit={onFormSubmit}>
        <FormContext.Provider value={registerInput}>
         {children}
        </FormContext.Provider>
        </form>
    )
}

export default FormManager;