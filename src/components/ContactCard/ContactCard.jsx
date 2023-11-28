import { useDispatch } from 'react-redux';
import { BsPersonFillX } from 'react-icons/bs';
import toast from 'react-hot-toast';

import { deleteContact } from 'redux/operations';

import { ContactContainer, Phone, DeleteBtn } from './ContactCard.styled';

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
          {name}: <Phone>{phone}</Phone>
        </p>
      </div>
      <DeleteBtn id={id} onClick={() => onDeleteContact(id)}>
        <BsPersonFillX />
        Delete
      </DeleteBtn>
    </ContactContainer>
  );
};
