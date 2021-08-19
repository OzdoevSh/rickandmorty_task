import {connect} from 'react-redux'
import {changePageEpisode} from '../../store/actions/episodeActions'
import './Pagination.scss'


function PaginationEp(props) {
    const {info, changePageEpisode} = props
    const handleChangePage = (url) => {
        changePageEpisode(url)
    }


    return (
        <div>
            {info.prev && <button onClick={() => handleChangePage(info.prev)}>Prev</button>}
            {info.next && <button onClick={() => handleChangePage(info.next)}>Next</button>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.episodes.info
    }
}

export default connect(mapStateToProps, {changePageEpisode})(PaginationEp)