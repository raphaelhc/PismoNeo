import React, { memo, useState, useCallback, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import Card from './Card'
import Tabs from 'components/Tabs'
import Grid from 'components/Grid';
import PageContent from 'components/PageContent'
import { ReactComponent as SearchIconComponent } from 'assets/search.svg';
import Placeholder from 'components/Placeholder'
import ObjectDetail from './ObjectDetailModal'

const PageGrid = ({ neoData: data }) => {

    const [neoData, setNeoData] = useState(data);
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(() => {
        setNeoData(data)
    }, [data])

    const setSelectedDay = useCallback((value) => {
        setNeoData(item => ({ ...item, selectedTab: value }))
    }, [])

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
        <Fragment>
            {neoData && <Tabs data={neoData?.tabData} onSelect={setSelectedDay} selectedDay={neoData?.selectedTab}></Tabs>}
            <PageContent>
                {neoData ? renderCards() : renderPlaceHolder()}
            </PageContent>
            <ObjectDetail open={!!itemSelected} itemSelected={itemSelected} onClose={() => setItemSelected(null)}></ObjectDetail>
        </Fragment >
    )
}

PageGrid.propTypes = {
    neoData: PropTypes.object
};

export default memo(PageGrid)
