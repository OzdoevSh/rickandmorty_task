import { Component } from "react";
import { connect } from 'react-redux'
import { getEpisodes } from '../../store/actions/episodeActions'
import EpisodeCard from "./EpisodeCard";
import Pagination from "../Pagination/Pagination";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import './Episodes.scss'


class Episodes extends Component {

    componentDidMount() {
        this.props.getEpisodes("https://rickandmortyapi.com/api/episode")
    }

    componentDidUpdate() {
        window.scroll(0, 0)
    }


    render() {
        const {
            episodes: {
                episodes
            },
            info,
        } = this.props 

        if(this.props.episodes.loading){
            return <div><LoadingIndicator/></div>
        } 
        return (
            
                    <div class="episodes">

                        {episodes.map(ep =>
                            <div className="ep"><EpisodeCard key={ep.id} data={ep} /></div>)}
                        <div className="pagination"><Pagination info={info} changePage={this.props.getEpisodes}/></div>
                        
                    </div>
                
    
        )
    }
}
const mapStateToProps = (state) => ({ episodes: state.episodes, info: state.episodes.info })
export default connect(mapStateToProps, { getEpisodes })(Episodes)