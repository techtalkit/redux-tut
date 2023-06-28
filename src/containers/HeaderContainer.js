import {connect} from 'react-redux'
import Header from '../components/Header.js'

const mapStateToProps=state=>({
  cartData:state.cardItems
})
const mapDispatchToProps=dispatch=>({
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)

