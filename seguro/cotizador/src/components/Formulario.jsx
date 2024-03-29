import { Fragment} from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {

    const { data, handleChangeData, error, setError, cotizarSeguro } = useCotizador(); 

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(data).includes('')) {
            setError('Todos los campos son obligatorios');
            return;
        }

        setError('');

        cotizarSeguro();
    }

    return (
        
        <>
            {error && <Error/>}
            <form
                onSubmit={handleSubmit}
            >
                <div className="my-5">

                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>

                    <select 
                        name="marca" 
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeData(e)}
                        value={data.marca}
                    >

                        <option value="">-- Seleccionar Marca --</option>

                        {MARCAS.map(marca => (
                            <option 
                                key={marca.id}
                                value={marca.id}
                            >
                                {marca.nombre}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="my-5">

                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Año
                    </label>

                    <select 
                        name="year" 
                        className="w-full p-3 bg-white border border-gray-200"
                        onChange={e => handleChangeData(e)}
                    >

                        <option value="">-- Seleccionar Año --</option>

                        {YEARS.map(year => (
                            <option 
                                key={year}
                                value={year}
                                data={year}
                            >
                                {year}
                            </option>
                        ))}
                    </select>

                </div>

                <div className="my-5">

                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Elige un Plan
                    </label>

                    <div className="flex gap-3 items-center">

                        {PLANES.map(plan => (
                            <Fragment key={plan.id}>

                                <label> {plan.nombre}</label>

                                <input
                                    type="radio"
                                    name="plan"
                                    value={plan.id}
                                    onChange={e => handleChangeData(e)}
                                />

                            </Fragment>
                        ))}

                    </div>

                </div>

                <input
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold rounded-lg"
                    value="Cotizar"
                />
            </form>
        </>
    )
}

export default Formulario
