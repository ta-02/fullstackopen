import { Box, List, ListItem, Text, Button, Stack } from "@chakra-ui/react";

const Persons = ({ persons, deleteContact }) => {
  return (
    <Box mx={4} my={4}>
      <List spacing={3}>
        {persons.map((person) => (
          <ListItem
            key={person.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={3}
            bg="white"
            borderWidth="1px"
            borderColor="gray.200"
            borderRadius="md"
            shadow="md"
          >
            <Stack direction="row" alignItems="center" spacing={3}>
              <Text fontSize="lg" fontWeight="bold">
                {person.name}
              </Text>
              <Text fontSize="lg">{person.number}</Text>
            </Stack>
            <Button
              colorScheme="red"
              size="sm"
              onClick={() => deleteContact(person.id)}
              variant="outline"
              borderWidth="1px"
              borderColor="red.500"
              _hover={{ bg: "red.500", color: "white" }}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Persons;
