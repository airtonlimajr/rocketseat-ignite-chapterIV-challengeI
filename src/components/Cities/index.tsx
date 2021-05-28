import { Grid, Heading } from "@chakra-ui/react";
import Amsterda from "./Amsterda";
import Londres from "./Londres";
import Paris from "./Paris";
import Praga from "./Praga";
import Roma from "./Roma";

export default function Cities() {
    return (
        <>
            <Heading fontWeight="500" fontSize={["2xl", "4xl"]} mb="10">Cidades +100</Heading>
            <Grid templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={['20px', '45px']} alignItems="center" justifyContent="center" px={["30px", "0"]}>
                <Londres />
                <Paris/>
                <Roma/>
                <Praga/>
                <Amsterda/>

            </Grid>
        </>
    )
}