import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";
// import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  // const profile = ProfileArray();

  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          // textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            I am a Software Developer at Monash University's eSolutions ChatBot
            team, currently pursuing a Master's in Artificial Intelligence. I
            graduated from Monash University with a Bachelor's degree in
            Computer Science and have developed a strong interest in software
            development. With 1 year of experience in Full-Stack development for
            Web and Mobile Applications, gained through professional roles and
            internships, I am eager to expand my knowledge and collaborate on
            innovative ideas.
            <br />
            <br />I first discovered the magic of creating something by putting
            together LEGO blocks and have followed that path ever since.
            Purchasing my first Python textbook in secondary school opened up a
            new window to create and develop software. I aspire to one day build
            something that makes a positive impact on people's lives. But in the
            meantime when I'm free, you can find me playing basketball 🏀 or
            swimming laps! 🏊‍♂️
          </Text>
        </Stack>
      </Container>
    </>
  );
}
