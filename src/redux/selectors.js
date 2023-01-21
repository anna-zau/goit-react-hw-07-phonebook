export const selectContacts = state => state.contacts;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);

  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
