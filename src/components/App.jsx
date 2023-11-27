import { Toaster } from 'react-hot-toast';

import { Layout, MainHeader, SectionHeader } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Layout>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      <Filter />
      <ContactList />

      <Toaster position="top-right" />
    </Layout>
  );
};
