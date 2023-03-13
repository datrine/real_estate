"use client";
import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import Property from "../components/Property";
const BannerComp = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  return (
    <>
      <Flex
        flexWrap="wrap"
        justifyContent={"center"}
        alignItems="center"
        m="10"
      >
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box p="5">
          <Text color={"gray.500"} fontSize="sm" fontWeight={"medium"}>
            {purpose}
          </Text>
          <Text color={"gray.500"} fontSize="3xl" fontWeight={"bold"}>
            {title1} <br /> {title2}
          </Text>
          <Text
            color={"gray.500"}
            fontSize="lg"
            paddingTop={"3"}
            paddingBottom="3"
            fontWeight={"bold"}
          >
            {desc1}
            <br />
            {desc2}
          </Text>
          <Button fontSize="xl" bg="blue.300" color="white">
            <Link href={linkName}>{buttonText}</Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

function PropertiesForRentFlexComp({propertiesForRent }) {
  console.log({propertiesForRent})
  return (
    <Flex flexWrap="wrap">
      {propertiesForRent?.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  );
}

function PropertiesForSaleFlexComp({ propertiesForSale, }) {
  return (
    <Flex flexWrap="wrap">
      {propertiesForSale?.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </Flex>
  );
}
export { PropertiesForRentFlexComp, BannerComp,PropertiesForSaleFlexComp };
