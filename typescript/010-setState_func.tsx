import React, { useState } from 'react'

type Theme = "dark" | "light"
const [theme, setTheme ] = useState<Theme>("light")

type ThemeContext = {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}
