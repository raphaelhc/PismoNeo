/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useState } from 'react'
import PismoNEO from 'resources/pismoneo'
import { format } from 'date-fns-tz';
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import Card from './Card'
import Filter from './Filter'
import useRequest from "../Main/AppContext";
import Tabs from 'components/Tabs'
import Grid from 'components/Grid';
import PageContent from 'components/PageContent'
import { ReactComponent as SearchIconComponent } from 'assets/search.svg';
import Placeholder from 'components/Placeholder'
import ObjectDetail from './ObjectDetailModal'


const ListByRange = () => {
  const [filterValue, setfilterValue] = useState([null, null]);
  const [neoData, setNeoData] = useState();
  const [itemSelected, setItemSelected] = useState(null);
  const { request } = useRequest();

  const onSearch = () => {
    const startDate = filterValue[0] && format(filterValue[0], 'yyyy-MM-dd')
    const endDate = filterValue[1] && format(filterValue[1], 'yyyy-MM-dd')
    request(() => PismoNEO.getNeoByRange(startDate, endDate)).then((data) => {
      setNeoData({ ...data, tabData: getTabObject(data), selectedTab: getTabObject(data)[0].value })
    })
  }

  const setSelectedDay = (value) => {
    setNeoData(item => ({ ...item, selectedTab: value }))
  }

  const onSetFilter = (value) => {
    setfilterValue(value);
  };

  const getTabObject = ({ near_earth_objects }) => {
    const tabsArray = Object.keys(near_earth_objects)?.sort().map(item =>
      ({ value: item, label: item.split('-').reverse().join('/') })
    );
    return tabsArray
  }

  const renderCards = () => {
    const data = neoData?.near_earth_objects[neoData.selectedTab]

    if (!data.length) {
      return <Placeholder text="Não existem dados para o dia selecionado" />
    }

    return (
      <Grid mt={4}>
        {data.map((item, key) => <Card object={item} key={key} onSelectItem={setItemSelected}></Card>)}
      </Grid>
    )
  }


  const renderPlaceHolder = () => <Placeholder icon={SearchIconComponent} text="Selecione um intervalo de até 7 (sete) dias para pesquisar os objetos" />

  return (
    <div className='container'>
      <AppBar title='Near Earth Object'></AppBar>
      <PageBar pageName={'Pesquisa de objetos por data'} >
        <Filter onSearch={onSearch} setfilterValue={onSetFilter} filterValue={filterValue} />
      </PageBar>

      {neoData && <Tabs data={neoData?.tabData} onSelect={setSelectedDay} selectedDay={neoData?.selectedTab}></Tabs>}
      <PageContent>
        {neoData ? renderCards() : renderPlaceHolder()}
      </PageContent>
      <ObjectDetail open={!!itemSelected} itemSelected={itemSelected} onClose={() => setItemSelected(null)}></ObjectDetail>
    </div >
  )
}

export default memo(ListByRange)
