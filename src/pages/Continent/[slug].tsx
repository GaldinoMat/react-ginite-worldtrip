import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { getPrismicClient } from "../../services/prismic";

import Prismic from "@prismicio/client";
import { Banner } from "./Banner";
import { TextContent } from "./TextContent";
import { ContinentInfo } from "./ContinentInfo";
import { CitiesBoxInfo } from "./CitiesInfoBox";

interface IContinentProps {
  post: Post;
}

interface Post {
  data: {
    title: string;
    banner: {
      post_image: string;
      post_image_alt: string;
    };
    content: {
      body: string;
    }[];
    number_of_cities: {
      body: string;
    }[];
    number_of_countries: {
      body: string;
    }[];
    number_of_languages: {
      body: string;
    }[];
    cities_infos: {
      city_country_name: string;
      city_name: string;
      city_image: {
        city_image_alt: string;
        city_image_url: string;
      };
      city_country_symbol: {
        country_symbol_url: string;
        country_symbol_alt: string;
      };
    }[];
  };
}

const Continent = ({ post }: IContinentProps) => {
  return (
    <Flex flexDirection="column">
      <Banner imageUrl={post.data.banner.post_image} title={post.data.title} />
      <Box px="1rem">
        <Flex flexDirection="column">
          <TextContent content={post.data.content} />
          <Flex>
            <HStack spacing="10">
              <Flex flexDirection="column" alignItems="center">
                <ContinentInfo info={post.data.number_of_countries} />
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <ContinentInfo info={post.data.number_of_languages} />
              </Flex>
              <Flex flexDirection="column" alignItems="center">
                <ContinentInfo info={post.data.number_of_cities} />
              </Flex>
            </HStack>
          </Flex>
        </Flex>
        <Flex flexDirection="column" mt="2.25rem" mb="1rem">
          <Heading fontWeight="medium">Cidades +100</Heading>
          <CitiesBoxInfo cities_infos={post.data.cities_infos} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at("document.type", "posts"),
  ]);

  const paths = posts.results.map((post) => ({
    params: {
      slug: post.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const slug  = context.params?.slug;
  const response = await prismic.getByUID("posts", String(slug), {});

  const post = {
    uid: response.uid,
    data: {
      title: response.data.titulo_do_post[0].text,
      banner: {
        post_image: response.data.banner_do_continente.url,
        post_image_alt: response.data.banner_do_continente.alt,
      },
      content: response.data.texto_do_post.map((content: any) => {
        return { body: content.text };
      }),
      number_of_countries: response.data.numeros_de_paises.map((content: any) => ({
        body: content.text,
      })),
      number_of_languages: response.data.numero_de_linguas.map((content: any) => ({
        body: content.text,
      })),
      number_of_cities: response.data.cidades_importantes.map((content: any) => ({
        body: content.text,
      })),
      cities_infos: response.data.grupo_de_infos.map((content: any) => ({
        city_image: {
          city_image_url: content.imagem_da_cidade.url,
          city_image_alt: content.imagem_da_cidade.alt,
        },
        city_name: content.nome_da_cidade[0].text,
        city_country_name: content.pais_da_cidade[0].text,
        city_country_symbol: {
          country_symbol_url: content.simbolo_do_pais[0].url,
          country_symbol_alt: content.simbolo_do_pais[0].alt,
        },
      })),
    },
  };

  return {
    props: { post },
  };
};
