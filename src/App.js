import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import { Route, Routes } from 'react-router-dom';

import Topbar from './Scenes/Global/Topbar';
import SideBar from './Scenes/Global/SideBar';
import Dashboard from './Scenes/Dashboard';
import Team from './Scenes/Team/Team';
import Contacts from './Scenes/Contacts/Contacts';
import Invoices from './Scenes/Invoices/Invoices';
import Form from './Scenes/Form/Form';
import Calendar from './Scenes/Calendar/Calendar';
import FAQ from './Scenes/FAQ/FAQ';
import Bar from './Scenes/Bar/Bar';
import Pie from './Scenes/Pie/Pie';
import Line from './Scenes/Line/Line';
import Geography from './Scenes/Geography/Geography';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';



function App() {
  const [ theme, colorMode] = useMode()

  return <>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <SideBar/>
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/team' element={<Team/>} />
              <Route path='/contacts' element={<Contacts/>} />
              <Route path='/invoices' element={<Invoices/>} />
              <Route path='/form' element={<Form/>} />
              <Route path='/calendar' element={<Calendar/>} /> 
              <Route path='/faq' element={<FAQ/>} />
              <Route path='/bar' element={<Bar/>} />
              <Route path='/pie' element={<Pie/>} />
               <Route path='/line' element={<Line/>} />
             <Route path='/geography' element={<Geography/>} />

              <Route path='*' element={<><Box sx={{display: "flex", flexDirections:"row", justifyContent:"center"}}>
              <Box my="4rem"><Typography fontSize="44px" fontWeight="bold">4 0 4</Typography></Box>
                </Box></>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  
}

export default App