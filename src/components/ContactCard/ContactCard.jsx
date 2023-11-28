import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { BsPersonFillX } from 'react-icons/bs';

import { deleteContact } from 'redux/operations';

import { ContactContainer, DeleteBtn } from './ContactCard.styled';

export const ContactCard = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
    toast.success('Contact was deleted!');
  };

  return (
    <ContactContainer>
      <div>
        <p>
          {name}: <span>{phone}</span>
        </p>
      </div>
      <DeleteBtn id={id} onClick={() => onDeleteContact(id)}>
        <BsPersonFillX />
        Delete
      </DeleteBtn>
    </ContactContainer>
  );
};
