import {connect} from 'react-redux'
import Home from "../components/Home.js"
import {addToCart} from '../Services/Actions/actions.js'
import {removeToCart} from '../Services/Actions/actions.js'

const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler: data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

