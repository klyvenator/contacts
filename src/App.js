import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Header, Line, ContactCard, ContactBox, Button } from './components.js';

function App() {

  const [contacts, setContacts] = React.useState([]);
  React.useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    setContacts(json);
  }, []);

  return (
    <Container>
      <Header>Contacts</Header>
      <Line/>
      <ContactBox>
        { contacts && contacts.map((item, key) => {
          return <ContactCard name={item.name} email={item.email} phone={item.phone} website={item.website} key={key}/>
        })}
      </ContactBox>
    </Container>
  );
}

export default App;
