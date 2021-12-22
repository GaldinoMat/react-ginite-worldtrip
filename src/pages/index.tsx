import { Flex, Divider, Heading } from "@chakra-ui/react";
import { ContinentsSlider } from "../components/ContinentsSlider";
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import Prismic from "@prismicio/client";

interface IPostInfo {
  postsInfo: {
    data: {
      title: string;
      banner_url: string;
      subtitle?: string;
    };
    slug: string;
    uid: string;
  }[];
}

const Home = ({ postsInfo }: IPostInfo) => {
  return (
    <Flex w="100vw" align="center" justify="center" flexDirection="column">
      <Hero />
      <CTA />
      <Divider
        orientation="horizontal"
        w={["3.75rem", "5.625rem"]}
        h=".125rem"
        bg="gray.Headings"
        opacity="1"
      />
      <Heading
        textAlign="center"
        fontWeight="500"
        color="gray.Headings"
        mt="1.5rem"
      >
        Vamos nessa?
      </Heading>
      <Heading
        textAlign="center"
        fontWeight="500"
        color="gray.Headings"
      >
        Então escolha seu continente
      </Heading>
      <ContinentsSlider postsInfo={postsInfo} />
    </Flex>
  );
};

export default Home;

// change to get posts banner image
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const postsResponse = await prismic.query([
    Prismic.predicates.at("document.type", "posts"),
  ]);

  const postsInfo = postsResponse.results.map((post: any) => ({
    uid: post.uid,
    slug: post.slugs[0],
    data: {
      title: post.data.titulo_do_post[0].text,
      subtitle: post.data.subtitulo[0].text,
      banner_url: post.data.banner_slider_home.url,
    },
  }));

  return {
    props: {
      postsInfo,
    },
  };
};
