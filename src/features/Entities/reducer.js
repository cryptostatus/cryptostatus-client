import { API_CALL, SUCCESS } from 'actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case API_CALL + SUCCESS:
      console.log(payload)
      return state
    default:
      return state
  }
}
