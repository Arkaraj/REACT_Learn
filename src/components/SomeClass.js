import React, { Component } from 'react'

class SomeClass extends Component {
    // Make constructors
    // should use bind for States because of this keyword
    // this => Component instance
    render() {
        const { name, code } = this.props
        return (
            <div>
                <h1>This is a Class Components</h1>
                <p>I am {name}, and I love {code}</p>
            </div>
        )
    }
}

export default SomeClass