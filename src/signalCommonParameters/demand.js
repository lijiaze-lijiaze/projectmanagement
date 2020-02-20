// 需求
import React from 'react'
import {
  Icon,
  Button
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Demand extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      DemandData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      DemandData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">检测<br />相位</th>
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
                    {/* 这个数据可能是（x,y）形式，待调整 */}
                    {new Array(32).fill(0).map((t, index) => (
                      DemandData[di] ?
                        <td key={index} onClick={() => this.toggleCheck(di, 'demands', index)}>
                          {Boolean(DemandData[di].demands[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(index, 'demands', di)}>
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
    this.setState({ DemandData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let DemandData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   DemandData = res.data.plans
    // } catch (err) {
    //   DemandData = []
    //   message.error('获取数据失败, ' + err)
    // }
    DemandData = [
      {
        "no": 0,
        "demands": [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]
      },{
        "no": 0,
        "demands": [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]
      }
    ]
    this.convertCheckedData(DemandData)
  }

  convertCheckedData = (DemandData) => {
    // DemandData.forEach(stages => {
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

    this.setState({ DemandData })
  }

  // handleEarlyOutTimeDataChange = (index, field, e) => {
  //   const { DemandData } = this.state
  //   DemandData[index][field] = e
  //   this.setState({ DemandData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { DemandData } = this.state

  //   if (DemandData[index][field].every(x => x === 1)) {
  //     DemandData[index][field].fill(0)
  //   } else {
  //     DemandData[index][field].fill(1)
  //   }

  //   this.setState({ DemandData })
  // }

  toggleCheck = (di, field, index) => {
    const { DemandData } = this.state

    if (!DemandData[di]) return

    DemandData[di][field][index] = Number(!DemandData[di][field][index])

    this.setState({ DemandData })
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
    let { DemandData } = this.state

    DemandData = Lodash.cloneDeep(DemandData)

    DemandData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return DemandData
  }
}

export default Demand
