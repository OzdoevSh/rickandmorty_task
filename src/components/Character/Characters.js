import { Component } from "react";
import { connect } from 'react-redux'
import { 
    getCharacters,
} from '../../store/actions/characterActions'
import CharacterCard from "./CharacterCard";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import './Characters.scss'


class Characters extends Component {
    componentDidMount() {
        this.props.getCharacters('https://rickandmortyapi.com/api/character')
    }

    componentDidUpdate() {
        window.scroll(0,0)
    }

    handleFilter = (filterData) => {
        if (filterData.key === "searchBox") this.props.getCharacters('https://rickandmortyapi.com/api/character', {name: filterData.value});
        else if (filterData.key === "status") this.props.getCharacters('https://rickandmortyapi.com/api/character', {status: filterData.value  !== 'all' ? filterData.value : null});
        else if (filterData.key === "gender") this.props.getCharacters('https://rickandmortyapi.com/api/character', {gender: filterData.value  !== 'all' ? filterData.value : null});
      };

    render() {
      
        const {
            characters: {
                characters
            },
            info,
        } = this.props 
        return (
        <div>
            <div className="filter"><Filter handleFilter={this.handleFilter} /></div>

            <div className="character">
                {characters.map(char =>
                <div className="char"><CharacterCard key={char.id} character={char} /></div>
                    )}
            </div>
            <div className="pagination"><Pagination info={info} changePage={this.props.getCharacters}/></div>
        </div>);
    }
}
const mapStateToProps = (state) => ({ 
    characters: state.characters,
    info: state.characters.info
})

export default connect(mapStateToProps, {
    getCharacters
})(Characters)