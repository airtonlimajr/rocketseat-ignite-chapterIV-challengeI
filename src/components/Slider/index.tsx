import { Flex, Heading, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';


SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

interface SliderProps {
    continents: {
        slug: string;
        title: string;
        summary: string;
        image: string;
    }[]
}

export default function Slider() {
    return (
        <Flex w="100%" waxW="1240px" mx="auto" mb={["5", "10"]} h={["250px", "450px"]}>
            <Swiper slidesPerView={1} navigation pagination={{ clickable: true }} autoplay={{ delay: 4000, }} style={{ width: '100%', flex: '1' }}>
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/europe.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                    Europa
                                </Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>
                                    O continente mais antigo.
                                </Text>
                            </a>

                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/asia.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                    Asia
                                </Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>
                                    Tradi????o e modernidade.
                                </Text>
                            </a>

                        </Link>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex w="100%" h="100%" align="center" justify="center" direction="column" bgImage="url(/africa.jpg)" bgRepeat="no-repeat" bgSize="cover" textAlign="center" bgPosition="center">
                        <Link href="/continent/europe">
                            <a>
                                <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                                    ??frica
                                </Heading>
                                <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>
                                    O cotinente da natureza selvagem.
                                </Text>
                            </a>

                        </Link>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>

    )
}