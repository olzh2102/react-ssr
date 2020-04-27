import axios from 'axios'

export const FETCH_USERS = 'fetch_users'
export const fetchUsers = () => async (
	dispatch
) => {
	const url =
		'https://react-ssr-api.herokuapp.com'
	const res = await axios.get(url + '/users')

	dispatch({
		type: FETCH_USERS,
		payload: res,
	})
}
