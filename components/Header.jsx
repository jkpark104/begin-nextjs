import { Col, Row } from 'antd';
import Link from 'next/Link';
import { CodeOutlined } from '@ant-design/icons';

function Header() {
  return (
    <Row
      align="middle"
      style={{
        height: 64,
      }}
    >
      <Col span={24}>
        <Link href="/">
          <a>
            <div
              style={{
                fontSize: 20,
                fontWight: 'bold',
              }}
            >
              <CodeOutlined /> Mark&apos;s Blog
            </div>
          </a>
        </Link>
      </Col>
    </Row>
  );
}

export default Header;
