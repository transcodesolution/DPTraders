import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Asidefilter from './Component/Asidefilter';
import Itemshowcase from './Component/Itemshowcase';

function Stocks() {
  const [filter, setFilter] = useState({
    show: '0',
    size: '0',
    price: '0',
  });
  return (
    <>
      <Box>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gap={4}
        >
          <GridItem colSpan={2} boxShadow="base" minH={'92vh'}>
            <Asidefilter setFilter={setFilter} />
          </GridItem>
          <GridItem colSpan={8} boxShadow="base" minH={'92vh'}>
            <Itemshowcase filter={filter} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Stocks;
