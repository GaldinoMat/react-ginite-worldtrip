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
    <Box w="100%" my="1.25rem">
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
              >
                <Stack textAlign="center" color="white.HeroText">
                  <Heading> {post.data.title} </Heading>
                  <Text> {post.data.subtitle} </Text>
                </Stack>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
