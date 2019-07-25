import React from 'react'

const withClass = (WrappedComponent, className) => {
    //use the spread operator to pass all the props to
    //the wrapped component
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    )
}

export default withClass