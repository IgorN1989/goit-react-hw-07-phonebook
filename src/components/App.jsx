import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';

import { getIsLoading, getError } from 'redux/selectors';

import { Toaster } from 'react-hot-toast';

import { Layout, MainHeader, SectionHeader } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Filter />
      <ContactList />

      <Toaster position="top-right" />
    </Layout>
  );
};
