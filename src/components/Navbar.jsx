import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Link as={NavLink} to="/" fontSize="xl" fontWeight="bold" _hover={{ textDecoration: "none" }}>
          Apple
        </Link>
        <Flex>
          <Link as={NavLink} to="/about" mx={2} _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" mx={2} _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;