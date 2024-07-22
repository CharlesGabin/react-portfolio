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
    <Box bg="#fff" color="black" borderRadius="xl" cursor="pointer">
      <Hide below="md">
        <Image src={imageSrc} alt={title} borderRadius="xl" />
      </Hide>
      <VStack alignItems="flex-start" spacing={4} p={4}>
        <HStack justifyContent="space-between" alignItems="flex-start">
          <Heading as="h3" size={{ base: "lg", md: "md" }}>
            {title}
          </Heading>
        </HStack>
        <Text color="#64748b" fontSize={{ base: "md", md: "lg" }}>
          {description}
        </Text>
        <HStack spacing={2} alignItems="center">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
