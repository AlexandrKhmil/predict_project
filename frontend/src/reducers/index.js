import { combineReducers } from 'redux'

import accounts from './accounts'
import messages from './messages'

export default combineReducers({
    accounts,
    messages,
})