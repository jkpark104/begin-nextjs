import { Col, Row } from 'antd';
import Link from 'next/link';
import { Card } from 'antd';
import dayjs from 'dayjs';

function BlogList({ postMessage }) {
  return (
    <>
      <Row
        align="middle"
        style={{
          height: 100,
        }}
      >
        <Col span={24}>
          <h1
            style={{
              fontSize: 30,
              fontWeight: 'bold',
            }}
          >
            Latest Posts
          </h1>
        </Col>
      </Row>
      <Row
        gutter={16}
        style={{
          height: 'auto',
        }}
      >
        {postMessage?.map((post, index) => {
          return (
            <Col key={index} span={6}>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Card
                    style={{
                      width: '100%',
                      border: 'none',
                      marginBottom: 30,
                    }}
                    cover={
                      <img
                        alt={post.thumbnail.alt}
                        src={post.thumbnail.imageUrl}
                      />
                    }
                  >
                    <h3>{post.title}</h3>
                    <h4>
                      {post.author.name} * {dayjs(post.createdAt)}
                    </h4>
                  </Card>
                </a>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default BlogList;
