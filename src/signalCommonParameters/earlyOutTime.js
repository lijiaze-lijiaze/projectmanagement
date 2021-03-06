// 早断
import React from 'react'
import {
  Icon,
  InputNumber
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class EarlyOutTime extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      EarlyOutTimeData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      EarlyOutTimeData
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
                    {/* {new Array(32).fill(0).map((t, index) => (
                      EarlyOutTimeData[di] ?
                        <td key={index} onClick={() => this.toggleCheck(di, 'earlycuttime', index)}>
                          {Boolean(EarlyOutTimeData[di].earlycuttime[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(index, 'earlycuttime', di)}>
                          {Boolean(false) && <Icon type="check" />}
                        </td>
                    ))} */}
                     {new Array(32).fill(0).map((t, index) => (
                      EarlyOutTimeData[di] ?
                        <td key={index}>
                          <InputNumber
                            size="small"
                            min={0}
                            max={32}
                            value={EarlyOutTimeData[di].earlycuttime[index]}
                            onChange={this.handleEarlyOutTimeDataChange.bind(this, di, index, 'earlycuttime')}
                          /></td> 
                          :
                        <td key={index}>
                          <InputNumber
                            size="small"
                            min={0}
                            max={32}
                            // value={EarlyOutTimeData[di].earlycuttime[index] || 0}
                            value={0  }
                            // onChange={this.handleEarlyOutTimeDataChange.bind(this, di, index, 'earlycuttime')}
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
    this.setState({ EarlyOutTimeData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let EarlyOutTimeData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   EarlyOutTimeData = res.data.plans
    // } catch (err) {
    //   EarlyOutTimeData = []
    //   message.error('获取数据失败, ' + err)
    // }
    EarlyOutTimeData = [
      {
        "no": 1,
        "earlycuttime": [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
    this.convertCheckedData(EarlyOutTimeData)
  }

  convertCheckedData = (EarlyOutTimeData) => {
    // EarlyOutTimeData.forEach(stages => {
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

    this.setState({ EarlyOutTimeData })
  }

  handleEarlyOutTimeDataChange = (di,index, field, e) => {
    const { EarlyOutTimeData } = this.state
    EarlyOutTimeData[di][field][index] = e
    this.setState({ EarlyOutTimeData })
  }

  // toggleCheckAll = (index, field) => {
  //   const { EarlyOutTimeData } = this.state

  //   if (EarlyOutTimeData[index][field].every(x => x === 1)) {
  //     EarlyOutTimeData[index][field].fill(0)
  //   } else {
  //     EarlyOutTimeData[index][field].fill(1)
  //   }

  //   this.setState({ EarlyOutTimeData })
  // }

  // toggleCheck = (di, field, index) => {
  //   const { EarlyOutTimeData } = this.state

  //   if(!EarlyOutTimeData[di]) return
      
  //   EarlyOutTimeData[di][field][index] = Number(!EarlyOutTimeData[di][field][index])

  //   this.setState({ EarlyOutTimeData })
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
    let { EarlyOutTimeData } = this.state

    EarlyOutTimeData = Lodash.cloneDeep(EarlyOutTimeData)

    EarlyOutTimeData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return EarlyOutTimeData
  }
}

export default EarlyOutTime
