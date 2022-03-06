/* eslint-disable no-unused-vars */
import React, { Fragment, memo, useCallback, useState } from 'react'
import PismoNEO from 'resources/pismoneo'
import CssBaseline from '@mui/material/CssBaseline';
import { format } from 'date-fns-tz';
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import Card from './Card'
import Filter from './Filter'
import useError from "../Main/AppContext";
import Tabs from 'components/Tabs'
import Grid from 'components/Grid';
import PageContent from 'components/PageContent'
import Cardt from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Home = () => {
  const [filterValue, setfilterValue] = useState([null, null]);
  const [neoData, setNeoData] = useState();
  const { innerWidth: width, innerHeight: height } = window;

  console.log(height);
  const { setError } = useError();

  const onSearch = () => {
    const startDate = filterValue[0] && format(filterValue[0], 'yyyy-MM-dd')
    const endDate = filterValue[1] && format(filterValue[1], 'yyyy-MM-dd')
    PismoNEO.getNeoByRange(startDate, endDate).then((data) => {
      setNeoData({ ...data, tabData: getTabObject(data), selectedTab: getTabObject(data)[0].value })
    }).catch(setError)
  }

  const setSelectedDay = (value) => {
    setNeoData(item => ({ ...item, selectedTab: value }))
  }

  const onSetFilter = useCallback((value) => {
    setfilterValue(value);
  }, [filterValue]);

  const getTabObject = ({ near_earth_objects }) => {
    const tabsArray = Object.keys(near_earth_objects)?.sort().map(item =>
      ({ value: item, label: item.split('-').reverse().join('/') })
    );
    return tabsArray
  }

  const renderCards = () => {
    if (!neoData) {
      return
    }

    const data = neoData?.near_earth_objects[neoData.selectedTab]

    return (
      <Grid mt={4}>
        {data.map((item, key) => <Card object={item} key={key} ></Card>)}
      </Grid>
    )
  }

  const renderContent = (
    <Box sx={{ height: '100%' }}>
      {<Tabs data={neoData?.tabData} onSelect={setSelectedDay} selectedDay={neoData?.selectedTab}></Tabs>}
      {renderCards()}
    </Box>
  )

  const renderPlaceHolder = () => {
    return (
      <Box sx={{ height: '100%', display: 'flex' }}>
        <Cardt sx={{ 'margin-top': 'auto', 'margin-bottom': 'auto', 'margin-left': 'auto', 'margin-right': 'auto', py: 10, px: 5 }}>
          <Typography component="span" sx={{ fontSize: 14 }} gutterBottom >
            Selecione um intervalo de até 7 (sete) dias para pesquisar os objetos
          </Typography>
        </Cardt>
      </Box>
    )
  }

  return (
    <Fragment>
      <CssBaseline />
      <AppBar title='Near Earth Object'></AppBar>
      <PageBar pageName={'Pesquisa de objetos por data'} >
        <Filter onSearch={onSearch} setfilterValue={onSetFilter} filterValue={filterValue} />
      </PageBar>
      <PageContent>
        {neoData ? renderContent : renderPlaceHolder()}
      </PageContent>
    </Fragment >
  )
}

export default memo(Home)
