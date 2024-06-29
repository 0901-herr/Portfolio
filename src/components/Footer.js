import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        <Text>© 2024 Liang Herr Yong. All rights reserved.</Text>
        <Text>
          Template by{" "}
          <a
            href="https://github.com/eldoraboo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eldora Boo
          </a>
          .
        </Text>
      </Container>
    </Box>
  );
}
