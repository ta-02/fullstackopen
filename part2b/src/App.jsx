import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import servicePersons from "./services/servicePersons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [addMessage, setAddMessage] = useState("...");

  useEffect(() => {
    servicePersons.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addContactInfo = (event) => {
    event.preventDefault();
    const contactInfo = {
      name: newName,
      number: newNumber,
    };
    const person = persons.find((person) => person.name === newName);
    if (person) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace old number with a new one?`,
      );
      if (confirmUpdate) {
        const id = person.id;
        const changedPerson = { ...person, number: newNumber };
        servicePersons.update(id, changedPerson).then((returnedInfo) => {
          setPersons(persons.map((p) => (p.id !== id ? p : returnedInfo)));
          setNewName("");
          setNewNumber("");
          setAddMessage(`${newName} was updated!`);
          setTimeout(() => {
            setAddMessage(null);
          }, 5000);
        });
      }
    } else {
      servicePersons.create(contactInfo).then((returnedInfo) => {
        setPersons(persons.concat(returnedInfo));
        setNewName("");
        setNewNumber("");
        setAddMessage(`${newName} was added!`);
        setTimeout(() => {
          setAddMessage(null);
        }, 5000);
      });
    }
  };

  const contactsToShow = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().startsWith(newFilter.toLowerCase()),
      )
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const deleteContact = (id) => {
    const contactInfo = persons.find((p) => p.id === id);
    const confirm = window.confirm(
      `Are you sure you want to delete ${contactInfo.name}`,
    );
    if (confirm) {
      servicePersons.deleteInfo(id).then(() => {
        setPersons(persons.filter((p) => p.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <Notification message={addMessage} />
      <h2>Add a New Contact</h2>
      <PersonForm
        addContactInfo={addContactInfo}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={(event) => {
          setNewNumber(event.target.value);
        }}
      />
      <h2>Numbers</h2>
      <Persons persons={contactsToShow} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
