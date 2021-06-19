import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje =styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;
const ResultadoCotizacion =styled.div`
    background-color: rgb(127,224,237);
    margin-top: 1rem;
    padding: .5rem;
    border: 1px solid #26C6DA;
    text-align: center;
    position: relative;
    
`;
const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin:0;
`;
const Resultado = ({cotizacion}) => {
    const validateDOM = React.useRef(null)
    return ( 
        (cotizacion ===0)?
        <Mensaje>Elige marca, año y tipo de seguro:</Mensaje>:
        (<ResultadoCotizacion>
            
            <TransitionGroup 
            component="div"
            className="resultado"
            >
            <CSSTransition 
            nodeRef={validateDOM} in timeout={{enter:500,exit:500}} className="resultado"
            key={cotizacion}
            >
                <TextoCotizacion>El total es: {cotizacion}</TextoCotizacion>
            </CSSTransition>
            </TransitionGroup>
        </ResultadoCotizacion>)
     );
}
 
Resultado.propTypes={
    cotizacion:PropTypes.number.isRequired,

}
export default Resultado;