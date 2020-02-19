import React from 'react';

import './App.css';

import { Select, Tabs,Row, Col,Table,InputNumber, message } from 'antd';
const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
class DayPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dayPlanData: [
        {
          no:1,
          intersection:1,
          hour:[0,6,9,11,13,16,19,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          minute:[0,0,0,30,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          splitno:[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          mode:[35,35,35,35,35,35,35,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action3:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action4:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action5:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action6:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action7:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
          action8:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
         
          },
          {
            no:2,
            intersection:2,
            hour:[0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            minute:[0,0,0,30,30,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            splitno:[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            mode:[35,35,35,35,35,35,35,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action1:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action2:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action3:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action4:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action5:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action6:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action7:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            action8:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            }
      ],
      currentDayPlan: {}
    }
    this.actionNumArr = new Array(8).fill(0)
  }
  componentDidMount() {

  }
  render() {
    const {
      dayPlanData,
      currentDayPlan
    } = this.state
    return (
      <div>
    
          <Col span={6}>
            <Table
              dataSource={dayPlanData}
              bordered={true}
              rowKey="no"
              size="middle"
              pagination={false}
              scroll={{ y: '60vh' }}
              onRow={record => ({
                onClick: () => {
                  this.setCurrentDayPlan(record)
                }
              })}
              rowClassName={record => (
                record.no === currentDayPlan.no ? 'active' : ''
              )}
            >
              <Column
                title="操作"
                
                width="85px"
              />
              <Column
                title="日计划号"
                dataIndex="no"
                width="85px"
              />
              <Column
                title="路口号"
                dataIndex="intersection"
              />
            </Table>
          </Col>
          <Col span={18}>
            <div className="day-plan-info-table-box">
              <table className="day-plan-info-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>小时</th>
                    <th>分钟</th>
                    <th>方案号</th>
                    <th>模式</th>
                    {this.actionNumArr.map((t, index) => (
                      <th key={index}>
                        动作{index + 1}参数
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(currentDayPlan.hour || []).map((hour, index) => (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={23}
                          value={hour}
                          onChange={e => this.handleDayPlanDataChange(index, 'hour', e)}
                        />
                      </td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={59}
                          value={currentDayPlan.minute[index]}
                          onChange={e => this.handleDayPlanDataChange(index, 'minute', e)}
                        />
                      </td>
                      <td>
                        <InputNumber
                          size="small"
                          min={0}
                          max={128}
                          value={currentDayPlan.splitno[index]}
                          onChange={e => this.handleDayPlanDataChange(index, 'splitno', e)}
                        />
                      </td>
                      <td>
                        <Select
                          size="small"
                          style={{ width: 90 }}
                          value={currentDayPlan.mode[index]}
                          onChange={e => {this.handleDayPlanDataChange(index, 'mode', e)}}
                        >
                         {/*  {Object.keys(Constant.dictionary.junctionMode).map(k => (
                            <Option
                              value={Number(k)}
                              key={k}
                            >
                              {Constant.dictionary.junctionMode[k]}
                            </Option>
                          ))} */}
                        </Select>
                      </td>
                      {this.actionNumArr.map((t, ai) => (
                        <td key={ai}>
                          <InputNumber
                            size="small"
                            min={0}
                            max={255}
                            value={currentDayPlan[`action${ai + 1}`][index]}
                            onChange={e => this.handleDayPlanDataChange(index, `action${ai + 1}`, e)}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        

      </div>
    )
  }
  setCurrentDayPlan = item => {
    this.setState({
      currentDayPlan: item
    })
  }
  handleDayPlanDataChange = (index, field, e) => {
    const { currentDayPlan } = this.state
    currentDayPlan[field][index] = e
    console.log('currentDayPlan',currentDayPlan)
    this.setState({ currentDayPlan })
  }
}

export default DayPlans;