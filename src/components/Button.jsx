import React from 'react'

function Button({ children, type = 'button', bgColor = 'button', textColor = 'text-white', className = '', ...props }) {
    return (
        <button className={`px-4 py-2 rounded-lg cursor-pointer ${className} ${textColor} ${bgColor}`} {...props}>
            {children}
        </button >
    )
}

export default Button