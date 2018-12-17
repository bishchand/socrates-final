import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, List, Rate, Button } from 'antd'
import img from './pic.jpg'
const initList = ['Amy', 'Louis.Bishka', 'Kristine', 'Emma', 'Lucas', 'Martin', 'Lucy', 'Michael', 'Josh']
const getRandom = Max => {
	var Min = 0
	var Range = Max - Min
	var Rand = Math.random()
	var num = Min + Math.round(Rand * Range)
	return num
}
class App extends React.Component {
	state = {
		noRpList: initList,
		rpList: initList,
		rpName: '',
		noRpName: '',
		rpMap: {}
	}
	hanleRpClick = () => {
		const { rpList, rpMap } = this.state
		const index = getRandom(rpList.length - 1)
		const name = rpList[index]
		if (!name) {
			return
		}
		const times = rpMap[name]
		this.setState({
			rpName: name
		})
		if (times) {
			rpMap[name] = times + 1
			alert(name + ' has been called ' + (times + 1) + ' times!')
		} else {
			rpMap[name] = 1
		}
		this.setState({
			rpMap
		})
	}
	handleNoRpClick = () => {
		const { noRpList } = this.state
		if (noRpList.length === 0) {
			alert('All student have been called once before!')
		}
		const index = getRandom(noRpList.length - 1)
		const name = noRpList[index]
		noRpList.splice(index, 1)
		this.setState({
			noRpName: name,
			noRpList
		})
	}
	hadnleReset = () => {
		this.setState({
			noRpList: initList,
			rpList: initList,
			rpName: '',
			noRpName: '',
			rpMap: {}
		})
	}
	render() {
		const { rpName, noRpName } = this.state
		const btnStyle = {
			width: '100%',
			marginTop: 15,
			height: 60,
			cursor: 'pointer',
			background: '#1890ff',
			color: 'white',
			fontSize: 18
		}
		return (
			<div>
				<Card bordered={false} style={{ width: '100%' }}>
					<div style={{ paddingTop: 150 }}>
						<Link to="/output">
							<Button style={btnStyle} onClick={this.hanleRpClick}>
                                Call a Student
							</Button>
						</Link>
						{/* <br />
						<br />
						<Link to="/output">
							<Button style={{ ...btnStyle, background: '#e6a23c' }} onClick={this.handleNoRpClick}>
								Previously Uncalled Student
							</Button>
						</Link>
						<br />
						<br />
						<Button style={{ ...btnStyle, background: '#f56c6c' }} onClick={this.hadnleReset}>
							Reset
						</Button> */}
					</div>
				</Card>
			</div>
		)

		// <div style={{  display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
		//     <div style={{display: 'flex'}}>
		//         {/* <img src={img} alt="" width="300" height="300" /> */}
		//         <div style={{ marginLeft: 30, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
		//             {/* <Output rpName={rpName} noRpName={noRpName}></Output> */}
		//             <div>
		//                 <Button style={btnStyle} onClick={this.hanleRpClick}>Any Student</Button> <br />
		//                 <Button style={{ ...btnStyle, background: '#e6a23c'}} onClick={this.handleNoRpClick}> Previously Uncalled Student</Button> <br />
		//                 <Button style={{ ...btnStyle, background: '#f56c6c'}} onClick={this.hadnleReset}> Reset</Button>
		//             </div>
		//         </div>
		//     </div>
		// </div>
	}
}

export default App
