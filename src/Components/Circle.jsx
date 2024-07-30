import { Grid } from '@mui/material'
import React from 'react'

export default function Circle() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <h1>80%</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          40%
        </Grid>
        <Grid item xs={12} md={8}>
          80%
        </Grid>
        <Grid container>

          <Grid item xs={12} md={4}>
            
          </Grid>
          
        </Grid>

      </Grid>

    </div>
  )
}
