import {
    useEffect
} from 'react'

import {connect} from 'react-redux'

import { getEpisodeCharacters } from '../../store/actions/characterActions'

function EpisodeCard({ data, episodeCharacters, getEpisodeCharacters }) {
    
    const { name, air_date, characters, episode } = data

    useEffect(() => {
        getEpisodeCharacters(characters)
    }, [characters])

    

    return (
        <div>
            <h3>{episode}</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>Air Date:</b> {air_date}</p>
            {
                <p><b>Characters:</b> {episodeCharacters?.map((character, index) => <span>{(index ? ', ' : '') + character.name}</span>)}</p>
            }
        </div>
    )
}

const mapStateToProps  = (state) => ({episodeCharacters: state.episodes.episodeCharacters })

export default connect(mapStateToProps, {getEpisodeCharacters})(EpisodeCard)