import Typography from "typography";
import kirkhamTheme from "typography-theme-kirkham";

kirkhamTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a': {
        color: '#a29bfe',
    },
});
const typography = new Typography(kirkhamTheme);
export default typography;
