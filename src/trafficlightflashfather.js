import React from 'react';

import './App.css';
<<<<<<< HEAD

import { Select, Tabs } from 'antd';
import YearPlan from "./yearPlan.js"
=======
import DayPlans from './DayPlans'
import { Select, Tabs,Row, Col,Table,InputNumber, message } from 'antd';
>>>>>>> 5088130b4b4e5fe1f0ee2cecb5b3a7b809a27abe
const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
class Trafficlightflashfather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

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
        <Tabs defaultActiveKey="1">
          <TabPane tab="方案" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="日计划" key="2">
            <DayPlans></DayPlans>
          </TabPane>
          <TabPane tab="年计划" key="3">
            <YearPlan/>
          </TabPane>
          <TabPane tab="信号机公共参数" key="4">
            <div>
            <Tabs defaultActiveKey="5">
              <TabPane tab="阶段" key="5">
                1
              </TabPane>
              <TabPane tab="早断" key="6">
                2
              </TabPane>
              <TabPane tab="晚放" key="7">
               3
              </TabPane>
              <TabPane tab="相位" key="8">
                4
              </TabPane>
              <TabPane tab="绿间隔" key="9">
                5
              </TabPane>
              <TabPane tab="冲突" key="10">
                6
              </TabPane>
              <TabPane tab="优先" key="11">
               7
              </TabPane>
              <TabPane tab="紧急" key="12">
               8
              </TabPane>
              <TabPane tab="相位灯组" key="13">
                9
              </TabPane>
              <TabPane tab="灯组" key="14">
                10
              </TabPane>
              <TabPane tab="需求" key="15">
                11
              </TabPane>
              <TabPane tab="检测器" key="16">
                12
              </TabPane>
              <TabPane tab="通用" key="17">
                13
              </TabPane>
              <TabPane tab="故障" key="18">
                14
              </TabPane>
              </Tabs>
            </div>
            
           
          </TabPane>
        </Tabs>

      </div>
    )
  }
  setCurrentDayPlan = item => {
    this.setState({
      currentDayPlan: item
    })
  }
}

export default Trafficlightflashfather;