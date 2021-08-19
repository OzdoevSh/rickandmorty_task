import {connect} from 'react-redux'
import { getLocationCharacters } from '../../store/actions/characterActions'
import {useEffect} from 'react'


function EpisodeCard({ location, locationCharacters, getLocationCharacters }) {
    
    const {name, type, dimension, residents} = location

    useEffect(() => {
        getLocationCharacters(residents)
    },[residents])

    

    return (
        <div>
            <h3>{name}</h3>
            <p><b>Type:</b> {type}</p>
            <p><b>Dimension:</b> {dimension}</p>
            {
                <p><b>Characters:</b> {locationCharacters?.map((character, index) => <span>{(index ? ', ' : '') + character.name}</span>)}</p>
            }
        </div>
    )
}

const mapStateToProps  = (state) => ({locationCharacters: state.locations.locationCharacters })

export default connect(mapStateToProps, {getLocationCharacters})(EpisodeCard)

