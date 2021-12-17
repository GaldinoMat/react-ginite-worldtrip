import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      "Headings": "#47585B",
      "Text": "#999999",
    },
    white: {
      "Background": "#FFFFFF",
      "HeroText": "#F5F8FA"
    },
    yellow: {
      "Highlight": "#FFBA08"
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "white.Background",
        color: "gray.Text",
      }
    }
  }
})