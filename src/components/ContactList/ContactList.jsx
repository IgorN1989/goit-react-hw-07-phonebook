import { useSelector } from 'react-redux';

import { selectContacts, selectVisibleContacts } from 'redux/selectors';

import { List, ContactListMessage } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = () => {
  const items = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {items.length > 0 ? (
        <List>
          {visibleContacts.length === 0 && (
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
