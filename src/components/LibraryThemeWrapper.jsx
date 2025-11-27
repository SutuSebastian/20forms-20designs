import { useMemo } from 'react'
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Theme as RadixTheme } from '@radix-ui/themes'
import { GravityUiWrapper } from '@/component-libraries/gravity-ui/GravityUiWrapper'

const DaisyUiThemeWrapper = ({ themeMode, children }) => {
  const dataTheme = themeMode === 'dark' ? 'dark' : 'light'
  return (
    <div data-theme={dataTheme}>
      {children}
    </div>
  )
}

const RadixUiThemeWrapper = ({ themeMode, children }) => {
  const appearance = themeMode === 'dark' ? 'dark' : 'light'
  return <RadixTheme appearance={appearance}>{children}</RadixTheme>
}

const MuiThemeWrapper = ({ themeMode, children }) => {
  const appearance = themeMode === 'dark' ? 'dark' : 'light'
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: appearance },
      }),
    [appearance]
  )

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

const gravityWrapper = ({ themeMode, children }) => (
  <GravityUiWrapper themeMode={themeMode}>{children}</GravityUiWrapper>
)

const BlueprintThemeWrapper = ({ themeMode, children }) => {
  if (themeMode !== 'dark') return children
  return <div className="bp5-dark">{children}</div>
}

const wrappers = {
  MUI: MuiThemeWrapper,
  'Radix UI': RadixUiThemeWrapper,
  daisyUI: DaisyUiThemeWrapper,
  'Gravity UI': gravityWrapper,
  Blueprint: BlueprintThemeWrapper,
}

function LibraryThemeWrapper({ library, themeMode = 'light', children }) {
  const Wrapper = wrappers[library]
  if (!Wrapper) return children
  return <Wrapper themeMode={themeMode}>{children}</Wrapper>
}

const librarySupportsTheme = (library) => Boolean(wrappers[library])

export { LibraryThemeWrapper, librarySupportsTheme }
