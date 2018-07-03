import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  // googleFonts: [
  //   {
  //     name: 'Amatic SC',
  //     styles: ['400, 700']
  //   },
  //   {
  //     name: 'Crimson Text',
  //     styles: ['400', '400i', '700', '700i']
  //   }
  // ],
  a: {
    color: 'rgba(0,0,0,.8)'
  },
  'a:hover': {
    color: 'rgba(0,0,0,.6)'
  }
});

const typography = new Typography(moragaTheme);

export default typography;
