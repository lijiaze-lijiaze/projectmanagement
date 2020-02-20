import React from 'react';


import { Select, Tabs,Row, Col,Table,Input, message ,Button,Checkbox} from 'antd';
const { TabPane } = Tabs;
const { Column } = Table
const { Option } = Select
class DetectorPlans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        detectorData: [
        {
            no:"1",
            type:"5",
            cycleofflow:'120',
            cycleofoccupancy:'130',
            position:'beijing'
            }
      ],
     
    }

  
  }
  componentDidMount() {

  }
  render() {
    const {
        detectorData
    } = this.state
    return (
      <div>
       <Col span={8}>
            <Table
              dataSource={detectorData}
              bordered={true}
              rowKey="no"
              size="middle"
              pagination={false}
              scroll={{ y: '60vh' }}
             
            >
            
              <Column
                title="编号"
                dataIndex="no"
                width="75px"
              />
             
              <Column
                title="类型"
                dataIndex="type"
                width="110px"
                render={(text, record, index) => (
                  <Input
                    size="small"
                    style={{ width: '100%' }}
                  
                    value={text}
                    onChange={e => this.handleDetectorChange(index, 'type', e)}
                  />
                )}
              />
              <Column
                title="流量周期"
                dataIndex="cycleofflow"
                width="110px"
                render={(text, record, index) => (
                  <Input
                    size="small"
                    style={{ width: '100%' }}
                    
                    value={text}
                    onChange={e => this.handleDetectorChange(index, 'cycleofflow', e)}
                  />
                )}
              />
              <Column
                title="占有率周期"
                dataIndex="cycleofoccupancy"
                render={(text, record, index) => (
                  <Input
                    size="small"
                    style={{ width: '100%' }}
                    value={text}
                    onChange={e => this.handleDetectorChange(index, 'cycleofoccupancy', e)}
                  />
                )}
              />
              <Column
                title="位置"
                dataIndex="position"
                render={(text, record, index) => (
                  <Input
                    size="small"
                    style={{ width: '100%' }}
                    value={text}
                    onChange={e => this.handleDetectorChange(index, 'position', e)}
                  />
                )}
              />
            </Table>
          </Col>
        
      </div>
    )
  }
 
  handleDetectorChange = (index, field, e) => {
    const { detectorData } = this.state
    detectorData[index][field] = e
    console.log('detectorData',detectorData)
    this.setState({ detectorData })
  }
}

export default DetectorPlans;