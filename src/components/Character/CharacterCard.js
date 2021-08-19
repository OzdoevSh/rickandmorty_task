function CharacterCard({character}) {
    const {name, gender, status, species, location, episode, image} = character
    return(
        <div>
            <h2>{name}</h2>
            <div> 
                <img src={image} alt={name} />
            </div>
            <p><b>Location:</b> {location.name}</p>
            <p><b>Gender:</b> {gender}</p>
            <p><b>Species:</b> {species}</p>
            <p><b>Status:</b> {status}</p>
            <p><b>Number of episodes:</b> {episode.length}</p>
        </div>
    )
}

export default CharacterCard