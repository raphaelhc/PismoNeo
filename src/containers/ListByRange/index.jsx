import React, { memo, useState, useCallback } from 'react'
import PismoNEO from 'resources/pismoneo'
import AppBar from 'components/AppBar'
import PageBar from 'components/PageBar'
import Filter from './Filter'
import { useRequest } from "containers/Main/AppContext";
import { getTabObject, formatData } from './helper'
import PageGrid from './PageGrid'

const ListByRange = () => {

  const [neoData, setNeoData] = useState();
  const { request } = useRequest();

  const onSearch = useCallback((start, end) => {
    const startDate = formatData(start)
    const endDate = formatData(end)

    request(() => PismoNEO.getNeoByRange(startDate, endDate)).then((data) => {
      setNeoData({ ...data, tabData: getTabObject(data), selectedTab: getTabObject(data)[0].value })
    })
  }, [])

  return (
    <div className='container'>
      <AppBar title='Near Earth Object'></AppBar>
      <PageBar pageName={'Pesquisa de objetos por data'} >
        <Filter onSearch={onSearch} />
      </PageBar>
      <PageGrid neoData={neoData} ></PageGrid>
    </div >
  )
}

export default memo(ListByRange)
