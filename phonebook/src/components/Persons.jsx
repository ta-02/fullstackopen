const Persons = ({ persons, deleteContact }) => {
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteContact(person.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
