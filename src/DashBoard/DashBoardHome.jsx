import { Card, Row, Col } from "antd";

const DashBoardHome = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card cover={<img src="https://source.unsplash.com/400x200?concert" />}>
          <h3>🎤 Live Events</h3>
          <p>Discover concerts, tech talks & workshops</p>
        </Card>
      </Col>

      <Col span={8}>
        <Card cover={<img src="https://source.unsplash.com/400x200?conference" />}>
          <h3>📅 Easy Booking</h3>
          <p>Book tickets in just a few clicks</p>
        </Card>
      </Col>

      <Col span={8}>
        <Card cover={<img src="https://source.unsplash.com/400x200?crowd" />}>
          <h3>⭐ Attend & Enjoy</h3>
          <p>Attend events and track your history</p>
        </Card>
      </Col>
    </Row>
  );
};

export default DashBoardHome;

