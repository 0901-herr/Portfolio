import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  Card,
  CardBody,
  Image,
  Heading,
  Badge,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";

const ProjectsArray = () => {
  return [
    {
      name: "Mountain - Task Planner iOS App that Made It to the App Store!",
      image: "/mountain.png", // Replace with actual image URL if available
      description:
        "Mountain is the first application I ever built, an iOS app designed for task planning and time tracking. After following countless tutorials, I finally completed the app and made it live on the App Store. Developed using Swift and SwiftUI, with the design created in Figma, the app has achieved over 300 global downloads.",
      buttons: [
        { text: "GitHub", href: "https://github.com/0901-herr/MountainApp/" },
      ],
      badges: [
        { text: "Swift", colorScheme: "blue" },
        { text: "SwiftUI", colorScheme: "green" },
        { text: "Figma", colorScheme: "purple" },
      ],
    },
    {
      name: "LLto",
      image: "/LLto_ui.png",
      description:
        "LLto is an MVP I built for a fintech startup hackathon, where we won 1st place. It’s a P2P microloan platform for gig workers that I used in live pitches and demos, receiving great feedback on the UI design and functionality.",
      buttons: [{ text: "GitHub", href: "https://github.com/0901-herr/llto" }],
      badges: [
        { text: "Firebase", colorScheme: "green" },
        { text: "ReactNative", colorScheme: "blue" },
        { text: "Tailwind", colorScheme: "purple" },
      ],
    },
    {
      name: "TaskDo - Time Tracker iOS Mobile App",
      image: "/taskdo.png",
      description:
        "Following the release of Mountain, I wanted to challenge myself by building a more complex application that includes backend operations. TaskDo is a well-rounded task and time manager inspired by a minimalistic design approach. Developed using Swift and SwiftUI, it employs the MVVM architecture and features a custom database schema. Firebase is used for the login system and data storage, and push notifications are integrated for task tracking.",
      buttons: [
        { text: "GitHub", href: "https://github.com/0901-herr/TaskDo" },
      ],
      badges: [
        { text: "Swift", colorScheme: "blue" },
        { text: "SwiftUI", colorScheme: "green" },
        { text: "Firebase", colorScheme: "orange" },
        { text: "MVVM", colorScheme: "red" },
        { text: "OOP", colorScheme: "yellow" },
        { text: "Figma", colorScheme: "purple" },
      ],
    },
    {
      name: "Flickr Web App",
      image: "/flickr.png",
      description:
        "FlicrApp is a web application built using the MERN stack, featuring image search capabilities via the Flickr API. During its development, I adhered to best practices and architectural design principles. The app includes RESTful APIs for interaction with the Flickr API, follows the MVC design pattern, and features an authentication system developed with MongoDB and managed using Redux.",
      buttons: [
        { text: "GitHub", href: "https://github.com/0901-herr/flickrapp" },
      ],
      badges: [
        { text: "MongoDB", colorScheme: "green" },
        { text: "Express.js", colorScheme: "teal" },
        { text: "React.js", colorScheme: "blue" },
        { text: "Node.js", colorScheme: "orange" },
        { text: "Material UI", colorScheme: "purple" },
        { text: "Redux", colorScheme: "red" },
        { text: "Figma", colorScheme: "yellow" },
      ],
    },
    {
      name: "SpaceX App — A React Native Mobile App",
      image: "/spacex.png",
      description:
        "The SpaceX App is my first cross-platform mobile application, for which I chose to use React Native. This React Native application uses the SpaceX API to display various SpaceX rockets. It is equipped with search, filter, and pagination capabilities, and was built using React Native and TypeScript with the SpaceX GraphQL API.",
      buttons: [
        { text: "GitHub", href: "https://github.com/YOUR_GITHUB/spacex-app" }, // Replace with actual GitHub link if available
      ],
      badges: [
        { text: "React Native", colorScheme: "blue" },
        { text: "Typscript", colorScheme: "green" },
        { text: "GraphQL", colorScheme: "pink" },
      ],
      tags: ["Mobile App"],
    },
    // {
    //   name: "Frog Game — A React Native Mobile App",
    //   description:
    //     "A SpaceX App that could be used to view different SpaceX rockets. Equipped with a search, filter, and pagination capability. Built with React Native and SpaceX GraphQL API.",
    //   buttons: [
    //     { text: "GitHub", href: "https://github.com/YOUR_GITHUB/spacex-app" }, // Replace with actual GitHub link if available
    //   ],
    //   badges: [
    //     { text: "React Native", colorScheme: "blue" },
    //     { text: "Typscript", colorScheme: "green" },
    //     { text: "GraphQL", colorScheme: "pink" },
    //   ],
    //   tags: ["Mobile App"],
    // },
    {
      name: "Impr — A Web App",
      image: "/impr.png",
      description:
        "I love watching movies and reading books in my free time, which inspired me to create a web application for organizing personal reviews on articles and books. Designed using Figma and developed using the MERN stack (MongoDB, Express.js, React, Node.js), the application features data refreshing and a dark mode capability, both managed using Redux.",
      buttons: [
        { text: "GitHub", href: "https://github.com/YOUR_GITHUB/impr" }, // Replace with actual GitHub link if available
      ],
      badges: [
        { text: "MongoDB", colorScheme: "green" },
        { text: "Express.js", colorScheme: "teal" },
        { text: "React.js", colorScheme: "blue" },
        { text: "Node.js", colorScheme: "orange" },
        { text: "Redux", colorScheme: "red" },
        { text: "Figma", colorScheme: "yellow" },
      ],
      tags: ["Web App"],
    },
  ];
};

export default function Projects({ color }) {
  const projects = ProjectsArray();

  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: "column",
                  }}
                  overflow="hidden"
                >
                  <Image className="small-image" src={project.image} />
                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
