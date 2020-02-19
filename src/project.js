import React from 'react';

import './App.css';

import { Select, Tabs,Row, Col,Table,InputNumber, message ,Button,Checkbox} from 'antd';
const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
class ProjectPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planData: [
        {
          no: 1,
          intersection: 1,
          coord: 3,
          cycle: 149,
          offset: 45,
          stage: [2,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
          len: [65,66,18,0,0,0,0,0,0,0,0,0,0,0,0,0],
          mode: [16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
        ,{
          no: 2,
          intersection: 2,
          coord: 4,
          cycle: 190,
          offset: 40,
          stage: [2,1,3,0,0,0,0,0,0,0,0,0,0,0,0,0],
          len: [65,66,18,0,0,0,0,0,0,0,0,0,0,0,0,0],
          mode: [16,16,16,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
      ],
      selectStageModalVisible: false,
      currentPlan: {}
    }

    this.junctionItem = {}
    this.junctionStages = []
    this.canalizationData = []
    this.stagePhase = []
    this.currentChooseStageIndex = null
    
    this.stageData = []
    this.phaseData = []
  }
  componentDidMount() {

  }
  render() {
    const {
      planData,
      selectStageModalVisible,
      currentPlan
    } = this.state
    return (
      <div>
       <Col span={8}>
            <Table
              dataSource={planData}
              bordered={true}
              rowKey="no"
              size="middle"
              pagination={false}
              scroll={{ y: '60vh' }}
              onRow={record => ({
                onClick: () => {
                  this.setCurrentPlan(record)
                }
              })}
              rowClassName={record => (
                record.no === currentPlan.no ? 'active' : ''
              )}
            >
              <Column
                title="操作"
                
                width="150px"
                render={(text, record, index) => (
                  <div>
                     <Col span={12}><Checkbox>读写</Checkbox></Col>
                     <Col span={12}><Button type="primary" size='small'>编辑</Button></Col>
                     
                  </div>
                 
                )}
              />
              <Column
                title="方案号"
                dataIndex="no"
                width="75px"
              />
              <Column
                title="路口号"
                dataIndex="intersection"
                width="75px"

              />
              {/* <Column
                title="阶段数"
                dataIndex="stagenum"
                width="100px"
                render={(text, record, index) => (
                  <Select
                    style={{ width: "100%" }}
                    value={text}
                    onChange={e => this.handlePlanChange(index, 'stagenum', e)}
                  >
                    {(record.stage || []).map((x, i) => (
                      <Option
                        key={i + 1}
                        value={i + 1}
                      >
                        {i + 1}
                      </Option>
                    ))}
                  </Select>
                )}
              /> */}
              <Column
                title="相位差"
                dataIndex="offset"
                width="110px"
                render={(text, record, index) => (
                  <InputNumber
                    size="small"
                    style={{ width: '100%' }}
                    min={0}
                    value={text}
                    onChange={e => this.handlePlanChange(index, 'offset', e)}
                  />
                )}
              />
              <Column
                title="协调阶"
                dataIndex="coord"
                width="110px"
                render={(text, record, index) => (
                  <InputNumber
                    size="small"
                    style={{ width: '100%' }}
                    min={0}
                    value={text}
                    onChange={e => this.handlePlanChange(index, 'coord', e)}
                  />
                )}
              />
              <Column
                title="周期"
                dataIndex="cycle"
                render={(text, record, index) => (
                  <InputNumber
                    size="small"
                    style={{ width: '100%' }}
                    min={0}
                    value={text}
                    onChange={e => this.handlePlanChange(index, 'cycle', e)}
                  />
                )}
              />
            </Table>
          </Col>
          <Col style={{padding:'10px'}} span={16}>
            <div className="stageItemInPlanBox">
              <Row gutter={16}>
              
                   <table className="project-plan-info-table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>阶段号</th>
                    <th>阶段时长</th>
                    <th>出现类型</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {(currentPlan.stage || []).map((stage, index) => (
                    <tr key={index + 1}>
                      <td>{index + 1}</td>
                      <td>
                      <InputNumber
                            size="small"
                            value={currentPlan.stage[index]}
                            min={0}
                            onChange={e => {this.handlePlanStageChange(index, 'stage', e)}}
                          /> 
                      </td>
                      <td>
                      <InputNumber
                            size="small"
                            value={currentPlan.len[index]}
                            min={0}
                            onChange={e => {this.handlePlanStageChange(index, 'len', e)}}
                          />
                      </td>
                      <td>
                      <Select
                            size="small"
                            style={{ width: 90 }}
                            value={currentPlan.mode[index]}
                            onChange={e => {this.handlePlanStageChange(index, 'mode', e)}}
                          >
                            {/* {Object.keys(Constant.dictionary.junctionMode).map(k => (
                              <Option
                                value={Number(k)}
                                key={k}
                              >
                                {Constant.dictionary.junctionMode[k]}
                              </Option>
                            ))} */}
                          </Select>
                      </td>
                      
                     
                    </tr>
                  ))}
                </tbody>
              </table>
          
              </Row>
            </div>
           {/*  <Sequence
              ref="sequence"
              currentPlan={currentPlan}
              stageList={this.stageData}
              phaseList={this.phaseData}
            /> */}
          </Col>
       
      </div>
    )
  }
  setCurrentPlan = item => {
    this.setState({
      currentPlan: item
    }, () => {
      //this.initSketchsData()
      //this.refs.sequence.redraw()
    })
  }

  handlePlanStageChange = (index, field, e) => {
    const { currentPlan } = this.state
    currentPlan[field][index] = e
    console.log('currentPlan',currentPlan)
    this.setState({ currentPlan })
  }

  handlePlanChange = (index, field, e) => {
    const { planData } = this.state
    planData[index][field] = e
    console.log('planData',planData)
    this.setState({ planData })
  }
}

export default ProjectPlans;