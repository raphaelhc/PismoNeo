import React, { memo, useState } from 'react'
import PismoNEO from 'resources/pismoneo'
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import Card from './Card'
import Filter from './Filter'
import { useRequest } from "containers/Main/AppContext";
import Tabs from 'components/Tabs'
import Grid from 'components/Grid';
import PageContent from 'components/PageContent'
import { ReactComponent as SearchIconComponent } from 'assets/search.svg';
import Placeholder from 'components/Placeholder'
import ObjectDetail from './ObjectDetailModal'
import { getTabObject, formatData } from './helper'

const ListByRange = () => {
  const [filterValue, setfilterValue] = useState([null, null]);
  const [neoData, setNeoData] = useState();
  const [itemSelected, setItemSelected] = useState(null);
  const { request } = useRequest();

  const onSearch = () => {
    const startDate = formatData(filterValue[0])
    const endDate = formatData(filterValue[1])

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
