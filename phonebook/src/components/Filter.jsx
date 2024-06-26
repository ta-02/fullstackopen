import { Input, Box, FormControl, FormLabel } from "@chakra-ui/react";

const Filter = ({ newFilter, handleFilterChange }) => {
  return (
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
      <FormControl id="filter">
        <FormLabel fontSize="lg" fontWeight="semibold" mb={2}>
          Filter Name:
        </FormLabel>
        <Input
          value={newFilter}
          onChange={handleFilterChange}
          placeholder="Enter name to filter"
          px={2}
          py={1}
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius="md"
          _focus={{
            outline: "none",
            ring: "2px",
            ringColor: "blue.500",
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Filter;
