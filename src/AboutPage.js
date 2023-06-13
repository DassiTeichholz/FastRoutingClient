import React from 'react';
import styled from 'styled-components';

const AboutPage = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Content>
        <Paragraph>
          Welcome to One Click Routing! We are a navigation application that provides indoor routing services for large shopping centers, hospitals, airports, and other complex facilities. Our goal is to simplify navigation and help users find their desired destinations efficiently.
        </Paragraph>
        <Paragraph>
          Our application is designed to be flexible and adaptable to any type of structure. It offers real-time navigation services in subscribed locations. Users can input their destination point and receive a marked route on the map. Additionally, detailed instructions are provided to guide users to their destination, such as "Go straight until Castro, then turn right onto Lin, take the escalator, and your destination is ahead!"
        </Paragraph>
        <Paragraph>
          We strive for a seamless and user-friendly experience. With One Click Routing, you can easily navigate complex facilities and reach your desired destinations hassle-free.
        </Paragraph>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f0f5f5; /* גוון רקע */
  padding: 20px;
`;

const Title = styled.h1`
  color: #009688; /* גוון כותרת */
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  color: #555555; /* גוון תוכן */
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

export default AboutPage;
