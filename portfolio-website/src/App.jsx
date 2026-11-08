import { useState } from 'react'
import {ButtonGroup, Button} from '@mui/material'
import './App.css'
import DesignProjects from './pages/DesignProjects'
import TechnicalProjects from './pages/TechnicalProjects'
import Home from './pages/Home'
import Writing from './pages/Writing'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

function App() {
  const [page, setPage] = useState('home') // default page on first load

  return (
    <>
      <div className="page-menu">
        <ButtonGroup variant="outlined">
          <IconButton aria-label="Home Page" onClick={() => setPage('home')} sx={{mr: 2}}>
            <HomeIcon />
          </IconButton>
          <Button
            variant={page === 'design' ? 'contained' : 'outlined'}
            onClick={() => setPage('design')}
          >
            Design Projects
          </Button>
          <Button
            variant={page === 'technical' ? 'contained' : 'outlined'}
            onClick={() => setPage('technical')}
          >
            Technical Projects
          </Button>
          <Button
            variant={page === 'writing' ? 'contained' : 'outlined'}
            onClick={() => setPage('writing')}
          >
            Papers & Prose
          </Button>
        </ButtonGroup>
      </div>

      {page === 'home' && <Home />}
      {page === 'technical' && <TechnicalProjects />}
      {page === 'design' && <DesignProjects />}
      {page === 'writing' && <Writing />}
    </>
  )
}

export default App
