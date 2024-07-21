import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Box,
  Hide,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box bg="#fff" color="black" borderRadius="xl">
      <Hide below="md">
        <Image
          src={imageSrc}
          alt="image=project"
          borderRadius="xl"
          width="100%"
        />
      </Hide>
      <VStack alignItems="flex-start" p={6}>
        <Heading as="h4" size={{ base: "lg", md: "md" }}>
          {title}
        </Heading>
        <Text color="gray" fontSize={{ base: "md", md: "md" }}>
          {description}
        </Text>
        <HStack justifyItems="center" alignItems="center">
          <Text fontSize="sm">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
