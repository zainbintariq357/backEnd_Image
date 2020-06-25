import React, {Component} from 'react';
import axios from 'axios';
export default class CreateUser extends Component {
	constructor (props) {
		super(props)

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username :''
		}
	}
	onChangeUsername (e) {
		this.setState({
			username: e.target.value
		}) 
	}
	onSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username
		}

		axios.post('http://localhost:3001/api/addusers', user)
			.then(res =>{
				console.log('data added successully');
				console.log(res.data);
			})
		this.setState({
			username: ''
		})
	} 
	render() {
		return (
			<div>
				<h1>Creating a new User Log</h1>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>username is::</label>
						<input type="text"
							required
							className="form-control"	
							value={this.state.username}
							onChange={this.onChangeUsername}		
						/>
					</div>
					<div className="form-group">
						<input type="submit" value="create New Exercise" className="btn btn-primary"/>
					</div>
				</form>
			</div>
		)
	}
}