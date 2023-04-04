import React from "react";
import s from './FormsControls.module.css'

export const Element = ({input, meta, children}) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={ s.formControl + "" + ( hasError ? s.error : "" ) }>
      <div>
      <children.type {...input} {...children.props} />
      </div>
      { hasError && <span> {meta.error} </span> }
    </div>
  );
};

export const Textarea = (props) => {
    return <Element {...props}><textarea/></Element>
}
export const Input = (props) => {
    return <Element {...props}><input/></Element>
}
