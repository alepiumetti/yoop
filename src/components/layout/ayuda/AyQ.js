import React from 'react'
import PropTypes from 'prop-types'

import './AyQStyle.css'

function AyQ(props) {
    return (
        <div>
            <h2 className = "pregunta" >¿{props.question}?</h2>
            <p className = "respuesta" >{props.answer}</p>

        </div>
    )
}

AyQ.propTypes = {

}

export default AyQ

