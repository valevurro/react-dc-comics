
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

import '@fontsource-variable/open-sans';

// const teachers = ["Florian", "Samuele", "Simone"];


function App() {

  return (
    <>
      <AppHeader />
      <AppMain />
      <AppFooter />

      {/* <ul>
      {teachers.map((teacher) => (
        <li>{teacher}</li>
      ))}
      </ul> */}

    </>
  )
}




export default App
