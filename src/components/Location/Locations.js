import { Component } from "react";
import {connect} from 'react-redux'
import {getLocations} from '../../store/actions/locationActions'
import LocationCard from "./LocationCard";
import PaginationLoc from "../Pagination/PaginationLoc";
import './Locations.scss'


class Locations extends Component {

    componentDidMount(){
        this.props.getLocations()
    }



    render() {
        const {locations} = this.props.locations
        console.log(locations)
        

    
        return (
            <div className="locations">
                {locations?.map(loc => 
                    <div className="loc"><LocationCard key={loc.id} location={loc}/></div>)}
                    <div className="pagination"><PaginationLoc/></div>
            </div>
            
        )
    }
}
const mapStateToProps  = (state) => ({locations:state.locations})

export default connect(mapStateToProps, {getLocations})(Locations)