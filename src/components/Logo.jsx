import React from 'react'

function Logo({ width = "100px", color = '' }) {
    return (
        <div style={{width: width, color: color}}>DevBlog</div>
    )
}

export default Logo