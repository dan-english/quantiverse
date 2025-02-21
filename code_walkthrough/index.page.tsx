import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
  max-width: 48rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const Section = styled.section`
  margin-bottom: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary};
`;

const List = styled.ul`
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Blockquote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.accent};
  padding-left: 1rem;
  font-style: italic;
  margin-top: 0.5rem;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.tertiary};
`;

const QuantiversePage = () => {
  return (
    <Container>
      <Title>Welcome to Quantiverse</Title>
      
      <Section>
        <Heading>What is Quantiverse?</Heading>
        <p>Imagine a place where data flows like a river, numbers dance like fireflies, and automation feels like magic. That place is Quantiverse! Step into a world where possibilities are endless, and the digital universe is yours to explore.</p>
      </Section>

      <Section>
        <Heading>Why Are You Here?</Heading>
        <p>Maybe you stumbled in by accident, maybe fate brought you here, or maybe—just maybe—you're searching for something greater. Whatever the reason, we’re glad to have you!</p>
      </Section>

      <Section>
        <Heading>Things You Can Do in Quantiverse</Heading>
        <List>
          <ListItem><strong>Marvel at the infinite</strong> – No, seriously, look around. Isn’t it cool?</ListItem>
          <ListItem><strong>Press buttons</strong> – Some do things, some don’t. That’s the fun part!</ListItem>
          <ListItem><strong>Tell your friends</strong> – Because Quantiverse is better when shared.</ListItem>
          <ListItem><strong>Discover hidden secrets</strong> – Easter eggs? Maybe. Try exploring!</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>Fun Facts</Heading>
        <List>
          <ListItem>42% of visitors claim they left feeling 87% more enlightened.</ListItem>
          <ListItem>The term "Quantiverse" was once whispered by an ancient data sage.</ListItem>
          <ListItem>Every time you read this page, a friendly bot somewhere smiles.</ListItem>
          <ListItem>Quantiverse operates in multiple dimensions, or so we’ve been told.</ListItem>
        </List>
      </Section>

      <Section>
        <Heading>Quotes from Explorers</Heading>
        <Blockquote>"Quantiverse is like a dream you never want to wake up from!" – A Happy Visitor</Blockquote>
        <Blockquote>"If magic and technology had a baby, it would be Quantiverse." – An Enthusiastic Coder</Blockquote>
      </Section>

      <Section>
        <Heading>Pro Tips</Heading>
        <List as="ol">
          <ListItem><code>CTRL + ALT + DEL</code> won’t get you out of here. You must embrace the adventure!</ListItem>
          <ListItem>Want to experience the full potential? Click everything at least once.</ListItem>
          <ListItem>If something doesn't work, it’s probably working in <em>another</em> universe.</ListItem>
        </List>
      </Section>

      <Footer>Quantiverse: Less technical, more magical!</Footer>
    </Container>
  );
};

export default QuantiversePage;
