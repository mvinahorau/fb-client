import {
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { tabsAnatomy } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define custom sizes
const sizes = {
  xl: definePartsStyle({
    tab: {
      fontSize: "0.875rem",
      py: "2",
      px: "4",
    },
    tabpanel: {
      py: "0",
      px: "0",
    },
  }),
};

// define custom variants
const fabletopiaVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      fontSize: "0.875rem",
      fontWeight: "semibold",
      bg: "transparent",
      borderRadius: "2rem",
      _selected: {
        bg: mode(`${c}.500`, `${c}.300`)(props),
        color: Colors.textColor1,
        borderColor: mode(`${c}.500`, `${c}.300`)(props),
      },
    },
    tablist: {
      borderBottom: "2x solid",
      borderColor: "inherit",
      padding: "2",
      backgroundColor: "rgba(255,255,255,0.1)",
      width: "fit-content",
      borderRadius: "3rem",
      marginBottom: "1.25rem",
    },
    tabpanel: {
      border: "transparent",
      borderColor: "inherit",
      px: 2,
      py: 0,
    },
  };
});

const variants = {
  fabletopia: fabletopiaVariant,
};


// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  sizes,
  variants,
});

export const Colors = {
  accentColor1: "#4BACA6",
  accentColor2: "#5C77D7",
  accentColor3: "#FC8D0C",
  textColor1: "#FFFFFF",
  textColor2: "#CFCDCD",
  textColor3: "#A4A4A4",
  backgroundColor1: "#545454",
  backgroundColor2: "#797979",
  backgroundColor3: "rgba(255,255,255,0.1)",
  backgroundColor4: "rgba(255,255,255,0.5)",
  backgroundColor5: "#242424",
  primary: {
    50: "#e1e8fb",
    100: "#becef6",
    200: "#9cb4f1",
    300: "#7a9aec",
    400: "#5780e7",
    500: "#4BACA6",
    600: "#2F8882",
    700: "#18534F",
    800: "#4BACA6",
    900: "#4BACA6",
  },
  secondary: {
    50: "#afecff",
    100: "#88e3ff",
    200: "#61d9ff",
    300: "#39d0ff",
    400: "#00c1fe",
    500: "#5C77D7",
    600: "#4861B8",
    700: "#344A96",
    800: "#0085af",
    900: "#00769c",
  },
  bg: {
    50: "#fbfbfb",
    100: "#F6F6F6",
    200: "#e2e2e2",
    300: "#c5c5c5",
    400: "#9e9e9e",
    500: "#8a8a8a",
    600: "#777777",
    700: "#595959",
    800: "#454545",
    900: "#1e1e1e",
  },
  gray: {
    50: "#F7FAFC",
    100: "#f3f4fb",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, 'Source Sans Pro', sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, 'Source Sans Pro', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  styles: {
    global: () => ({
      body: {
        color: "textColor1",
        bg: "backgroundColor1",
        scrollbarColor: "rgba(255,255,255,0.1) rgba(255,255,255,0) !important",
        scrollbarWidth: "thin !important",
      },
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "8px",
        bg: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "8px",
        bg: "backgroundColor3",
      },
      "&::-webkit-scrollbar-button": {
        display: "none",
      },
    }),
  },
  colors: {
    ...Colors,
  },
  components: {
    Text: {
      baseStyle: {
        color: "textColor1",
      },
      variants: {
        secondary: {
          color: "textColor2",
        },
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "2.5rem",
        _disabled: {
          opacity: 1,
          bg: "#545454",
          pointerEvents: "none",
        },
      },
      variants: {},
      sizes: {
        md: {
          h: "40px",
          fontSize: "sm",
          boxShadow: `0px 0px 0px 4px ${Colors.backgroundColor3}`,
          paddingLeft: "12",
          paddingRight: "12",
        },
        lg: {
          h: "60px",
          fontSize: "lg",
          boxShadow: `0px 0px 0px 4px ${Colors.backgroundColor3}`,
          paddingLeft: "10",
          paddingRight: "10",
        },
      },
      defaultProps: {
        size: "lg",
        colorScheme: "primary",
      },
    },
    Select: {
      variants: {
        langSelect: {
          field: {
            bg: Colors.backgroundColor3,
            fontWeight: "600",
            borderRadius: "2rem",
            pl: "4",
            pr: "9",
          },
        },
        filled: (props: StyleFunctionProps) => ({
          field: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "white",
            borderRadius: "8",
            _hover: {
              bg: props.colorMode === "dark" ? "whiteAlpha.100" : "white",
              borderColor:
                props.colorMode === "dark" ? "whiteAlpha.200" : "gray.200",
            },
            _focus: {
              bg: props.colorMode === "dark" ? "whiteAlpha.100" : "white",
              borderColor:
                props.colorMode === "dark" ? "whiteAlpha.200" : "gray.200",
            },
          },
        }),
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                top: -3,
                pt: 0,
                borderColor: Colors.backgroundColor2,
                fontSize: "sm",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                top: -3,
                pt: 0,
                borderColor: Colors.backgroundColor2,
                fontSize: "sm",
              },
            label: {
              top: 4,
              left: 7,
              zIndex: 2,
              position: "absolute",
              pointerEvents: "none",
              mx: 0,
              px: 2,
              pt: "1px",
              my: 0,
              transformOrigin: "left top",
              bg: "backgroundColor1",
              borderRadius: "1rem",
              border: "2px solid",
              borderColor: "backgroundColor1",
              fontSize: "md",
              lineHeight: "1.2",
              transition: "all 0.3s ease",
            },
          },
        },
      },
    },
    Input: {
      sizes: {
        lg: {
          field: {
            height: "60px",
          },
        },
      },
      defaultProps: {
        size: "lg",
        variant: "filled",
      },
      variants: {
        filled: () => ({
          field: {
            bg: "backgroundColor1",
            border: "0px",
            borderRadius: "2.5rem",
            boxShadow: `0px 0px 0px 2px ${Colors.backgroundColor3}`,
            transition: "all 0.2s ease",
            paddingLeft: "8",
            fontWeight: "600",
            _placeholder: {
              color: Colors.textColor2,
            },
            _hover: {
              bg: "backgroundColor1",
              boxShadow: `0px 0px 0px 2px ${Colors.accentColor1}`,
            },
            _focus: {
              bg: "backgroundColor1",
              boxShadow: `0px 0px 0px 2px ${Colors.accentColor1}`,
            },
            _readOnly: {
              bg: "backgroundColor1",
              boxShadow: `0px 0px 0px 2px ${Colors.backgroundColor3}`,
            },
          },
        }),
      },
    },
    Modal: {
      baseStyle: {
        dialog: {
          borderRadius: "25px",
          bg: Colors.backgroundColor5,
        },
        closeButton: {
          top: "3",
          borderRadius: "100%",
          w: "2.5rem",
          height: "2.5rem",
        },
      },
    },
    Skeleton: {
      baseStyle: () => ({
        borderRadius: { base: "15", md: "25" },
      }),
    },
    Alert: {
      variants: {
        solid: {
          container: {
            bg: Colors.accentColor1,
          },
        },
      },
    },
    Tag: {
      variants: {
        subtle: {
          container: {
            fontWeight: "bold",
            color: "#fff",
          },
        },
      },
      sizes: {
        xs: {
          container: {
            fontSize: "0.75rem",
            px: "0.5rem",
            borderRadius: "1.5rem",
            minH: "1.5rem",
          },
        },
        sm: {
          container: {
            fontSize: "0.75rem",
            px: "0.875rem",
            borderRadius: "1.5rem",
            minH: "1.5rem",
          },
        },
        md: {
          container: {
            fontSize: "0.875rem",
            px: "0.875rem",
            borderRadius: "1.75rem",
            minH: "1.75rem",
          },
        },
      },
    },
    Tabs: tabsTheme,
  },
});
