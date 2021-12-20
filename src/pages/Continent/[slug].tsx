import { GetStaticPaths, GetStaticProps } from "next"
import { Box, Flex, Heading, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { InfoOutlineIcon } from "@chakra-ui/icons"
import { getPrismicClient } from "../../services/prismic"

import Prismic from '@prismicio/client';

interface IContinentProps {
  post: Post
}

interface Post {
  data: {
    title: string,
    banner: {
      post_image: string,
      post_image_alt: string
    }
    content: {
      body: string
    }[],
    number_of_cities: {
      body: string
    }[],
    number_of_countries: {
      body: string
    }[],
    number_of_languages: {
      body: string
    }[],
    cities_infos: {
      city_country_name: string,
      city_name: string,
      city_image: {
        city_image_alt: string,
        city_image_url: string,
      },
      city_country_symbol: {
        country_symbol_url: string,
        country_symbol_alt: string
      }
    }[]
  }
}

export default function Continent({ post }: IContinentProps) {

  console.log(post);

  const country_num = post.data.number_of_countries[0].body
  const cities_num = post.data.number_of_cities[0].body
  const languages_num = post.data.number_of_languages[0].body

  const wordsArr = (string: string) => string.split(" ")


  return (
    <Flex flexDirection="column">
      <Box>
        <Image src={post.data.banner.post_image} alt={post.data.banner.post_image_alt} />
        <Heading>{post.data.title}</Heading>
      </Box>
      <Flex flexDirection="column">
        <Box>
          {post.data.content.map(element => (
            <Text key={post.data.content.indexOf(element)}>
              {element.body}
            </Text>
          ))}
        </Box>
        <Flex>
          <HStack>
            <Text>
              <strong>{wordsArr(country_num)[0]}</strong>
              {wordsArr(country_num)[1]}
            </Text>
            <Text>
              <strong>{wordsArr(languages_num)[0]}</strong>
              {wordsArr(languages_num)[1]}
            </Text>
            <Text>
              <strong>{wordsArr(cities_num)[0]}</strong>
              {wordsArr(cities_num)[1]}
              {wordsArr(cities_num)[2]}
              <InfoOutlineIcon />
            </Text>
          </HStack>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Cidades +100</Heading>
        {post.data.cities_infos.map(city => (
          <Box key={post.data.cities_infos.indexOf(city)}>
            <Image src={city.city_image.city_image_url} alt={city.city_image.city_image_alt} />
            <Flex>
              <Box>
                <Heading>
                  {city.city_name}
                </Heading>
                <Text>{city.city_country_name}</Text>
              </Box>
              <Image
                src={city.city_country_symbol.country_symbol_url}
                alt={city.city_country_symbol.country_symbol_alt}
              />
              <Box></Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const posts = await prismic.query([
    Prismic.predicates.at('document.type', 'posts'),
  ]);

  const paths = posts.results.map(post => ({
    params: {
      slug: post.uid,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('posts', String(slug), {});
  console.log(JSON.stringify(response, null, 2));

  const post = {
    uid: response.uid,
    data: {
      title: response.data.titulo_do_post[0].text,
      banner: {
        post_image: response.data.banner_do_continente.url,
        post_image_alt: response.data.banner_do_continente.alt,

      },
      content: response.data.texto_do_post.map(content => {
        return { body: content.text }
      }),
      number_of_countries: response.data.numeros_de_paises.map(content => (
        { body: content.text }
      )),
      number_of_languages: response.data.numero_de_linguas.map(content => (
        { body: content.text }
      )),
      number_of_cities: response.data.cidades_importantes.map(content => (
        { body: content.text }
      )),
      cities_infos: response.data.grupo_de_infos.map(content => (
        {
          city_image: {
            city_image_url: content.imagem_da_cidade.url,
            city_image_alt: content.imagem_da_cidade.alt
          },
          city_name: content.nome_da_cidade[0].text,
          city_country_name: content.pais_da_cidade[0].text,
          city_country_symbol: {
            country_symbol_url: content.simbolo_do_pais[0].url,
            country_symbol_alt: content.simbolo_do_pais[0].alt
          }
        }
      ))
    }
  }

  return {
    props: { post }
  }
}