import { Component } from "react";
import { connect } from 'react-redux'
import { getCharacters } from '../../store/actions/characterActions'
import CharacterCard from "./CharacterCard";
import PaginationChar from "../Pagination/PaginationChar";
import Filter from "../Filter/Filter";
import './Characters.scss'


class Characters extends Component {

    
  
    componentDidMount() {
        this.props.getCharacters({gender: null, status: null})
    }

    componentDidUpdate() {
        window.scroll(0,0)
    }

    handleFilter = (filterData) => {
        if (filterData.key === "searchBox") this.props.getCharacters({name: filterData.value});
        else if (filterData.key === "status") this.props.getCharacters({status: filterData.value  !== 'all' ? filterData.value : null});
        else if (filterData.key === "gender") this.props.getCharacters({gender: filterData.value  !== 'all' ? filterData.value : null});
      };

    render() {
      
        const {characters} = this.props.characters 
        return (
        <div>
            <div className="filter"><Filter handleFilter={this.handleFilter} /></div>

            <div className="character">
                {characters?.map(char =>
                <div className="char"><CharacterCard key={char.id} character={char} /></div>
                    )}
            </div>
            <div className="pagination"><PaginationChar /></div>
        </div>);
    }
}
const mapStateToProps = (state) => ({ characters: state.characters })

export default connect(mapStateToProps, { getCharacters })(Characters)