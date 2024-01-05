import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const handleChangeData = e => {
        console.log(e.target.name);
        console.log(e.target.value);
    }

    return(
        <CotizadorContext.Provider
            value={{
                handleChangeData
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

CotizadorProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export {
    CotizadorProvider
}

export default CotizadorContext;