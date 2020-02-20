// 相位灯组
import React from 'react'
import {
  InputNumber,
  Button,
  Modal
} from 'antd'
import Lodash from 'lodash'

import '../yearPlan.less'
// import Axios from '@common/Axios'
// import Constant from '@common/Constant'

class Exigence extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ExigenceData: [],
      visible: false
    }
    this.count = 0
    this.junctionItem = {}
    this.userInfo = JSON.parse(sessionStorage.getItem('t1_user'))
  }

  componentDidMount() {
    this.getCtlConfData()
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    const {
      ExigenceData
    } = this.state

    return (
      <div className="year-plan-root">
        <div className="year-plan-info-table-box">
          <table className="year-plan-info-table">
            <thead>
              <tr>
                <th>编号</th>
                <th>优先阶段</th>
                <th>优先级</th>
                <th>屏蔽</th>
                <th>请求输入</th>
              </tr>
            </thead>
            <tbody>
              {
                new Array(32).fill(0).map((t, di) => (
                  ExigenceData[di] ?
                    <tr key={di}>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={32}
                          value={ExigenceData[di].no}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'no')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={16}
                          value={ExigenceData[di].stage}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'stage')}
                        />
                        <Button type="primary" onClick={this.showModal}>
                          选择
                          </Button>
                        <Modal
                          title="Basic Modal"
                          visible={this.state.visible}
                          onOk={this.handleOk}
                          onCancel={this.handleCancel}
                          width="1000px"
                        >
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                          <p>Some contents...</p>
                        </Modal>
                      </td>
                      <td >
                        <InputNumber
                          size="small"
                          min={1}
                          max={3}
                          value={ExigenceData[di].level}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'level')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={ExigenceData[di].mask}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'mask')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={0}
                        // onChange={this.handleExigenceDataChange.bind(this, di, 'mask')}
                        /></td>

                    </tr> :
                    <tr key={di}>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={32}
                          value={di + 1}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'no')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={16}
                          value={0}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'stage')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={1}
                          max={3}
                          value={0}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'level')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={0}
                          onChange={this.handleExigenceDataChange.bind(this, di, 'mask')}
                        /></td>
                      <td >
                        <InputNumber
                          size="small"
                          min={0}
                          max={1}
                          value={0}
                        // onChange={this.handleExigenceDataChange.bind(this, di, 'mask')}
                        /></td>
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
    this.setState({ ExigenceData: [] })
  }

  getCtlConfData = async () => {
    // const controller_id = this.junctionItem.controller_id

    let ExigenceData = []
    // try {
    //   const res = await Axios.get(
    //     Constant.api.getCtlConf
    //       .replace('$id', controller_id)
    //       .replace('$key', 'schedules')
    //   )
    //   ExigenceData = res.data.plans
    // } catch (err) {
    //   ExigenceData = []
    //   message.error('获取数据失败, ' + err)
    // }
    ExigenceData = [{
      "no": 1,
      "stage": 1,
      "level": 2,
      "mask": 0
    }]
    this.convertCheckedData(ExigenceData)
  }

  convertCheckedData = (ExigenceData) => {
    // ExigenceData.forEach(stages => {
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

    this.setState({ ExigenceData })
  }

  handleExigenceDataChange = (index, field, e) => {
    const { ExigenceData } = this.state
    ExigenceData[index][field] = e
    this.setState({ ExigenceData })
  }

  // toggleCheckAll = (index, field) => {
  //   const { ExigenceData } = this.state

  //   if (ExigenceData[index][field].every(x => x === 1)) {
  //     ExigenceData[index][field].fill(0)
  //   } else {
  //     ExigenceData[index][field].fill(1)
  //   }

  //   this.setState({ ExigenceData })
  // }

  toggleCheck = (di, field, index) => {
    const { ExigenceData } = this.state

    if (!ExigenceData[di]) return

    ExigenceData[di][field][index] = Number(!ExigenceData[di][field][index])

    this.setState({ ExigenceData })
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
    let { ExigenceData } = this.state

    ExigenceData = Lodash.cloneDeep(ExigenceData)

    ExigenceData.forEach(plan => {
      plan.month = parseInt(plan.month.join(''), 2)
      plan.day = parseInt(plan.day.join(''), 2)
      plan.week = parseInt(plan.week.join(''), 2)
    })

    return ExigenceData
  }
}

export default Exigence
