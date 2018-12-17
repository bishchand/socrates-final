import React, { Component } from 'react'

import { HashRouter as Router, Route } from 'react-router-dom'
import { Icon, Button } from 'antd'
import Prof from './pages/professor'
import Stud from './pages/stud'
import Home from './pages/home'
import Login from './pages/login'
import Output from './pages/output'

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/prof',
		component: Prof
	},
	{
		path: '/student',
		component: Stud
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/output',
		component: Output
	}
]

class App extends React.Component {
	state = {
        showBack: window.location.href.substr(-3) !== '/#/'
	}
	componentDidMount() {
		window.addEventListener('hashchange', e => {
			this.setState({ showBack: e.newURL.substr(-3) !== '/#/' })
		})
	}
	goBack = () => {
		window.history.go(-1)
	}
	render() {
        const { showBack } = this.state
        console.log(this.props)
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 50 }}>
				<div style={{ background: 'white', height: 700, width: 400, border: '1px solid #ddd' }}>
					{!showBack ? null : (
						<div			
							style={{
								borderBottom: '1px solid #ddd',
								height: 50,
								lineHeight: '50px',
								paddingLeft: 10,
								fontSize: 16,
								cursor: 'pointer'
							}}
						>
                            <div onClick={this.goBack}>
								<Icon type="left" /> &nbsp; Back
							</div>
						</div>
					)}
					<Router>
						<div>
							{routes.map((v, idx) => (
								<Route key={idx} path={v.path} component={v.component} exact />
							))}
						</div>
					</Router>
				</div>
			</div>
		)
	}
}

export default App
