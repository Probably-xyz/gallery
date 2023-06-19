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
  email?: string | null | undefined,
}



export const RequestEmail = ({
  image,
  name,
  email,
}: RequestEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            {/* <Section className="mt-[32px]">
              <Img
                src="https://uawwnkwoyhkmotmoncgk.supabase.co/storage/v1/object/sign/logo/5.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJsb2dvLzUucG5nIiwiaWF0IjoxNjg3MTY4MTkzLCJleHAiOjE3MTg3MDQxOTN9.Rqna7DMJQDa0nL7CjYlWSv8a8AhJSku8pZTR-1c9et4&t=2023-06-19T09%3A49%3A53.706Z"
                width="80"
                height="80"
                alt="Prbly"
                className="my-0 mx-auto"
              />
            </Section> */}
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
            Infromation request for <strong> {name} </strong>  
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello ,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
            This is to confirm that we have received your request for more information. We are processing the request and we will send out the information in the next hour.
            </Text>
            <Section>
              <Row>
                <Column align="center">
                <Img src={image} width="64" height="64" />
                </Column>
              </Row>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#5D31FF] rounded text-white text-[12px] font-semibold no-underline text-center"
                href="https://www.prbly.xyz"
              >
                Back to Gallery
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This request was made by {email}
              <br/>
              If you were not expecting this email, you can ignore this email. If you have any questions email us at <span className="text-[#5D31FF]"> <Link className="text-[#5D31FF] font-semibold" href="mailto:support@prbly.xyz"> support@prbly.xyz </Link> </span>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default RequestEmail;