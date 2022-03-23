import { Col, Row } from 'antd';

function Footer() {
  return (
    <Row
      align="middle"
      style={{
        height: 50,
        textAlign: 'right',
      }}
    >
      <Col span={24}>
        <p>2021 Mark Lee. All right</p>
      </Col>
    </Row>
  );
}

export default Footer;
