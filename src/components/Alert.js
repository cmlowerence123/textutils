import React from "react";

function Alert(props) {
  const capitalize = (word)=>{
  const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show px-3`} role="alert">
        <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
      </div>
  )
}

export default Alert;
Alert.defaultProps ={
  msg:"Your Messege here",
  type:"success"
}
