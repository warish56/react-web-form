import React, { useContext,  memo } from 'react';

import InputGroupContext from '../../Context/InputGroupContext'


export const Radio = memo(({id, value, ...otherProps}) => {

    const {onChange, selectedValue,onInvalid ,required} = useContext(InputGroupContext);

    return (
        <input {...otherProps} required={required}  onInvalid={onInvalid} value={value} onChange={onChange} checked={selectedValue === value} type="radio" />
    )

})

export const CheckBox = memo(({id, value, ...otherProps}) => {

    const {onChange, selectedValue,onInvalid, required } = useContext(InputGroupContext);

    return (
        <input {...otherProps} required={required}  onInvalid={onInvalid} value={value} onChange={onChange} checked={selectedValue === value} type="checkbox" />
    )

})
