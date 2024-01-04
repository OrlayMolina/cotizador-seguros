import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [modal, setModal] = useState(false);

    return(
        <CotizadorContext.Provider
            value={{
                modal,
                setModal
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