import React, { Component } from 'react'
import { Card, List, Rate, Button ,Modal} from 'antd'
import { Link,withRouter } from 'react-router-dom'
import home from '../home.jpg'
import topic from './topic.png'

class App extends React.Component {
	state = {
		star: 0
	}
	submit = () => {
        const {star} = this.state
        const name = window.location.href.split('=')[1]
		fetch(`http://47.52.162.192:4001/submit`, {
			method: 'POST',
			body: JSON.stringify({ star,name }),
			headers: new Headers({
				'content-type': 'application/json'
			})
		}).then(response => {
			if (response.ok) {
				return response.json()
			} else {
				return Promise.reject('fetch-error')
			}
		}).then(res => {
            if(res.succ) {
                Modal.success({
                    title: 'Success',
                    content: 'Thanks for your submission',
                    onOk: () => {
                        this.props.history.push({
                            pathname: '/'
                        })
                    },
                });
            }
        })
	}
	onStar = value => {
		this.setState({
			star: value
		})
	}
	render() {
		return (
			<div>
				<Card bordered={false} style={{ width: '100%' }}>
					<Link to="/">
						<img src={home} alt="" width="50" />
					</Link>
					<img src={topic} width="100%" alt="" />
					<div style={{ display: 'flex', marginBottom: 20, alignItems: 'center', width: '100%', flexDirection: 'column' }}>
						<h2 style={{ margin: 0, color: '#2d6fea' }}>Are You Prepared?</h2>
						<Rate onChange={this.onStar} />
					</div>

					<div style={{ textAlign: 'center' }}>
						<Button block style={{ borderRadius: 20, width: 200 }} onClick={this.submit} size="large" type="primary">
							Submit
						</Button>
					</div>
				</Card>
			</div>
		)
	}
}

export default withRouter(App)
