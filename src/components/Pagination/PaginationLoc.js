import {connect} from 'react-redux'
import {changePageLocation} from '../../store/actions/locationActions'
import './Pagination.scss'


function PaginationLoc(props) {
    const {info, changePageLocation} = props
    const handleChangePage = (url) => {
        changePageLocation(url)
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
        info: state.locations.info
    }
}

export default connect(mapStateToProps, {changePageLocation})(PaginationLoc)