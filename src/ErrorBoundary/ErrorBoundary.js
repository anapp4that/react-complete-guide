import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = ((error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    })

    render() {

        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        }
        else {
            return this.props.children
        }
    }
}

export default ErrorBoundary

//Only use ErrorBoundaries for when a piece of code *Might Fail*.
//This is not a tool to use just anywhere