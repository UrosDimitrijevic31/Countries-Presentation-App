export const theme = {
    colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlue: 'hsl(207, 26%, 17%)',
        veryDarkBlu: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
    },
    breakpoints: {
        mobile: 'only screen and (min-width: 375px)',
        largeMobile: 'only screen and (min-width: 413px)',
        tablet: 'only screen and (min-width: 768px)',
        desktop: 'only screen and (min-width: 1440px)',
        desktopLarge: 'only screen and (min-width: 1920px)',

        maxMobile: 'only screen and (max-width: 767px)',
        maxTablet: 'only screen and (max-width: 1440px)',
        maxDesktop: 'only screen and (max-width: 1919px)',

        onlySmallMobile: 'only screen and (max-width: 320px)',
        onlyMobile: 'only screen and (max-width: 767px)',
        onlyTablet: 'only screen and (min-width: 768px) and (max-width: 1440px)',
        onlyMobileAndTablet: 'only screen and (max-width: 1440px)'
    },
    shadows: {
        standard: '0 0 5px rgba(0, 0, 0, 0.65)',
        darker: '0 0 5px rgba(0, 0, 0, 0.5)'
    }
};
export default theme;
