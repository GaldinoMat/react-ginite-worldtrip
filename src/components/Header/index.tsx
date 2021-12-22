import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex as="header" h={[50, 100]} align="center" justify="center" py=".9375rem">
      <Link href="/" passHref>
        <a>
          <Image src="/Logo.svg" alt="worldtrip logo" h={["1.25rem", "2.8rem"]}/>
        </a>
      </Link>
    </Flex>
  );
};
