import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client';
import { getPrismicClient } from "../../services/prismic";

export const ContinentsSlider = (props) => {
  return (
    <Box w="100%" my="20px">
      < Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <Box position="relative">
            <Image src="Europa.png" alt="slider image" w="100%" />
            <Stack position="absolute" zIndex="1" left="0" right="0" top="35%" textAlign="center" color="white.HeroText">
              <Heading> props.title </Heading>
              <Text> O continente mais antigo </Text>
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="Europa.png" alt="slider image" w="100%" />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

// change to get posts banner image
// export const getStaticProps: GetStaticProps = async () => {
//   const prismic = getPrismicClient();
//   const postsResponse = await prismic.query(
//     [Prismic.predicates.at('document.type', 'posts')],
//     {
//       pageSize: 1,
//     }
//   );

//   const posts = postsResponse.results.map(post => ({
//     uid: post.uid,
//     data: {
//       title: post.data.title,
//       subtitle: post.data.subtitle,
//       author: post.data.author,
//     },
//   }));

//   const postsPagination = {
//     next_page: postsResponse.next_page,
//     results: posts,
//   };

//   return {
//     props: {
//       postsPagination,
//     },
//   };
// };