import React from 'react';

import './App.css';
import ProjectPlans from "./project"
import YearPlan from "./yearPlan"
import DayPlans from './DayPlans'
import Stages from "./signalCommonParameters/stages"
import EarlyOutTime from "./signalCommonParameters/earlyOutTime"
import DelayStarts from "./signalCommonParameters/delayStarts"
import Phases from "./signalCommonParameters/phases"
import Intergreens from "./signalCommonParameters/intergreens"
import DetectorPlans from "./signalCommonParameters/detector"
import CommonPlans from "./signalCommonParameters/common"
import { Select, Tabs,Row, Col,Table,InputNumber, message,Checkbox,Button } from 'antd';
import Saftys from "./signalCommonParameters/saftys"
import PhaseChyTech from "./signalCommonParameters/phaseChyTech"
import Demand from "./signalCommonParameters/demand"
import ChyTech from "./signalCommonParameters/chyTech"
import Exigence from "./signalCommonParameters/exigence"
import Precedence from "./signalCommonParameters/precedence"

// [{
// "no":0,
// "stage":1,
// "level":2,
// "mask":0
// }]

const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
class Trafficlightflashfather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: "block",
      buttonTitle: "当前表"
    }

  }
  componentDidMount() {

  }
  render() {
    const {
      dayPlanData,
      currentDayPlan,
      isShow,
      buttonTitle
    } = this.state
    return (
      <div>
        <Row style={{ width: '600px' }}>
          <Col span={6}><Button type="primary" size='small'>读{buttonTitle}</Button></Col>
          <Col span={6}><Button type="primary" size='small'>写{buttonTitle}</Button></Col>
          <Col span={6}><Button style={{ display: isShow }} type="primary" size='small'>读表中选中方案</Button></Col>
          <Col span={6}><Button style={{ display: isShow }} type="primary" size='small'>写表中选中方案</Button></Col>
        </Row>
        <Row>
          <Tabs defaultActiveKey="1" onTabClick={this.switchHandle.bind(this)}>
            <TabPane tab="方案" key="1">
              <ProjectPlans></ProjectPlans>
            </TabPane>
            <TabPane tab="日计划" key="2">
              <DayPlans></DayPlans>
            </TabPane>
            <TabPane tab="年计划" key="3">
              <YearPlan />
            </TabPane>
            <TabPane tab="信号机公共参数" key="4" >
              <div>
                <Tabs defaultActiveKey="5" >
                  <TabPane tab="阶段" key="5">
                    <Stages />
                  </TabPane>
                  <TabPane tab="早断" key="6">
                    <EarlyOutTime />
                  </TabPane>
                  <TabPane tab="晚放" key="7">
                    <DelayStarts />
                  </TabPane>
                  <TabPane tab="相位" key="8">
                    <Phases />
                  </TabPane>
                  <TabPane tab="绿间隔" key="9">
                    <Intergreens />
                  </TabPane>
                  <TabPane tab="冲突" key="10">
                    <Saftys />
                  </TabPane>
                  <TabPane tab="优先" key="11">
                    <Precedence />
                  </TabPane>
                  <TabPane tab="紧急" key="12">
                    <Exigence />
                  </TabPane>
                  <TabPane tab="相位灯组" key="13">
                    <PhaseChyTech />
                  </TabPane>
                  <TabPane tab="灯组" key="14">
                    <ChyTech />
                  </TabPane>
                  <TabPane tab="需求" key="15">
                    <Demand />
                  </TabPane>
                  <TabPane tab="检测器" key="16">
              <DetectorPlans></DetectorPlans>
              </TabPane>
              <TabPane tab="通用" key="17">
              <CommonPlans></CommonPlans>
              </TabPane>
                  <TabPane tab="故障" key="18">
                    14
              </TabPane>
                </Tabs>
              </div>


            </TabPane>
          </Tabs>

        </Row>

      </div>
    )
  }
  setCurrentDayPlan = item => {
    this.setState({
      currentDayPlan: item
    })
  }
  switchHandle(e) {
    if (e / 1 === 4) {
      this.setState({
        isShow: "none",
        buttonTitle:"信号机"
      })
    } else {
      this.setState({
        isShow: "block",
        buttonTitle:"当前表"
      })
    }
  }
}

export default Trafficlightflashfather;