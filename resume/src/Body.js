import { Grid, Button, Typography, Stack, Box } from '@mui/material'
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import schoolImage from './images/avpschool.jpg';
import collegeImage from './images/ngpcollege.jpg'
import htmlLogo from './images/htmllogo.png'
import cssLogo from './images/csslogo.png'
import jsLogo from './images/jslogo.png'
import reactLogo from './images/reactlogo.png'
import mysqlLogo from './images/mysql.png'
import vsCode from './images/vscodelogo.png'
import figma from './images/figmalogo.png'
import github from './images/githublogo.png'
import jira from './images/jiralogo.png'

import React from 'react'
const skills=[{name:'HTML', logo: <img src={htmlLogo} style={{height:'25vh',width:'15vw'}}/>},
{name:'CSS',logo: <img src={cssLogo} style={{height:'25vh',width:'15vw'}}/>},
{name:'JavaScript',logo: <img src={jsLogo} style={{height:'25vh',width:'15vw'}}/>},
{name:'React JS',logo: <img src={reactLogo} style={{height:'25vh',width:'15vw'}}/>},
{name:'MY SQL',logo: <img src={mysqlLogo} style={{height:'25vh',width:'15vw'}}/>}]
const softwareSkills=[{namee:'Visual Studio Code',logoo:<img src={vsCode} style={{height:'25vh',width:'15vw'}}/>},
{namee:'Figma',logoo:<img src={figma} style={{height:'25vh',width:'15vw'}}/>},
{namee:'Github',logoo:<img src={github} style={{height:'25vh',width:'15vw'}}/>},
{namee:'Jira',logoo:<img src={jira} style={{height:'25vh',width:'15vw'}}/>}]
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            '&:hover': {
              backgroundColor: 'white', // Replace 'newColorOnHover' with the desired color
            },
          },
        },
      },
    },
  });
 
const Body = () => {
    return (
        <>
            <Typography variant='h1'>I am Rahul Sundaresan</Typography>
            <ThemeProvider theme={theme}>
            <Button className='buttonColor' variant='contained' disableElevation sx={{ backgroundColor: '#263A29',color:'white'}}>Hire me</Button>
            </ThemeProvider><br/><br/>
                <Grid >
                    <Typography variant='h3'>Skills</Typography>
                    <Stack direction='row' spacing={2} sx={{flexDirection: "row",justifyContent: "space-between"}}>
                     {
                       skills.map((item) => (
                        <div>
                        <Typography>{item.name}</Typography>
                        <Typography>{item.logo}</Typography></div>
                       ))
                     }</Stack>              
                </Grid>   
                <Grid>
                    <Typography variant='h3'>SoftWare Skills</Typography>
                    <Stack direction='row' spacing={2} sx={{flexDirection: "row",justifyContent: "space-between"}}>
                     {
                       softwareSkills.map((item) => (
                        <div>
                        <Typography>{item.namee}</Typography>
                        <Typography>{item.logoo}</Typography>
                        </div>
                       ))
                     }</Stack>                  
                </Grid>             
            <Typography variant='h3'>Education</Typography>
            <Stack direction='row'>
                <Grid sx={{width:'50vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Stack>
                    <Typography variant='h5'>Under Graduate</Typography>
                    <Typography>2016-2019</Typography>                   
                    <Typography variant='p'>Dr.N.G.P. Arts and Science College</Typography><br/>
                    <Typography variant='p'>Bachelor of Science in Information Technology</Typography>
                    </Stack>
                </Grid>
                <Grid>
                    <img src={collegeImage} style={{height:'50vh',width:'50vw'}}/> 
                </Grid>
            </Stack>
            <Stack direction='row'>
                <Grid sx={{width:'50vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Stack >
                    <Typography variant='h5'>High School Leaving Certificate</Typography>
                    <Typography>2015-2016</Typography>
                    <Typography variant='p'>A.V.P Trust National Matriculation Higher Secondary School</Typography><br/>
                    <Typography variant='p'>Computer Science</Typography>    
                    <br/>         
                    <Typography variant='h5'>Secondary School Leaving Certificate</Typography>
                    <Typography>2013-2014</Typography>
                    <Typography variant='p'>A.V.P Trust National Matriculation Higher Secondary School</Typography><br/>
                    <Typography variant='p'>Samacheer Kalvi</Typography>
                    </Stack>
                </Grid>
                <Grid>
                    <img src={schoolImage} style={{height:'50vh',width:'50vw'}}/>
                </Grid>
            </Stack>
            
                
                
            
        </>
    )
}

export default Body