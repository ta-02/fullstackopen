const Person = ({ person, i }) => {
  return <li key={i}> {person.name} </li>;
};

export default Person;
