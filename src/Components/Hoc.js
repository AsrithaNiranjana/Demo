import React from 'react'
import NavBar from './NavBar'

function Hoc(BaseComp) {
    return function enhabcedcomponent(props){
        return (
            <>
            <NavBar />
            <BaseComp {...props} />
            </>
        )
    }
}

export default Hoc;
