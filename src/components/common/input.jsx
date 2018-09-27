import React from 'react';
const Input = (props) => {
    const {name,label,value,type,onChange,data,errors,...rest} =props;

    return ( <div className="form-group">

    <label htmlFor={name}>{label}</label>
    <input
      {...rest}
      type={type? type:'text'}
      id={name}
      onChange={onChange}
      className="form-control"
      value={value}
    />
    {errors &&
      errors[name] &&
      errors[name].map(error => (
        <div className="alert alert-danger" key={error}>
          {error}
        </div>
      ))}
  </div> );
}
 
export default Input;