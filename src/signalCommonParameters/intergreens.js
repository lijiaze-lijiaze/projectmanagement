import React from 'react'
import {
  Icon,
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Intergreens extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      IntergreensData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      IntergreensData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位</th>
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
                      IntergreensData[di] ?
                        <td key={index} onClick={() => this.toggleCheck(di, 'intergreen', index)}>
                          {Boolean(IntergreensData[di].intergreen[index]) && <Icon type="check" />}
                        </td> :
                        <td key={index} onClick={() => this.toggleCheck(di, 'intergreen', index)}>
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
    this.setState({ IntergreensData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let IntergreensData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   IntergreensData = res.data.plans
    // } catch (err) {
    //   IntergreensData = []
    //   message.error('获取数据失败, ' + err)
    // }
    IntergreensData = [{
      "no": 0,
      "intergreen": [0, 6, 0, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0, 6, 0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 6]
    }, {
      "no": 1,
      "intergreen": [0, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 5, 0, 0, 0, 0, 0, 6, 0, 0, 6, 0, 0, 0, 0, 0, 0, 6]
    }, {
      "no": 2,
      "intergreen": [6, 0, 0, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 0, 0, 0, 0, 0, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 6]
    }]

    this.convertCheckedData(IntergreensData)
  }

  convertCheckedData = (IntergreensData) => {
    // IntergreensData.forEach(stages => {
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

    this.setState({ IntergreensData })
  }

  // handleDelayStartsDataChange = (index, field, e) => {
  //   const { IntergreensData } = this.state
  //   IntergreensData[index][field] = e
  //   this.setState({ IntergreensData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { IntergreensData } = this.state

  //   if (IntergreensData[index][field].every(x => x === 1)) {
  //     IntergreensData[index][field].fill(0)
  //   } else {
  //     IntergreensData[index][field].fill(1)
  //   }

  //   this.setState({ IntergreensData })
  // }

  toggleCheck = (di, field, index) => {
    const { IntergreensData } = this.state

    if (!IntergreensData[di]) return
    IntergreensData[di][field][index] = Number(!IntergreensData[di][field][index])

    this.setState({ IntergreensData })
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
    let { IntergreensData } = this.state

    IntergreensData = Lodash.cloneDeep(IntergreensData)

    IntergreensData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return IntergreensData
  }
}

export default Intergreens
