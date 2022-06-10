import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{

        return word[0].toUpperCase() + word.slice(1,).toLowerCase()
    }
    return (
        <>
            {props.alert&&<div id='alert' className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
            </div>}
        </>
    )
}
