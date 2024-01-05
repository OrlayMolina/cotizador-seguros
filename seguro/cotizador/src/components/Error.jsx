import useCotizador from "../hooks/useCotizador";

const Error = () => {

    /// Extraer el error del state de cotizador
    const { error } = useCotizador();

    return (
        <div className="border text-center border-red-400 bg-red-100 py-3 text-red-700 rounded-lg">
            <p>{error}</p>
        </div>
    )
}

export default Error
