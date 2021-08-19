import { Component } from "react";
import { connect } from 'react-redux'
import { getEpisodes } from '../../store/actions/episodeActions'
import EpisodeCard from "./EpisodeCard";
import PaginationEp from "../Pagination/PaginationEp";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import './Episodes.scss'


class Episodes extends Component {

    componentDidMount() {
        this.props.getEpisodes()
    }

    componentDidUpdate() {
        window.scroll(0, 0)
    }


    render() {
        const { episodes } = this.props.episodes
        console.log('ld',this.props.episodes.loading)
        if(this.props.episodes.loading){
            return <div><LoadingIndicator/></div>
        } 
        return (
            
                    <div class="episodes">

                        {episodes?.map(ep =>
                            <div className="ep"><EpisodeCard key={ep.id} data={ep} /></div>)}
                        <div className="pagination"><PaginationEp /></div>
                        
                    </div>
                
    
        )
    }
}
const mapStateToProps = (state) => ({ episodes: state.episodes })
export default connect(mapStateToProps, { getEpisodes })(Episodes)