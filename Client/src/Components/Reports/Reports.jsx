import { Box, Grid, GridItem } from '@chakra-ui/react';
import React, { useState } from 'react';
import Asidereports from './Components/Asidereports';
import Chartsdata from './Components/Chartsdata';
import Defaultpage from './Components/Defaultpage';
import Reportshowcase from './Components/Reportshowcase';

function Reports() {
  const [fetchingBillId, setFetchingBillId] = useState(null);
  const [whomToShow, setWhomToShow] = useState({
    bills: false,
    charts: false,
  });

  const setCurrentBillId = id => {
    setFetchingBillId(() => id);
  };
  const whomToShowFunction = () => {
    if (whomToShow.bills) {
      return <Reportshowcase fetchingBillId={fetchingBillId} />;
    } else if (whomToShow.charts) {
      return <Chartsdata />;
    } else
      return (
        <>
          <Defaultpage />
        </>
      );
  };
  const changeShow = name => {
    if (name == 'bills')
      setWhomToShow(data => {
        return { bills: true, charts: false };
      });
    else
      setWhomToShow(data => {
        return { bills: false, charts: true };
      });
  };
  return (
    <>
      <Box>
        <Grid
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(10, 1fr)"
          gap={4}
        >
          <GridItem colSpan={2} boxShadow="base" minH={'92vh'}>
            <Asidereports
              setCurrentBillId={setCurrentBillId}
              changeShow={changeShow}
            />
          </GridItem>
          <GridItem colSpan={8} boxShadow="base" minH={'92vh'}>
            {whomToShowFunction()}
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Reports;
