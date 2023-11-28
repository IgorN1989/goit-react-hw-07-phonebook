import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';

import { Layout, MainHeader, SectionHeader } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { ContactListMessage } from './ContactList/ContactList.styled';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />

      <SectionHeader>Contacts</SectionHeader>
      {isLoading && <Loader />}

      {error ? (
        <ContactListMessage>
          {error}! Please reload this page!
        </ContactListMessage>
      ) : (
        <div>
          <Filter />
          <ContactList />
          {items.length === 0 && (
            <ContactListMessage>Contacts list is empty</ContactListMessage>
          )}
        </div>
      )}

      <Toaster position="top-right" />
    </Layout>
  );
};
