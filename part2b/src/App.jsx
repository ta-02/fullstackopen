import { useState } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContactInfo = (event) => {
    event.preventDefault();
    const contactInfo = {
      name: newName,
      number: newNumber,
    };
    const nameExists = persons.some((person) => person.name === newName);
    nameExists
      ? window.alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(contactInfo));
    setNewName("");
    setNewNumber("");
  };

  const contactsToShow = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(newFilter.toLowerCase()),
      )
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a New Contact</h2>
      <PersonForm
        addContactInfo={addContactInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={contactsToShow} />
    </div>
  );
};

export default App;
