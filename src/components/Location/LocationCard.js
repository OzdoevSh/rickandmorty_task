function LocationCard( props ) {
    

    const {
        data: {
            name,
            type,
            residents,
            dimension
        }
    } = props
    

    return (
        <div>
            <h3>{name}</h3>
            <p><b>Type:</b> {type}</p>
            <p><b>Dimension:</b> {dimension}</p>
            {
                <p><b>Characters:</b> {residents.map((resident, index) => <span>{(index ? ', ' : '') + resident.name}</span>)}</p>
            }
        </div>
    )
}



export default LocationCard

