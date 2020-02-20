// 冲突
import React from 'react'
import {
  Icon,
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Saftys extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      SaftysData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      SaftysData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位/相位</th>
                {
                  new Array(32).fill(0).map((t, index) => (
                    <th key={index}>{index + 1}
                    </th>
                  ))
                }
              </tr>
              <tr>
                {
                  new Array(32).fill(0).map((t, index) => (
                    <th key={index}>
                      向东
                    </th>
                  ))
                }
              </tr>
            </thead>
            <tbody>
              {
                new Array(32).fill(0).map((t, di) => (
                  <tr key={di}>
                    <td>{di + 1}向北</td>
                    {new Array(32).fill(0).map((t, index) => (
                      SaftysData[di] ?
                        <td key={index} onClick={() => this.toggleCheck(di, 'conflict', index)}>
                          {Boolean(SaftysData[di].conflict[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(di, 'conflict', index)}>
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
    this.setState({ SaftysData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let SaftysData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   SaftysData = res.data.plans
    // } catch (err) {
    //   SaftysData = []
    //   message.error('获取数据失败, ' + err)
    // }
    SaftysData = [
      {
        "no": 0,
        "conflict": [0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]

    this.convertCheckedData(SaftysData)
  }

  convertCheckedData = (SaftysData) => {
    // SaftysData.forEach(stages => {
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

    this.setState({ SaftysData })
  }

  // handleDelayStartsDataChange = (index, field, e) => {
  //   const { SaftysData } = this.state
  //   SaftysData[index][field] = e
  //   this.setState({ SaftysData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { SaftysData } = this.state

  //   if (SaftysData[index][field].every(x => x === 1)) {
  //     SaftysData[index][field].fill(0)
  //   } else {
  //     SaftysData[index][field].fill(1)
  //   }

  //   this.setState({ SaftysData })
  // }

  toggleCheck = (di, field, index) => {
    const { SaftysData } = this.state

    if (!SaftysData[di]) return
    SaftysData[di][field][index] = Number(!SaftysData[di][field][index])

    this.setState({ SaftysData })
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
    let { SaftysData } = this.state

    SaftysData = Lodash.cloneDeep(SaftysData)

    SaftysData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return SaftysData
  }
}

export default Saftys
