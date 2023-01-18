import React from 'react'
function a(name,text,id=2){

}

// props == {edit,save}
const Button = (props) => {
  return (
    <button>{props.children}</button>
  )
}

export default Button