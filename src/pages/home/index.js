import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Button } from 'antd'
import logo from './logo.png'

class App extends React.Component {
	render() {
		return (
			<div style={{ padding: 30,paddingTop: 150 }}>
                <div style={{width: '100%',display: 'flex',justifyContent: 'center',alignItems: 'center',marginBottom: 100}}>
                    <img src={logo} alt="" width="200px" />
                </div>
				<Link to="/prof">
					<Button size="large" type="primary" block>
						Professor
					</Button>
				</Link>
				<br />
				<br />
                <Link to="/login">
                    <Button size="large" block>
                        Student
				    </Button>
                </Link>
			</div>
		)
	}
}

export default App
