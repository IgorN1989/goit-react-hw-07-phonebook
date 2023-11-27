import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { BsPersonFillX } from 'react-icons/bs';

import { deleteContact } from 'redux/contactsSlice';

import { ContactContainer, DeleteBtn } from './ContactCard.styled';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact was deleted!');
  };

  return (
    <ContactContainer>
      <div>
        <p>
          {name}: <span>{number}</span>
        </p>
      </div>
      <DeleteBtn onClick={() => onDeleteContact(id)}>
        <BsPersonFillX />
        Delete
      </DeleteBtn>
    </ContactContainer>
  );
};
