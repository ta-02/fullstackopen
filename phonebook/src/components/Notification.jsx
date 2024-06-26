import { Box, Alert, AlertIcon } from "@chakra-ui/react";

const Notification = ({ message, type }) => {
  if (!message) {
    return null;
  }

  const alertStyles = {
    added: {
      status: "success",
      icon: <AlertIcon />,
      color: "green.500",
    },
    problem: {
      status: "warning",
      icon: <AlertIcon />,
      color: "yellow.500",
    },
    deleted: {
      status: "error",
      icon: <AlertIcon />,
      color: "red.500",
    },
  };

  return (
    <Box maxW="xl" mx="auto" mt={4} px={4}>
      <Alert
        status={alertStyles[type]?.status || "info"}
        variant="subtle"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        shadow="md"
        rounded="md"
        color={alertStyles[type]?.color || "gray.600"}
      >
        <Box flex="1">
          {alertStyles[type]?.icon}
          <Box ml={2} flex="1">
            {message}
          </Box>
        </Box>
      </Alert>
    </Box>
  );
};

export default Notification;
