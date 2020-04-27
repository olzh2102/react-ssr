import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

export default class UserList extends Component {
	componentDidMount() {
		//this.props.fetchUsers()
	}

	render() {
		return (
			<div>
				Here goes list of users
				<ul>
					{this.props.users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	users: state.users,
})

export default connect(mapStateToProps, {
	fetchUsers,
})(UserList)
