import React from "react";
const Select = props => {
  const { options, onChange,label,name,selection,errors } = props;

  console.log("OPTIONS",options);

  return (
    <div className="form-group">

    <label htmlFor={name}>{label}</label>
     <select
        className="form-control"
        id={name}
        onChange={onChange}
        value={selection}>


        <option value=''>Select {label}...</option>
        {options.map(option => (
          <option
            key={option._id}
            value={option._id}>       
            {option.name}
          </option>



        ))}
      </select>
      {errors &&
      errors[name] &&
      errors[name].map(error => (
        <div className="alert alert-danger" key={error}>
          {error}
        </div>
      ))}
    </div>
  );
};

export default Select;
