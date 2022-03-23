import { Col, Row } from 'antd';
import Link from 'next/Link';
import { Card } from 'antd';
import Image from 'next/image';
import dayjs from 'dayjs';

function BlogMainPost({ slug, thumbnail, title, subtitle, author, createdAt }) {
  return (
    <Row
      align="middle"
      style={{
        height: 'auto',
      }}
    >
      <Col span={24}>
        <Link href={`/post/${slug}`}>
          <a>
            <Card
              style={{ border: 'none' }}
              cover={<img alt={thumbnail.alt} src={thumbnail.imageUrl} />}
            >
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <h4>
                {author.name} * {dayjs(createdAt).format('MMMM D')}
              </h4>
            </Card>
          </a>
        </Link>
      </Col>
    </Row>
  );
}

export default BlogMainPost;
