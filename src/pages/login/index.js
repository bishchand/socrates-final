import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'
import logo from '../logo.jpg'
const FormItem = Form.Item

class App extends React.Component {
    state = {
        username: ''
    }
    handleChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
	render() {
		return (
			<div style={{}}>
				{/* <Link to="/">
					<h3 style={{ borderBottom: '1px solid #ddd', padding: '15px 25px' }}>ECON 101</h3>
				</Link> */}
				<div style={{ display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', margin: '50px 0' }}>
					<img src={logo} alt="" width="50%" />
				</div>
				<Form onSubmit={this.handleSubmit} className="login-form" style={{ padding: 25 }}>
					<h3>Welcome!</h3>
					<FormItem>
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" onChange={this.handleChange} />
					</FormItem>
					<FormItem>
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					</FormItem>
					<FormItem>
						<div style={{ textAlign: 'center' }}>
							<Link to={'/student?name=' + this.state.username}>
								<Button type="primary" style={{ borderRadius: 20, width: 200 }} block className="login-form-button">
									Log in
							    </Button>
							</Link>
						</div>

					</FormItem>
				</Form>
			</div>
		)
	}
}

export default App
