import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const ContinentsSlider = () => {
  return (
    <Box w="100%" my="20px">
      < Swiper modules={[Navigation, Pagination]} slidesPerView={1} navigation pagination={{ clickable: true }}>
        <SwiperSlide>
          <Box position="relative">
            <Image src="Europa.png" alt="slider image" w="100%" />
            <Stack position="absolute" zIndex="1" left="0" right="0" top="35%" textAlign="center" color="white.HeroText">
              <Heading> Europa </Heading>
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
