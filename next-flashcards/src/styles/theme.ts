import { createTheme, Title, Text } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  colors: {
    primary: [
      "#EDE9FE",
      "#C4B5FD",
      "#A78BFA",
      "#8B5CF6",
      "#7D2AE8",
      "#6D28D9",
      "#5B21B6",
      "#4C1D95",
      "#3A1D7D",
      "#291B5A",
    ],
    secondary: [
      "#CCFBF1",
      "#99F6E4",
      "#5EEAD4",
      "#2DD4BF",
      "#14B8A6",
      "#0D9488",
      "#0F766E",
      "#115E59",
      "#134E4A",
      "#0D3F3D",
    ],
    success: [
      "#D1FAE5",
      "#A7F3D0",
      "#6EE7B7",
      "#34D399",
      "#10B981",
      "#059669",
      "#047857",

      "#065F46",
      "#064E3B",
      "#0D3328",
    ],
    warning: [
      "#FEF3C7",
      "#FDE68A",
      "#FCD34D",
      "#FBBF24",
      "#F59E0B",
      "#D97706",
      "#B45309",
      "#92400E",
      "#78350F",
      "#572508",
    ],
    error: [
      "#FEE2E2",
      "#FECACA",
      "#FCA5A5",
      "#F87171",
      "#EF4444",
      "#DC2626",
      "#B91C1C",
      "#991B1B",
      "#7F1D1D",
      "#702424",
    ],
    neutral: [
      "#F3F4F6",
      "#E5E7EB",
      "#D1D5DB",
      "#9CA3AF",
      "#6B7280",
      "#4B5563",
      "#1E1B4B",
      "#111827",
      "#0F172A",
      "#090C17",
    ],
  },
  components: {
    Text: Text.extend({
      defaultProps: {
        size: "md",
        color: "white",
      },
    }),
    Title: Title.extend({
      defaultProps: {
        style: { color: "white" },
      },
    }),
  },
  primaryColor: "primary",
});
