import React from "react";

const Button = (props: { [x: string]: any; children: React.ReactNode; }) => {
    const {children, ...otherProps} = props
        return(
        <button {...otherProps} >{children}</button>
    )
}

export default Button;