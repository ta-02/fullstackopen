import { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import servicePersons from "./services/servicePersons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [addMessage, setAddMessage] = useState("");

  useEffect(() => {
    servicePersons.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const addContactInfo = async (event) => {
    event.preventDefault();
    const contactInfo = {
      name: newName,
      number: newNumber,
    };
    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to the phonebook, replace old number with a new one?`,
      );
      if (confirmUpdate) {
        try {
          const updatedPerson = await servicePersons.update(
            existingPerson.id,
            contactInfo,
          );
          setPersons(
            persons.map((person) =>
              person.id !== existingPerson.id ? person : updatedPerson,
            ),
          );
          setNewName("");
          setNewNumber("");
          setAddMessage(`${newName} was updated!`);
          setTimeout(() => {
            setAddMessage("");
          }, 5000);
        } catch (error) {
          console.error("Failed to update contact:", error);
          setAddMessage("Failed to update contact. Please try again.");
          setTimeout(() => {
            setAddMessage("");
          }, 5000);
        }
      }
    } else {
      try {
        const newPerson = await servicePersons.create(contactInfo);
        setPersons([...persons, newPerson]);
        setNewName("");
        setNewNumber("");
        setAddMessage(`${newName} was added!`);
        setTimeout(() => {
          setAddMessage("");
        }, 5000);
      } catch (error) {
        console.error("Failed to add contact:", error);
        setAddMessage("Failed to add contact. Please try again.");
        setTimeout(() => {
          setAddMessage("");
        }, 5000);
      }
    }
  };

  const contactsToShow = newFilter
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(newFilter.toLowerCase()),
      )
    : persons;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  const deleteContact = async (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${personToDelete.name}?`,
    );

    if (confirmDelete) {
      try {
        await servicePersons.deleteInfo(id);
        setPersons(persons.filter((person) => person.id !== id));
        setAddMessage(`${personToDelete.name} was deleted.`);
        setTimeout(() => {
          setAddMessage("");
        }, 5000);
      } catch (error) {
        console.error("Failed to delete contact:", error);
        setAddMessage("Failed to delete contact. Please try again.");
        setTimeout(() => {
          setAddMessage("");
        }, 5000);
      }
    }
  };

  return (
    <Box p={6} bg="gray.100" minH="100vh">
      <h1 className="flex justify-center items-center space-x-2 mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
        PhoneBook <span className="text-blue-600">App</span>
        <FaPhoneVolume className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      </h1>
      <VStack spacing={8} align="stretch">
        <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
        <Notification message={addMessage} />
        <Box
          p={4}
          bg="white"
          shadow="md"
          rounded="lg"
          mx="auto"
          my={4}
          w="full"
          maxW="xl"
        >
          <Heading className="justify-center flex mb-5">Add Contact</Heading>
          <PersonForm
            addContactInfo={addContactInfo}
            newName={newName}
            handleNameChange={handleNameChange}
            newNumber={newNumber}
            handleNumberChange={(event) => setNewNumber(event.target.value)}
          />
        </Box>
        <Box
          p={4}
          bg="white"
          shadow="md"
          rounded="lg"
          mx="auto"
          my={4}
          w="full"
          maxW="xl"
        >
          <Heading className="justify-center flex mb-5">Numbers</Heading>
          <Persons persons={contactsToShow} deleteContact={deleteContact} />
        </Box>
      </VStack>
      <Footer />
    </Box>
  );
};

export default App;
