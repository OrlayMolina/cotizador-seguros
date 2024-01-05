import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const cotizarSeguro = () => {
        // Una base que se multiplica por la marca
        let resultado = 2000;

        // Obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(data.year);

        // Por cada año hay que restar el 3%
        resultado -= ((diferencia * 3) * resultado) / 100;

        // Americano 15%
        // Europeo 30%
        // Asiatico 5%
        resultado *= calcularMarca(data.marca);

        // Basico aumenta 20%
        // Completo 50%
        resultado *= calcularPlan(data.plan);
        
        // Formatear dinero
        resultado = formatearDinero(resultado); 

        setResultado(resultado);

    }

    return(
        <CotizadorContext.Provider
            value={{
                data,
                handleChangeData, 
                error,
                setError,
                cotizarSeguro
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