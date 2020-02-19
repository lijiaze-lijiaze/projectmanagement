import React from 'react'
import {
  InputNumber,
  Icon,
  message
} from 'antd'
import Lodash from 'lodash'

import './yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class YearPlan extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      yearPlanData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      yearPlanData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">操作</th>
                <th rowSpan="2">编号</th>
                <th rowSpan="2">路口号</th>
                <th rowSpan="2">优先级</th>
                <th rowSpan="2">日计划号</th>
                <th rowSpan="2">月全选</th>
                <th rowSpan="2">日全选</th>
                <th rowSpan="2">周全选</th>
                <th colSpan="12">月份</th>
                <th colSpan="31">月日</th>
                <th colSpan="7">星期</th>
              </tr>
              <tr>
                {new Array(12).fill(0).map((t, index) => (
                  <th key={index}>
                    {index + 1}
                  </th>
                ))}
                {new Array(31).fill(0).map((t, index) => (
                  <th key={index}>
                    {index + 1}
                  </th>
                ))}
                {new Array(7).fill(0).map((t, index) => (
                  <th key={index}>
                    {index === 0 ? 7 : index}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(yearPlanData || []).map((plan, index) => (
                <tr key={plan.no}>
                  <td><input type="checkbox" style={{ "width": 20, "height": 20 }} /> 读写</td>
                  <td>{plan.no}</td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={4}
                      value={plan.intersection}
                      onChange={e => this.handleYearPlanDataChange(index, 'priority', e)}
                    /></td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={10}
                      value={plan.priority}
                      onChange={e => this.handleYearPlanDataChange(index, 'priority', e)}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={128}
                      value={plan.dayplan}
                      onChange={e => this.handleYearPlanDataChange(index, 'dayplan', e)}
                    />
                  </td>
                  <td onClick={() => this.toggleCheckAll(index, 'month')}>
                    {plan.month.every(x => Boolean(x)) && <Icon type="check" />}
                  </td>
                  <td onClick={() => this.toggleCheckAll(index, 'day')}>
                    {plan.day.every(x => Boolean(x)) && <Icon type="check" />}
                  </td>
                  <td onClick={() => this.toggleCheckAll(index, 'week')}>
                    {plan.week.every(x => Boolean(x)) && <Icon type="check" />}
                  </td>
                  {new Array(12).fill(0).map((t, mi) => (
                    <td key={mi} onClick={() => this.toggleCheck(index, 'month', mi)}>
                      {Boolean(plan.month[mi]) && <Icon type="check" />}
                    </td>
                  ))}
                  {new Array(31).fill(0).map((t, di) => (
                    <td key={di} onClick={() => this.toggleCheck(index, 'day', di)}>
                      {Boolean(plan.day[di]) && <Icon type="check" />}
                    </td>
                  ))}
                  {new Array(7).fill(0).map((t, wi) => (
                    <td key={wi} onClick={() => this.toggleCheck(index, 'week', wi)}>
                      {Boolean(plan.week[wi]) && <Icon type="check" />}
                    </td>
                  ))}
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
    this.setState({ yearPlanData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let yearPlanData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   yearPlanData = res.data.plans
    // } catch (err) {
    //   yearPlanData = []
    //   message.error('获取数据失败, ' + err)
    // }
    yearPlanData = [{
      "no": 1,
      "intersection": 1,
      "priority": 0,
      "week": 127,
      "month": 8190,
      "day": 2147483647,
      "dayplan": 1
    }, {
      "no": 2,
      "intersection": 1,
      "priority": 0,
      "week": 127,
      "month": 8190,
      "day": 2147483647,
      "dayplan": 1
    }, {
      "no": 3,
      "intersection": 1,
      "priority": 0,
      "week": 127,
      "month": 8190,
      "day": 2147483647,
      "dayplan": 1
    }]
    this.convertCheckedData(yearPlanData)
  }

  convertCheckedData = (yearPlanData) => {
    yearPlanData.forEach(plan => {
      const monthArr = Number(plan.month).toString(2).split('')
      while (monthArr.length < 12) {
        monthArr.unshift(0)
      }
      monthArr.map(x => Number(x))
      plan.month = monthArr

      const dayArr = Number(plan.day).toString(2).split('')
      while (dayArr.length < 31) {
        dayArr.unshift(0)
      }
      dayArr.map(x => Number(x))
      plan.day = dayArr

      const weekArr = Number(plan.week).toString(2).split('')
      while (weekArr.length < 7) {
        weekArr.unshift(0)
      }
      weekArr.map(x => Number(x))
      plan.week = weekArr
    })

    this.setState({ yearPlanData })
  }

  handleYearPlanDataChange = (index, field, e) => {
    const { yearPlanData } = this.state
    yearPlanData[index][field] = e
    this.setState({ yearPlanData })
  }

  toggleCheckAll = (index, field) => {
    const { yearPlanData } = this.state

    if (yearPlanData[index][field].every(x => x === 1)) {
      yearPlanData[index][field].fill(0)
    } else {
      yearPlanData[index][field].fill(1)
    }

    this.setState({ yearPlanData })
  }

  toggleCheck = (index, field, fi) => {
    const { yearPlanData } = this.state

    yearPlanData[index][field][fi] = Number(!yearPlanData[index][field][fi])

    this.setState({ yearPlanData })
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
    let { yearPlanData } = this.state

    yearPlanData = Lodash.cloneDeep(yearPlanData)

    yearPlanData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return yearPlanData
  }
}

export default YearPlan
