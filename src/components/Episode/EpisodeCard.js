function EpisodeCard(props) {
    const {
        data: {
            name,
            air_date,
            characters,
            episode
        }
    } = props

    return (
        <div>
            <h3>{episode}</h3>
            <p><b>Name:</b> {name}</p>
            <p><b>Air Date:</b> {air_date}</p>
            {
                <p><b>Characters:</b> {characters.map((character, index) => <span>{(index ? ', ' : '') + character.name}</span>)}</p>
            }
        </div>
    )
}

export default EpisodeCard