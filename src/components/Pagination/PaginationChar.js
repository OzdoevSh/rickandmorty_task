import {connect} from 'react-redux'
import {changePageCharacter} from '../../store/actions/characterActions'
import './Pagination.scss'

function PaginationChar(props) {
    const {info, changePageCharacter} = props
    const handleChangePage = (url) => {
        changePageCharacter(url)
    }


    return (
        <div>
            {info.prev && <button  onClick={() => handleChangePage(info.prev)}>&#8249; Prev</button>}
            {info.next && <button  onClick={() => handleChangePage(info.next)}>Next &#8250;</button>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.characters.info
    }
}

export default connect(mapStateToProps, {changePageCharacter})(PaginationChar)