import PropTypes from 'prop-types'

const UsersListItem =({userData})=> {
 
  return(
   <li>
    <div>{userData.average}</div>
     <div>
     <p>{userData.name}</p>
    <p>attendance: {userData.attendance}</p>
    </div>
     <button>x</button>
    </li>
  )
}

UsersListItem.propTypes = {
 userData: PropTypes.shape({
  average: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  attendance: PropTypes.string 
 })
}

export default UsersListItem