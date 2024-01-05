import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    return(
        <CotizadorContext.Provider
            value={{
                data,
                handleChangeData, 
                error,
                setError
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