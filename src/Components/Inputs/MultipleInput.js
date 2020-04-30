import React, { useContext,  memo } from 'react';

import InputGroupContext from '../../Context/InputGroupContext'


export const Radio = memo(({id, value, required, ...otherProps}) => {

    const {onChange, selectedValue,onInvalid ,isRequired} = useContext(InputGroupContext);

    return (
        <input {...otherProps} required={isRequired}  onInvalid={onInvalid} value={value} onChange={onChange} checked={selectedValue === value} type="radio" />
    )

})
Radio.displayName = 'Radio';

export const CheckBox = memo(({id, value,  required, ...otherProps}) => {

    const {onChange, selectedValue,onInvalid } = useContext(InputGroupContext);

    return (
        <input {...otherProps} checked={selectedValue[value] === true }   onInvalid={onInvalid} value={value} onChange={onChange}  type="checkbox" />
    )

})

CheckBox.displayName = 'CheckBox';
