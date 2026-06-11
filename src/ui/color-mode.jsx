import { ThemeProvider } from 'next-themes';

export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      forcedTheme="light"
      disableTransitionOnChange
      {...props}
    />
  );
}
