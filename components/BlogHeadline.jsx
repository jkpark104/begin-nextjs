import { Col, Row } from 'antd';

function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: 'center',
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: 'bold',
          }}
        >
          Mark&apos;s Blog
        </h1>
        <p style={{ fontSize: 24 }}>
          TypeScript와 Electron을 이용하여, 디자이너를 위한
        </p>
      </Col>
    </Row>
  );
}

export default BlogHeadline;
