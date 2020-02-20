// 相位灯组
import React from 'react'
import {
  Icon,
  Button
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class PhaseChyTech extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      PhaseChyTechData: []
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
      PhaseChyTechData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">灯组<br />相位</th>
                {new Array(32).fill(0).map((t, index) => (
                  <th key={index}>{index + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                new Array(32).fill(0).map((t, di) => (
                  <tr key={di}>
                    <td>{di + 1}</td>
                        
                    {new Array(32).fill(0).map((t, index) => (
                      // 存在可能会跳过灯组的情况
                      // PhaseChyTechData[di]&& PhaseChyTechData[di].no === di?
                      PhaseChyTechData[di]?
                        <td key={index} onClick={() => this.toggleCheck(di, 'phase', index)}>
                          {Boolean(PhaseChyTechData[di].phase[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(index, 'phase', di)}>
                          {Boolean(false) && <Icon type="check" />}
                        </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  setCurrentJunction = junctionItem => {
    this.junctionItem = junctionItem
    this.setState({ PhaseChyTechData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let PhaseChyTechData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   PhaseChyTechData = res.data.plans
    // } catch (err) {
    //   PhaseChyTechData = []
    //   message.error('获取数据失败, ' + err)
    // }
    PhaseChyTechData = [{
      "no": 0,
      "phase": [1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0]

    },{
      "no": 1,
      "phase":[0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0]
    },{
      "no": 2,
      "phase": [0, 1, 1, 0,0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]
    }]
    this.convertCheckedData(PhaseChyTechData)
  }

  convertCheckedData = (PhaseChyTechData) => {
    // PhaseChyTechData.forEach(stages => {
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

    this.setState({ PhaseChyTechData })
  }

  // handleEarlyOutTimeDataChange = (index, field, e) => {
  //   const { PhaseChyTechData } = this.state
  //   PhaseChyTechData[index][field] = e
  //   this.setState({ PhaseChyTechData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { PhaseChyTechData } = this.state

  //   if (PhaseChyTechData[index][field].every(x => x === 1)) {
  //     PhaseChyTechData[index][field].fill(0)
  //   } else {
  //     PhaseChyTechData[index][field].fill(1)
  //   }

  //   this.setState({ PhaseChyTechData })
  // }

  toggleCheck = (di, field, index) => {
    const { PhaseChyTechData } = this.state

    if (!PhaseChyTechData[di]) return

    PhaseChyTechData[di][field][index] = Number(!PhaseChyTechData[di][field][index])

    this.setState({ PhaseChyTechData })
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
    let { PhaseChyTechData } = this.state

    PhaseChyTechData = Lodash.cloneDeep(PhaseChyTechData)

    PhaseChyTechData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return PhaseChyTechData
  }
}

export default PhaseChyTech
