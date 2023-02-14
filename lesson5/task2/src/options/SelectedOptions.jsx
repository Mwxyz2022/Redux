import { connect } from 'react-redux'
import { selectedOptionsSelector } from './options.selectors'
import Options from './Options'
import { toggleOption } from './options.actions'

const mapStateToProps = state => ({
    options: selectedOptionsSelector(state),
})

const mapDispatch = {
    moveOption: toggleOption,
}

export default connect(mapStateToProps, mapDispatch)(Options)
