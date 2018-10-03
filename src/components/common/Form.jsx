import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
class Form extends Component {

    validateForm = () => {
        const error = Joi.validate(this.state.data, this.schema, {
          abortEarly: false
        }).error;
        if (!error) return null;
    
        return this.processErrorDetails(error.details);
      };
    
      validateField = field => {
        const data = {};
        data[field.id] = field.value;
        const schema = {};
        schema[field.id] = this.schema[field.id];
    

    
        const error = Joi.validate(data, schema, { abortEarly: false }).error;
    
        if (!error) return null;
        
        return this.processErrorDetails(error.details);
      };
    
      processErrorDetails = errorDetails => {
        const errors = {};
    
        errorDetails.map(errorDetail => {
          errorDetail.path[0] in errors
            ? errors[errorDetail.path[0]].push(errorDetail.message)
            : (errors[errorDetail.path[0]] = [errorDetail.message]);
        });
    
        return errors;
      };
    
      onSubmit = e => {
        e.preventDefault();
    
        const errors = this.validateForm(e.currentTarget);
        this.setState({ errors });

        if (!errors) {
          this.doSubmit();
        }
      };
    
      onChange = e => {
        const data = { ...this.state.data };

        data[e.currentTarget.id] = e.currentTarget.value;
        const errorOnField = this.validateField(e.currentTarget);
        const currentErrors = { ...this.state.errors };
    
        if (!errorOnField) {
          delete currentErrors[e.currentTarget.id];
        } else {
          currentErrors[e.currentTarget.id] = errorOnField[e.currentTarget.id];
        }
    
        this.setState({ data, errors: currentErrors });
      };
      getSelect=(name,label,options)=>{

        return <Select
         options={options}
         onChange={this.onChange}
         label={label}
         name={name}
         selection={this.state.data[name]}
         errors={this.state.errors}    
         />
       }
      getInput = (name, label, type) => {
        return (
          <Input
            name={name}
            label={label}
            value={this.state.data[name]}
            errors={this.state.errors}
            onChange={this.onChange}
            type={type}
          />
        );
      };
    
      getSubmitButton = (name, type) => {
        return (
          <button disabled={this.validateForm()} className="btn btn-primary">
            {name}
          </button>
        );
      };
    
}
 
export default Form ;