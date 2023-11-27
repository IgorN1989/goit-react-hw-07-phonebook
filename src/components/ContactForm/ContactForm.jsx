import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { BsPersonPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import {
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';

const contactSchema = object().shape({
  name: string().required('Please enter name'),
  number: number()
    .typeError('Please enter only numbers')
    .required('Please enter phone number'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const checkNewContact = newContact => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  const onAddContact = newContact => {
    if (checkNewContact(newContact)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContact(newContact));
    toast.success(`Contact ${newContact.name} was added!`);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <StyledForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input id="name" type="text" name="name" />
          <ErrorMsg name="name" component="span" />
        </Label>
        <Label htmlFor="number">
          <span>Number</span>
          <Input id="number" type="tel" name="number" />
          <ErrorMsg name="number" component="span" />
        </Label>
        <AddBtn type="submit">
          <BsPersonPlusFill size={32} />
          Add contact
        </AddBtn>
      </StyledForm>
    </Formik>
  );
};
