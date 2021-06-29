import { Fragment } from "react";
import Navbar from "../components/Layout/Navbar";
import { Box, Grid, useColorMode } from "@chakra-ui/react";
import Sidebar from "../components/Layout/Sidebar";
import Container from "../components/Layout/Container";
// import Listing from "../components/listing";
// import Posts from "../components/feed/posts";
import Meta from "../components/Layout/Meta";

export default function Index() {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Fragment>
      <Meta />
      <Navbar />
      <Box
        as="main"
        // bg={"#EEF0F1"}
        // bg={colorMode === "light" ? "#EEF0F1" : "-moz-initial"}
        id="page"
        mt="56px"
      >
        <Container>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 3fr",
              lg: "1fr 3fr 1.5fr",
            }}
            d={{ base: "block", md: "grid" }}
            gap={4}
            pt="4"
          >
            <Sidebar d={{ base: "none", md: "block" }} />
            {/* <Posts />
            <Listing d={{ base: "none", md: "flex" }} /> */}
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
}
