import React from 'react'
import {
  Icon,
  Button
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Phases extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      phasesData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      phasesData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                <th>15</th>
                <th>16</th>
                <th>17</th>
                <th>18</th>
                <th>19</th>
                <th>20</th>
                <th>21</th>
                <th>22</th>
                <th>23</th>
                <th>24</th>
                <th>25</th>
                <th>26</th>
                <th>27</th>
                <th>28</th>
                <th>29</th>
                <th>30</th>
                <th>31</th>
                <th>32</th>
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
                      phasesData[di] ?
                        <td key={di} onClick={() => this.toggleCheck(index, 'day', di)}>
                          {Boolean(phasesData[di].phaseinstage[index]) && <Icon type="check" />}
                        </td> :
                        <td key={di} onClick={() => this.toggleCheck(index, 'day', di)}>
                          {Boolean(false) && <Icon type="check" />}
                        </td>
                    ))}
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Button style={{"marginTop":10,"alignItems":"center"}}>图形化修改</Button>
        </div>
      </div>
    )
  }

  setCurrentJunction = junctionItem => {
    this.junctionItem = junctionItem
    this.setState({ phasesData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let phasesData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   phasesData = res.data.plans
    // } catch (err) {
    //   phasesData = []
    //   message.error('获取数据失败, ' + err)
    // }
    phasesData = [
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
    this.convertCheckedData(phasesData)
  }

  convertCheckedData = (phasesData) => {
    // phasesData.forEach(stages => {
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

    this.setState({ phasesData })
  }

  // handlephasesDataChange = (index, field, e) => {
  //   const { phasesData } = this.state
  //   phasesData[index][field] = e
  //   this.setState({ phasesData })
  // }

  // toggleCheckAll = (index, field) => {
  //   const { phasesData } = this.state

  //   if (phasesData[index][field].every(x => x === 1)) {
  //     phasesData[index][field].fill(0)
  //   } else {
  //     phasesData[index][field].fill(1)
  //   }

  //   this.setState({ phasesData })
  // }

  toggleCheck = (index, field, fi) => {
    const { phasesData } = this.state

    phasesData[index][field][fi] = Number(!phasesData[index][field][fi])

    this.setState({ phasesData })
  }

  submitData = async () => {
    const data = this.beforeSubmit()
    console.log('Submit>>>>>', data)
    const controller_id = this.junctionItem.controller_id
    const user_id = this.userInfo.irn
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
    let { phasesData } = this.state

    phasesData = Lodash.cloneDeep(phasesData)

    phasesData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return phasesData
  }
}

export default Phases
