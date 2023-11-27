import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

import { List, ContactListMessage } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

const getVisibleContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <>
      {contacts?.length ? (
        <List>
          {visibleContacts?.length === 0 && (
            <ContactListMessage>No matches found</ContactListMessage>
          )}
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactCard contact={contact} />
            </li>
          ))}
        </List>
      ) : (
        <ContactListMessage>Contacts list is empty</ContactListMessage>
      )}
    </>
  );
};
