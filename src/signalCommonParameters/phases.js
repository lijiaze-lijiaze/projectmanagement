// 相位
import React from 'react'
import {
  InputNumber,
  Input
} from 'antd'
import Lodash from 'lodash'

import './phases.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'


class Phases extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      PhasesData: []
    }

    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }

  render() {
    const {
      PhasesData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th rowSpan="2">相位</th>
                <th rowSpan="2">相位名</th>
                <th colSpan="6">失去路权</th>
                <th colSpan="6">获取路权</th>
                <th rowSpan="2">最小绿</th>
                <th rowSpan="2">最大绿1</th>
                <th rowSpan="2">最大绿2</th>
                <th rowSpan="2">延长</th>
                <th colSpan="6">开机状态</th>
                <th colSpan="6">关机状态</th>
              </tr>
              <tr>
                <th>S1</th>
                <th>T1</th>
                <th>S2</th>
                <th>T2</th>
                <th>S3</th>
                <th>T3</th>
                <th>S1</th>
                <th>T1</th>
                <th>S2</th>
                <th>T2</th>
                <th>S3</th>
                <th>T3</th>
                <th>S1</th>
                <th>T1</th>
                <th>S2</th>
                <th>T2</th>
                <th>S3</th>
                <th>T3</th>
                <th>S1</th>
                <th>T1</th>
                <th>S2</th>
                <th>T2</th>
                <th>S3</th>
                <th>T3</th>
              </tr>
            </thead>
            <tbody>
              {
                // (PhasesData || []).map((t, di) => ( 
                new Array(32).fill(0).map((t, di) => (
                  PhasesData[di] ?
                    <tr key={di}>
                      <td>{PhasesData[di].no}</td>
                      <td>
                        <Input
                          size="small"
                          value={PhasesData[di].name}
                          onChange={this.handlePhasesDataChangeInput.bind(this, di, 'name')}
                        />
                      </td>
                      {
                        Object.keys(PhasesData[di]).map((key, index) => (
                          key === "no" || key === "name" || key === "setred" || key === "setoff" || key === "cdtype" || key === "cdaddress" ||
                          <td key={index}>
                            <InputNumber
                              size="small"
                              min={0}
                              max={32}
                              value={PhasesData[di][key]}
                              onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, key)}
                            /></td>
                        ))
                      }
                    </tr> :
                    <tr key={di}>
                      <td>{di}</td>
                      <td>
                        <Input
                          size="small"
                        // onChange={this.handlePhasesDataChangeInput.bind(this, di, 'name')}
                        />
                      </td>
                      {
                        new Array(28).fill(0).map((t, index) => (
                          <td key={index}>
                            <InputNumber
                              size="small"
                              min={0}
                              max={32}
                            // onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, key)}
                            /></td>
                        ))
                      }

                    </tr>
                ))
              }
              {/*<td>
                  // notrowcolor1 对应汉字红绿灯，转换 
                    <Input
                      size="small"
                      value={t.notrowcolor1}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'notrowcolor1')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.norrowtime1}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'norrowtime1')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.notrowcolor2}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'notrowcolor2')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.norrowtime2}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'norrowtime2')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.notrowcolor3}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'notrowcolor3')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.norrowtime3}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'norrowtime3')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.rowcolor1}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'rowcolor1')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.rowtime1}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'rowtime1')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.rowcolor2}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'rowcolor2')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.rowtime2}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'rowtime2')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.rowcolor3}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'rowcolor3')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.rowtime3}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'rowtime3')}
                    /></td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.min}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'min')}
                    /></td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.max1}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'max1')}
                    /></td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.max2}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'max2')}
                    /></td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.extention}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'extention')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startrowcolor1}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startrowcolor1')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startrowtime1}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startrowtime1')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startrowcolor2}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startrowcolor2')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startrowtime2}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startrowtime2')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startrowcolor3}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startrowcolor3')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startrowtime3}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startrowtime3')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startnotrowcolor1}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startnotrowcolor1')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startnotrowtime1}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startnotrowtime1')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startnotrowcolor2}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startnotrowcolor2')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startnotrowtime2}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startnotrowtime2')}
                    /></td>
                  <td>
                    <Input
                      size="small"
                      value={t.startnotrowcolor3}
                      onChange={this.handlePhasesDataChangeInput.bind(this, index, 'startnotrowcolor3')}
                    />
                  </td>
                  <td>
                    <InputNumber
                      size="small"
                      min={0}
                      max={512}
                      value={t.startnotrowtime3}
                      onChange={this.handlePhasesDataChangeInputNumber.bind(this, index, 'startnotrowtime3')}
                    /></td> */}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  setCurrentJunction = junctionItem => {
    this.junctionItem = junctionItem
    this.setState({ PhasesData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let PhasesData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   PhasesData = res.data.plans
    // } catch (err) {
    //   PhasesData = []
    //   message.error('获取数据失败, ' + err)
    // }
    PhasesData = [{
      "no": 1,
      "name": "",
      "notrowcolor1": 33,
      "norrowtime1": 0,
      "notrowcolor2": 48,
      "norrowtime2": 4,
      "notrowcolor3": 16,
      "norrowtime3": 0,
      "rowcolor1": 16,
      "rowtime1": 6,
      "rowcolor2": 0,
      "rowtime2": 0,
      "rowcolor3": 0,
      "rowtime3": 0,
      "startrowcolor1": 16,
      "startrowtime1": 5,
      "startrowcolor2": 0,
      "startrowtime2": 0,
      "startrowcolor3": 0,
      "startrowtime3": 0,
      "startnotrowcolor1": 0,
      "startnotrowtime1": 0,
      "startnotrowcolor2": 0,
      "startnotrowtime2": 0,
      "startnotrowcolor3": 0,
      "startnotrowtime3": 0,
      "min": 0,
      "max1": 0,
      "max2": 0,
      "extention": 4,
      "setred": 0,
      "setoff": 0,
      "cdtype": 0,
      "cdaddress": 0
    }, {
      "no": 1,
      "name": "",
      "notrowcolor1": 33,
      "norrowtime1": 0,
      "notrowcolor2": 48,
      "norrowtime2": 4,
      "notrowcolor3": 16,
      "norrowtime3": 0,
      "rowcolor1": 16,
      "rowtime1": 6,
      "rowcolor2": 0,
      "rowtime2": 0,
      "rowcolor3": 0,
      "rowtime3": 0,
      "startrowcolor1": 16,
      "startrowtime1": 5,
      "startrowcolor2": 0,
      "startrowtime2": 0,
      "startrowcolor3": 0,
      "startrowtime3": 0,
      "startnotrowcolor1": 0,
      "startnotrowtime1": 0,
      "startnotrowcolor2": 0,
      "startnotrowtime2": 0,
      "startnotrowcolor3": 0,
      "startnotrowtime3": 0,
      "min": 0,
      "max1": 0,
      "max2": 0,
      "extention": 4,
      "setred": 0,
      "setoff": 0,
      "cdtype": 0,
      "cdaddress": 0
    }]
    this.convertCheckedData(PhasesData)
  }

  convertCheckedData = (PhasesData) => {
    // PhasesData.forEach(stages => {
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

    this.setState({ PhasesData })
  }
  handlePhasesDataChangeInput = (index, field, e) => {
    console.log(e.target.value);
    const { PhasesData } = this.state
    PhasesData[index][field] = e.target.value
    this.setState({ PhasesData })
  }
  handlePhasesDataChangeInputNumber = (index, field, e) => {
    const { PhasesData } = this.state
    PhasesData[index][field] = e
    this.setState({ PhasesData })
  }

  // toggleCheckAll = (index, field) => {
  //   const { PhasesData } = this.state

  //   if (PhasesData[index][field].every(x => x === 1)) {
  //     PhasesData[index][field].fill(0)
  //   } else {
  //     PhasesData[index][field].fill(1)
  //   }

  //   this.setState({ PhasesData })
  // }

  // toggleCheck = (di, field, index) => {
  //   const { PhasesData } = this.state
  //   if (!PhasesData[di]) return
  //   PhasesData[di][field][index] = Number(!PhasesData[di][field][index])
  //   this.setState({ PhasesData })
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
    let { PhasesData } = this.state

    PhasesData = Lodash.cloneDeep(PhasesData)

    PhasesData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return PhasesData
  }
}

export default Phases
