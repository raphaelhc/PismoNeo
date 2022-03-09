import { lazy } from 'react'

const About = lazy(() => import('containers/About'))

const route = [
    {
        path: '/about',
        component: About,
        exact: true
    }
]

export default route