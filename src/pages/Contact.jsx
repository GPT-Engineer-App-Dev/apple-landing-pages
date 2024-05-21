import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Contact = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Contact Us</Heading>
      <Text fontSize="lg">
        For any inquiries, please contact us at:
      </Text>
      <Text fontSize="lg">
        <strong>Email:</strong> contact@apple.com
      </Text>
      <Text fontSize="lg">
        <strong>Phone:</strong> +1-800-MY-APPLE
      </Text>
      <Text fontSize="lg">
        <strong>Address:</strong> 1 Apple Park Way, Cupertino, CA 95014, USA
      </Text>
    </VStack>
  </Box>
);

export default Contact;