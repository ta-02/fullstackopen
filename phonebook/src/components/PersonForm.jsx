import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { ImAddressBook } from "react-icons/im";

const PersonForm = ({
  addContactInfo,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={addContactInfo}>
      <Stack spacing={4} maxW="md" mx="auto">
        <FormControl>
          <FormLabel htmlFor="name" fontSize="lg" fontWeight="semibold" mb={2}>
            Name:
          </FormLabel>
          <Input
            id="name"
            value={newName}
            onChange={handleNameChange}
            placeholder="Enter name"
          />
        </FormControl>
        <FormControl>
          <FormLabel
            fontSize="lg"
            fontWeight="semibold"
            mb={2}
            htmlFor="number"
          >
            Number:
          </FormLabel>
          <Input
            id="number"
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="Enter number"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="gray"
          rightIcon={<ImAddressBook />}
          variant="outline"
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default PersonForm;
