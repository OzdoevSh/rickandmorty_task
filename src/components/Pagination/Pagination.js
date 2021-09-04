import './Pagination.scss'

function Pagination(props) {
    const {info, changePage} = props
    const handleChangePage = (url) => {
        changePage(url)
    }


    return (
        <div>
            {info.prev && <button  onClick={() => handleChangePage(info.prev)}>&#8249; Prev</button>}
            {info.next && <button  onClick={() => handleChangePage(info.next)}>Next &#8250;</button>}
        </div>
    )
}

export default Pagination