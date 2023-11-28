import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';

import { selectIsLoading, selectError } from 'redux/selectors';

import { Toaster } from 'react-hot-toast';

import { Layout, MainHeader, SectionHeader } from './Layout/Layout.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
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
        <p>{error}</p>
      ) : (
        <div>
          <Filter />
          <ContactList />
        </div>
      )}

      <Toaster position="top-right" />
    </Layout>
  );
};
