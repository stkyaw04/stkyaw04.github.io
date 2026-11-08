import { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, Typography, Box } from '@mui/material'
import ProjectCard from '../components/ProjectCard'
import privyPrototype from '../assets/privy_prototype.png'
import placeholder from '../assets/placeholder.png'


export default function DesignProjects() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        pt: 8,
        px: 10,}}
      >
        <ProjectCard
          title="Privy"
          context="Macathon 24-hour Entrepreneurship & Innovation Challenge"
          description="Bathroom stall privacy cover for uncomfortable gaps"
          media={privyPrototype}
          onClick={() => setOpen(true)}
        />

        <ProjectCard
          title="Sick Drift"
          context="Human-Computer Interaction Course Design Sprint"
          description="Accessible Game Controller for Single-Handed Gamers"
          media={placeholder}
          onClick={() => setOpen(true)}
        />

        <ProjectCard
          title="The Third Limb Cane"
          context="IB Design Technology HL Internal Assesment"
          description="Cane with a Grabber for Users with Limited Mobility"
          media={placeholder}
          onClick={() => setOpen(true)}
        />

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Privy</DialogTitle>
          <DialogContent>
            <Typography>More details about the project go here.</Typography>
          </DialogContent>
        </Dialog>
      </Box>
    </>
  )
}