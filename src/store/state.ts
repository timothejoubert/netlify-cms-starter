import { RootState } from '~/types/store'

export default (): RootState => ({
    // Data
    projectsData: [],
    aboutData: null,
    // Loading
    animationEnter: false,
    splashScreenFinish: false,
    alreadyVisited: false,
    // General
    errorPage: null,
    windowWidth: 0,
    windowHeight: 0,
})
