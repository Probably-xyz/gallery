/* eslint-disable react/no-unescaped-entities */
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface RequestEmailProps {
  image?: string,
  name?: string,
}



export const RequestEmail = ({
  image,
  name,
}: RequestEmailProps) => {
  return (
    <Html>
    <Head />
    <Preview>Information request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://uawwnkwoyhkmotmoncgk.supabase.co/storage/v1/object/sign/logo/5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvLzUucG5nIiwiaWF0IjoxNjg3MTk3OTU5LCJleHAiOjE3MTg3MzM5NTl9.gEBV69M7rlmazlKptqJHDqV_rqMKGOQtztsreX7fbOE&t=2023-06-19T18%3A05%3A59.295Z"
          width={65}
          height={65}
          alt=""
        />
        <Heading style={heading}>🚀 Information request for {name}</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            This is to confirm that we have received your request for more information. We are processing the request and we will send out the information in the next hour.
          </Text>
          <Text style={paragraph}>
            <Link style={link} href="https://www.prbly.xyz/gallery">
            Back to gallery  👉 
            </Link>
          </Text>
        </Section>
        <Text style={paragraph}>
          Thank You
          <br />- Probably Team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Copyright © 2023 Probably</Text>
        <Text style={footer}>
          If you didn't request this, please ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
  );
};

export default RequestEmail

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const link = {
  color: '#5D31FF',
};

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};