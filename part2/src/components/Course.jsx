const Course = ({ course }) => {
  const total = course.parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((part) => (
        <p key={part.id}>
          {" "}
          {part.name} {part.exercises}
        </p>
      ))}
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  );
};

export default Course;
