import React from 'react';


import { Select, Tabs,Row, Col,Table,Input, message ,Button,Checkbox,DatePicker,TimePicker} from 'antd';
import moment from 'moment';
const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
class CommonPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        commonData: 
          {
            manufacturer:"value",
            deviceversion:"value",
            deviceno:"value",
            dateofmanu:"value",
            dateofconfig:"value",
            deviceip:"value",
            devicenetmask:"value",
            devicegateway:"value",
            centerip:"value",
            centerport:"value",
            
            }
      ,
     
    }

  
  }
  componentDidMount() {

  }
  render() {
    const {
        commonData
    } = this.state
    return (
      <div>
       <Col span={12}>
         <Row>
            <Col span={2}>制造厂商：</Col>
            <Col span={22}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'manufacturer', e)} */
                  />
            </Col>
         </Row>
         <Row>
            <Col span={2}>设备版本：</Col>
            <Col span={22}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'deviceversion', e)} */
                  />
            </Col>
         </Row>
         <Row>
            <Col span={2}>设备编号：</Col>
            <Col span={22}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'deviceno', e)} */
                  />
            </Col>
         </Row>
         <Row>
            <Col span={2}>生产日期：</Col>
            <Col span={5}>
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </Col>
            <Col span={5}>
            <TimePicker  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </Col>
         </Row>
         <Row>
            <Col span={2}>配置日期：</Col>
            <Col span={5}>
            <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            </Col>
            <Col span={5}>
            <TimePicker  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
            </Col>
         </Row>
         <Row>
            <Col span={2}>本机地址：</Col>
            <Col span={5}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'deviceip', e)} */
                  />
            </Col>
            <Col span={2}>掩码：</Col>
            <Col span={5}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'devicenetmask', e)} */
                  />
            </Col>
            <Col span={2}>网关：</Col>
            <Col span={5}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'devicegateway', e)} */
                  />
            </Col>
         </Row>
         
        
         <Row>
            <Col span={2}>中心地址：</Col>
            <Col span={5}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'centerip', e)} */
                  />
            </Col>
            <Col span={2}>端口：</Col>
            <Col span={5}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'centerport', e)} */
                  />
            </Col>
         </Row>
         <Row>
            <Col span={2}>中心控制：</Col>
            <Col span={2}>路口1：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>路口2：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>路口3：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>路口4：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            
         </Row>
         <Row>
            <Col span={2}>前门控：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>后门控：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>侧门控：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
            <Col span={2}>灯控：</Col>
            <Col span={3}>
            <Input
                    size="small"
                    style={{ width: '100%' }}
                    defaultValue={'100'}
                    /* onChange={e => this.handleCommonChange(index, 'position', e)} */
                  />
            </Col>
         </Row>
      </Col>
        
      </div>
    )
  }
 
  handleCommonChange = (index, field, e) => {
    const { commonData } = this.state
    commonData[field] = e
    console.log('commonData',commonData)
    this.setState({ commonData })
  }
}

export default CommonPlans;