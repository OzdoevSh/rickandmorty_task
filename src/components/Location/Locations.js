import { Component } from "react";
import {connect} from 'react-redux'
import {getLocations} from '../../store/actions/locationActions'
import LocationCard from "./LocationCard";
import Pagination from "../Pagination/Pagination";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import './Locations.scss'


class Locations extends Component {

    componentDidMount(){
        this.props.getLocations("https://rickandmortyapi.com/api/location")
    }

    componentDidUpdate() {
        window.scroll(0, 0)
    }

    render() {
        const {
            locations: {
                locations
            },
            info,
        } = this.props 
        
        if(this.props.locations.loading){
            return <div><LoadingIndicator/></div>
        } 
        return (
            
                    <div class="episodes">

                        {locations.map(loc =>
                            <div className="ep"><LocationCard key={loc.id} data={loc} /></div>)}
                        <div className="pagination"><Pagination info={info} changePage={this.props.getLocations}/></div>
                        
                    </div>
                
    
        )
    }
}
const mapStateToProps  = (state) => ({
    locations:state.locations, 
    info: state.locations.info
})

export default connect(mapStateToProps, {getLocations})(Locations)