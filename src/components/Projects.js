import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  // ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  // SimpleGrid,
  Badge,
  // Link,
  // Center,
} from "@chakra-ui/react";
import { Fade } from "react-reveal";
import { useState } from "react";
// import ProjectsArray from "./ProjectsArray";
// import OtherProjectsArray from "./OtherProjectsArray";
import TagsArray from "./TagsArray";

const ProjectsArray = () => {
  return [
    {
      name: "Mountain - Task Planner iOS App that Made It to the App Store!",
      image: "/mountain.png", // Replace with actual image URL if available
      description:
        "Mountain is the first application I ever built, an iOS app designed for task planning and time tracking. After following countless tutorials, I finally completed the app and made it live on the App Store. Developed using Swift and SwiftUI, with the design created in Figma, the app has achieved over 300 global downloads.",
      buttons: [
        // { text: "App Store", href: "https://apps.apple.com/app/idYOUR_APP_ID" }, // Replace with actual App Store link if available
      ],
      badges: [
        { text: "Swift", colorScheme: "blue" },
        { text: "SwiftUI", colorScheme: "green" },
        { text: "Figma", colorScheme: "purple" },
      ],
    },
    {
      name: "TaskDo - Time Tracker iOS Mobile App",
      image: "/taskdo.png", // Replace with actual image URL if available
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
      image: "/flickr.png", // Replace with actual image URL if available
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

const OtherProjectsArray = () => {
  return [
    {
      name: "Impr — A Web App",
      description:
        "A web application for organizing personal reviews on articles/books etc. Application designed using Figma. Developed using the MERN stack (MongoDB, Express.js, React, Node.js). Equipped app with data refreshing and dark mode capability using Redux.",
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
    {
      name: "SpaceX App — A React Native Mobile App",
      description:
        "A SpaceX App that could be used to view different SpaceX rockets. Equipped with a search, filter, and pagination capability. Built with React Native and SpaceX GraphQL API.",
      buttons: [
        { text: "GitHub", href: "https://github.com/YOUR_GITHUB/spacex-app" }, // Replace with actual GitHub link if available
      ],
      badges: [
        { text: "React Native", colorScheme: "blue" },
        { text: "GraphQL", colorScheme: "pink" },
      ],
      tags: ["Mobile App"],
    },
  ];
};

export default function Projects({ color }) {
  const projects = ProjectsArray();
  const others = OtherProjectsArray();
  const options = TagsArray("ProjectsTags");

  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };

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
          {/* <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === "All" ? `${color}` : "gray"}
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              {options.map((option) => (
                <Button
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center> */}
          {/* <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {others
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other) => (
                <Fade bottom>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
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
          </SimpleGrid> */}
        </Stack>
      </Container>
    </>
  );
}
