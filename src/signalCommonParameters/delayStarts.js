// 晚放
import React from 'react'
import {
  InputNumber
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class DelayStarts extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      DelayStartsData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      DelayStartsData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位</th>
                {new Array(32).fill(0).map((t, index) => (
                  <th key={index}>{index + 1}
                  </th>
                ))}
              </tr>
              <tr>
                <th>北向南直行</th>
                <th>东向西直行</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
                <th>向南</th>
                <th>向北</th>
                <th>向东</th>
                <th>向西</th>
              </tr>
            </thead>
            <tbody>
              {
                new Array(32).fill(0).map((t, di) => (
                  <tr key={di}>
                    <td>{di + 1}</td>
                    {new Array(32).fill(0).map((t, index) => (
                      DelayStartsData[di] ?
                        <td key={index}>
                          <InputNumber
                            size="small"
                            min={0}
                            max={32}
                            value={DelayStartsData[di].delaystarttime[index]}
                            onChange={this.handleDelayStartsDataChange.bind(this, di, index, 'delaystarttime')}
                          /></td> :
                        <td key={index}>
                          <InputNumber
                            size="small"
                            min={0}
                            max={32}
                            // value={DelayStartsData[di].delaystarttime[index] || 0}
                            value={0  }
                            // onChange={this.handleDelayStartsDataChange.bind(this, di, index, 'delaystarttime')}
                          /></td>
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
    this.setState({ DelayStartsData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let DelayStartsData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   DelayStartsData = res.data.plans
    // } catch (err) {
    //   DelayStartsData = []
    //   message.error('获取数据失败, ' + err)
    // }
    DelayStartsData = [
      {
        "no": 1,
        "delaystarttime": [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
      }, {
        "no": 2,
        "delaystarttime": [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0]
      }, {
        "no": 3,
        "delaystarttime": [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]
      }
    ]
    this.convertCheckedData(DelayStartsData)
  }

  convertCheckedData = (DelayStartsData) => {
    // DelayStartsData.forEach(stages => {
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

    this.setState({ DelayStartsData })
  }

  handleDelayStartsDataChange = (di, index, field, e) => {
    const { DelayStartsData } = this.state
    DelayStartsData[di][field][index] = e
    this.setState({ DelayStartsData })
  }

  // toggleCheckAll = (index, field) => {
  //   const { DelayStartsData } = this.state

  //   if (DelayStartsData[index][field].every(x => x === 1)) {
  //     DelayStartsData[index][field].fill(0)
  //   } else {
  //     DelayStartsData[index][field].fill(1)
  //   }

  //   this.setState({ DelayStartsData })
  // }

  // toggleCheck = (di, field, index) => {
  //   const { DelayStartsData } = this.state

  //   if(!DelayStartsData[di]) return
  //   DelayStartsData[di][field][index] = Number(!DelayStartsData[di][field][index])

  //   this.setState({ DelayStartsData })
  // }

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
    let { DelayStartsData } = this.state

    DelayStartsData = Lodash.cloneDeep(DelayStartsData)

    DelayStartsData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return DelayStartsData
  }
}

export default DelayStarts
