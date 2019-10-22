import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Flex } from 'rebass'

import { theme } from './theme'
import { Card } from './Card'

export const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Flex justifyContent="center">
        <Card />
      </Flex>
    </React.Fragment>
  </ThemeProvider>
)
