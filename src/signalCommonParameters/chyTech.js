// 相位灯组
import React from 'react'
import {
  InputNumber
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class ChyTech extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ChyTechData: []
    }
    this.count = 0
    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      ChyTechData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th>灯组编号</th>
                <th>灯组类型</th>
                <th>灯组屏蔽</th>
                <th>灯组禁用</th>
              </tr>
            </thead>
            <tbody>
              {
                new Array(64).fill(0).map((t, di) => (
                  ChyTechData[di] ?
                    <tr key={di}>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={64}
                          value={ChyTechData[di].no}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'no')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={1}
                          max={2}
                          value={ChyTechData[di].type}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'type')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={ChyTechData[di].setred}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'setred')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={ChyTechData[di].setoff}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'setoff')}
                        /></td>
                    </tr> :
                    <tr key={di}>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={64}
                          value={0}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'no')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={1}
                          max={8}
                          value={0}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'type')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={0}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'setred')}
                        /></td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={0}
                          onChange={this.handleChyTechDataChange.bind(this, di, 'setoff')}
                        /></td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  setCurrentJunction = junctionItem => {
    this.junctionItem = junctionItem
    this.setState({ ChyTechData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let ChyTechData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   ChyTechData = res.data.plans
    // } catch (err) {
    //   ChyTechData = []
    //   message.error('获取数据失败, ' + err)
    // }
    ChyTechData = [{
      "no": 0,
      "type": 1,
      "setred": 1,
      "setoff": 1
    }, {
      "no": 1,
      "type": 0,
      "setred": 1,
      "setoff": 1
    }, {
      "no": 2,
      "type": 1,
      "setred": 0,
      "setoff": 1
    }]
    this.convertCheckedData(ChyTechData)
  }

  convertCheckedData = (ChyTechData) => {
    // ChyTechData.forEach(stages => {
    //   const monthArr = Number(stages.month).toString(2).split('')
    //   while (monthArr.length < 12) {
    //     monthArr.unshift(0)
    //   }
    //   monthArr.map(x => Number(x))
    //   stages.month = monthArr

    //   const dayArr = Number(stages.day).toString(2).split('')
    //   while (dayArr.length < 31) {
    //     dayArr.unshift(0)
    //   }
    //   dayArr.map(x => Number(x))
    //   stages.day = dayArr

    //   const weekArr = Number(stages.week).toString(2).split('')
    //   while (weekArr.length < 7) {
    //     weekArr.unshift(0)
    //   }
    //   weekArr.map(x => Number(x))
    //   stages.week = weekArr
    // })

    this.setState({ ChyTechData })
  }

  handleChyTechDataChange = (index, field, e) => {
    const { ChyTechData } = this.state
    ChyTechData[index][field] = e
    this.setState({ ChyTechData })
  }

  // toggleCheckAll = (index, field) => {
  //   const { ChyTechData } = this.state

  //   if (ChyTechData[index][field].every(x => x === 1)) {
  //     ChyTechData[index][field].fill(0)
  //   } else {
  //     ChyTechData[index][field].fill(1)
  //   }

  //   this.setState({ ChyTechData })
  // }

  toggleCheck = (di, field, index) => {
    const { ChyTechData } = this.state

    if (!ChyTechData[di]) return

    ChyTechData[di][field][index] = Number(!ChyTechData[di][field][index])

    this.setState({ ChyTechData })
  }

  submitData = async () => {
    const data = this.beforeSubmit()
    console.log('Submit>>>>>', data)
    // const controller_id = this.junctionItem.controller_id
    // const user_id = this.userInfo.irn
    // try {
    //   await Axios.post(
    //     Constant.api.setCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules'),
    //     {
    //       parameters: data,
    //       message: {
    //         user_id,
    //         cmd: 'setcfg',
    //         parameter: {
    //           controller_id
    //         }
    //       }
    //     }
    //   )
    // } catch (err) {
    //   message.error('提交参数失败, ' + err)
    // }
  }

  beforeSubmit = () => {
    let { ChyTechData } = this.state

    ChyTechData = Lodash.cloneDeep(ChyTechData)

    ChyTechData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return ChyTechData
  }
}

export default ChyTech
