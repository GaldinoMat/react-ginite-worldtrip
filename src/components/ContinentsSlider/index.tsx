import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

interface IContinentsSliderProps {
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

export const ContinentsSlider = ({ postsInfo }: IContinentsSliderProps) => {
  return (
    <Box
      w="100%"
      h={["18.75rem", "25rem"]}
      my={["1.25rem", "3.25rem"]}
      px={["0", "12rem"]}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
      >
        {postsInfo.map((post) => (
          <SwiperSlide key={post.uid}>
            <Link href={`Continent/${post.slug}`} passHref>
              <Flex
                as="a"
                backgroundImage={post.data.banner_url}
                height="15.625rem"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundSize="cover"
                alignItems="center"
                justifyContent="center"
                h="100%"
              >
                <Stack textAlign="center" color="white.HeroText" spacing={["2.5","4"]} >
                  <Heading fontWeight="700" fontSize={["2xl", "5xl"]}> {post.data.title} </Heading>
                  <Text fontWeight="700" fontSize={["lg", "xl"]}> {post.data.subtitle} </Text>
                </Stack>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
