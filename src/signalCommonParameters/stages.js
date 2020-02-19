import React from 'react'
import {
  Icon,
  Button
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Stages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      StagesData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      StagesData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位</th>
                {new Array(32).fill(0).map((t, index) => (
                  <th key={index+t}>{index + 1}
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
                      StagesData[di] ?
                        <td key={index} onClick={() => this.toggleCheck(di, 'phaseinstage', index)}>
                          {Boolean(StagesData[di].phaseinstage[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(di, 'phaseinstage', index)}>
                          {Boolean(false) && <Icon type="check" />}
                        </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Button style={{ "marginTop": 10, "alignItems": "center" }}>图形化修改</Button>
        </div>
      </div>
    )
  }

  setCurrentJunction = junctionItem => {
    this.junctionItem = junctionItem
    this.setState({ StagesData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let StagesData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   StagesData = res.data.plans
    // } catch (err) {
    //   StagesData = []
    //   message.error('获取数据失败, ' + err)
    // }
    StagesData = [
      {
        "no": 1,
        "name": "",
        "phaseinstage": [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
        "softdemand": 0,
        "setred": 0,
        "setoff": 0
      }, {
        "no": 2,
        "name": "",
        "phaseinstage": [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
        "softdemand": 0,
        "setred": 0,
        "setoff": 0
      }, {
        "no": 3,
        "name": "",
        "phaseinstage": [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
        "softdemand": 0,
        "setred": 0,
        "setoff": 0
      }
    ]
    this.convertCheckedData(StagesData)
  }

  convertCheckedData = (StagesData) => {
    // StagesData.forEach(stages => {
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

    this.setState({ StagesData })
  }

  // handlephasesDataChange = (index, field, e) => {
  //   const { StagesData } = this.state
  //   StagesData[index][field] = e
  //   this.setState({ StagesData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { StagesData } = this.state

  //   if (StagesData[index][field].every(x => x === 1)) {
  //     StagesData[index][field].fill(0)
  //   } else {
  //     StagesData[index][field].fill(1)
  //   }

  //   this.setState({ StagesData })
  // }

  toggleCheck = (di, field, index) => {
    const { StagesData } = this.state
    if(!StagesData[di]) return 
    StagesData[di][field][index] = Number( !StagesData[di][field][index])
    this.setState({ StagesData })
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
    let { StagesData } = this.state

    StagesData = Lodash.cloneDeep(StagesData)

    StagesData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return StagesData
  }
}

export default Stages
