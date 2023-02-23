import { useTheme } from '../../context/theme-context';
import { Card, CardImg, CardInfo, CountryDetails, CountryName, Img, Span } from './index';

export default function Country({ src, alt, name, population, region, capital }) {
    const lightTheme = useTheme();

    return (
        <Card lightTheme={lightTheme}>
            <CardImg>
                <Img
                    src={src}
                    alt={alt}
                />
            </CardImg>
            <CardInfo>
                <CountryName>{name}</CountryName>
                <CountryDetails>
                    Population: <Span>{population.toLocaleString('en-US')}</Span>
                </CountryDetails>
                <CountryDetails>
                    Region: <Span>{region}</Span>
                </CountryDetails>
                <CountryDetails>
                    Capital: <Span>{capital}</Span>
                </CountryDetails>
            </CardInfo>
        </Card>
    );
}
