import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: 'rgba(0,0,0,.8)'
  },
  'a:hover': {
    color: 'rgba(0,0,0,.6)'
  }
});

const typography = new Typography(moragaTheme);

export default typography;
