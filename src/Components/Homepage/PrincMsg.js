import React from 'react'
import { Avatar, Grid, Typography } from '@mui/material';
import { textAlign } from '@mui/system';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function () {
  return (
        <Grid container>
          <Grid item xs={12} sm={12} md={9} style={{ margin: 'auto' }}>
            <Item style={{ padding: '3rem 3rem' }}>
              <Grid container>
              <Grid item xs={12} sm={12} md={8}>
              <Typography variant="h2">
                  <span style={{ color: 'var(--myred)' }}>
                    <b>Message</b>
                  </span>
                  <br />{' '}
                  <span
                    style={{
                      fontFamily: '"Patrick Hand", cursive',
                      color: 'var(--myblue)',
                    }}
                  >
                    from the Principal
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Avatar
                  sx={{ bgcolor: 'var(--myred)', width: 200, height: 200,margin:'1rem auto' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUvGtGYTlVydKvWMYwLLjkXeiGSRzE3ZRUew&usqp=CAU"
                >
                  N
                </Avatar>
              </Grid>

              </Grid>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  textAlign: 'left',
                }}
              >
                
               
              </div>
              <Typography
                style={{
                  textIndent: '50px',
                  textAlign: 'justify',
                  margin: '1rem 0px',
                  fontStyle: 'italic',
                  fontFamily: '"Patrick Hand"',
                  fontSize: '1.5em',
                }}
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                egestas nisl eget consectetur congue. Donec egestas massa arcu,
                ut feugiat augue rutrum eget. Sed ut lobortis leo. Aenean
                commodo non justo vitae imperdiet. Proin viverra convallis eros
                sed accumsan. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Nullam at lectus sed ligula consectetur feugiat at
                eu dolor. Vestibulum eget accumsan magna. Fusce eget arcu a sem
                dignissim scelerisque. Morbi nec sem nec orci fermentum luctus.
                Nam tincidunt lorem et diam eleifend, at luctus odio viverra.
              </Typography>
              <Typography
                style={{
                  textIndent: '50px',
                  textAlign: 'justify',
                  margin: '1rem 0px',
                  fontStyle: 'italic',
                  fontFamily: '"Patrick Hand"',
                  fontSize: '1.5em',
                }}
              >
                Sed mattis leo eu arcu vulputate hendrerit. Maecenas tincidunt,
                justo vitae egestas elementum, arcu arcu eleifend nisl, nec
                iaculis orci felis ac ex. Aliquam mattis magna ac hendrerit
                dapibus. Nunc consequat purus eget nisi auctor, eget facilisis
                justo venenatis. Pellentesque lobortis eleifend justo nec
                venenatis. Quisque non turpis magna. Suspendisse eu erat vitae
                neque dapibus lobortis. Nullam eu ultricies mauris, at
                sollicitudin tortor. Nam quis dui lorem. Sed ut mi dictum,
                molestie turpis quis, venenatis risus. Quisque tincidunt
                scelerisque laoreet.
              </Typography>
              <Typography
                style={{
                  textIndent: '50px',
                  textAlign: 'justify',
                  margin: '1rem 0px',
                  fontStyle: 'italic',
                  fontFamily: '"Patrick Hand"',
                  fontSize: '1.5em',
                }}
              >
                Aenean nec odio sodales, suscipit erat sit amet, dignissim
                augue. Sed ut aliquet nibh. Donec tristique, neque quis
                sollicitudin pulvinar, sem orci condimentum augue, non tempor
                magna quam a nibh. Phasellus risus tortor, efficitur a ligula
                id, efficitur faucibus urna. Duis quam ligula, lacinia id nisl
                eget, suscipit consequat mauris. Ut condimentum finibus purus,
                sit amet maximus nulla finibus sed. Donec cursus velit mauris, a
                fringilla sem cursus sed. Integer fermentum dolor sit amet
                mauris rhoncus efficitur. Duis pretium eleifend dictum.
              </Typography>
              <div style={{textAlign:'right'}}>
                <Typography variant='h4'><strong style={{color:'var(--myblue)'}}>Dr. Strange Charles </strong></Typography>
                <Typography variant='h5'><strong style={{color:'var(--myred)'}}>Principal, Cotton College </strong></Typography>

              </div>
            </Item>
          </Grid>
        </Grid>
  )
}
