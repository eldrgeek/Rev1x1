import React from 'react'
import { Box, Text, Link} from '@chakra-ui/react'
import { Element } from 'react-scroll'
import TextBlock from './TextBlock'
import Player from './Player'
import Verse from './Verse'

interface FrontProps {
    setPage: (page: string) => void;
    bg?: string;
    color?: string;
}

const Front: React.FC<FrontProps> = ({  bg = 'black' }) => {
    // const scrollTo = (place: string, offset = 0) => {
    //     scroller.scrollTo(place, {
    //         duration: 1500,
    //         delay: 100,
    //         smooth: true,
    //         offset
    //     });
    // };
    return (
        <Box m={0} bg={bg} h="100%" textAlign="center">
            <Text color="white" fontFamily="stencil-std" pt={12} fontSize="6xl">
                Revolution 1x1
            </Text>

            <TextBlock heading="Change the world" />
            <TextBlock heading="With Love" />

            <Player url="https://vimeo.com/manage/videos/514507334" />
            <Element name="top"></Element>

            <Verse />

            <TextBlock
                heading="About the Revolution"
                body="Written in 2007, six years after the unprecedented loss of life and
                horrific destruction of the Twin Towers in NYC, it may seem naive
                to have assumed that global peace and understanding could flow
                from something as commonplace as a friendly greeting to a stranger."
            />
            <TextBlock
                body="We believe that the chain of events in our lives that binds us one-to-another 
                is a sacred mystery."
            />
            <TextBlock
                body="We believe that making the world a better
                place for all peoples calls for an investment of personal kindness."
            />

            <TextBlock
                heading="Just Causes"
                body={[
                    <Box
                        key="1"
                        as="span"
                        color="red.500"
                        // sx={{
                        //     ".justcauses:hover &": {
                        //         color: "green.500"
                        //     }
                        // }}
                    >
                        <Link
                            className="justcauses"
                            href="https://www.amazon.com/music/player/albums/B08ZH8YL18"
                        >
                            JUST CAUSES
                        </Link>
                    </Box>,
                    ` is the name of a new CD including 
                    Revolution 1x1 and fourteen other songs by `,
                    <Link
                        key="2"
                        className="justcauses"
                        href="https://www.noelpaulstookey.com/"
                        color="red.500"
                    >
                        Noel Paul Stookey.
                    </Link>
                ]}
            />

            <Element name="cd"></Element>
            <Text
                fontFamily="Allerta Stencil"
                maxWidth="700px"
                bg="black"
                color="white"
                mx={10}
                mt={10}
                textAlign="center"
                fontSize="sm"
            >
                Version July 26 2022{" "}
            </Text>
        </Box>
    );
};

export default Front;
