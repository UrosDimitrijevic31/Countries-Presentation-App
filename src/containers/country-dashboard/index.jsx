import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { endpoints } from '../../api/endpoints';
import { axiosInstance } from '../../service/axiosService';
import {
    BackBtn,
    BorderCountriesWrapper,
    BtnWrapper,
    Container,
    CountryWrapper,
    Details,
    Flag,
    Info,
    InfoWrapper,
    Title,
    ViewOnMapWrapper,
    LeftSide,
    BorderCountries
} from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../context/theme-context';

export default function CountryDashboard() {
    const lightTheme = useTheme();
    let { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [isLOading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchCountry = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axiosInstance.get(`${endpoints.COUNTRY}/${name}`);
                if (response && response.data) setCountry(response.data);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };

        fetchCountry();
    }, [name]);

    const handleOpenGoogleMap = (e) => {
        console.log(e);
    };

    return (
        <Container>
            <BtnWrapper>
                <BackBtn
                    onClick={goBack}
                    lightTheme={lightTheme}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    &nbsp;&nbsp;Back
                </BackBtn>
            </BtnWrapper>
            {country &&
                country.map((item, index) => (
                    <CountryWrapper key={index}>
                        <Flag>
                            <img
                                src={item.flags.svg}
                                alt={item.flags.alt}
                            />
                        </Flag>
                        <Info>
                            <InfoWrapper>
                                <h1>{item.name.common}</h1>
                                <Details>
                                    <LeftSide>
                                        {/* <p>
                                            Native Name: <span>{item.name.nativeName.nld}</span>
                                        </p> */}
                                        <p>
                                            Population: <span>{item.population.toLocaleString('en-US')}</span>
                                        </p>
                                        <p>
                                            Region: <span>{item.region}</span>
                                        </p>
                                        <p>
                                            Sub Region: <span>{item.subregion}</span>
                                        </p>
                                        <p>
                                            Capital: <span>{item.capital[0]}</span>
                                        </p>
                                    </LeftSide>
                                    <div className='RightSide'>
                                        <p>
                                            Top Level Domain: <span>{item.tld[0]}</span>
                                        </p>
                                        <p>
                                            Currencies:<span>{item.currencies.name}</span>
                                        </p>
                                        <p>{/* Language: <span>{item.languages}</span> */}</p>
                                    </div>
                                </Details>

                                <ViewOnMapWrapper>
                                    <button
                                        lightTheme={lightTheme}
                                        className='ViewOnMapBtn'
                                        onClick={handleOpenGoogleMap(item.maps.googleMaps)}
                                    >
                                        <Link
                                            to={item.maps.googleMaps}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            View on Map
                                        </Link>
                                    </button>
                                </ViewOnMapWrapper>
                                <BorderCountriesWrapper>
                                    <Title>Border countries:</Title>
                                    <BorderCountries>
                                        <div>
                                            <button>France</button>
                                        </div>
                                        <div>
                                            <button>Germany</button>
                                        </div>
                                        <div>
                                            <button>Netherland</button>
                                        </div>
                                    </BorderCountries>
                                </BorderCountriesWrapper>
                            </InfoWrapper>
                        </Info>
                    </CountryWrapper>
                ))}
        </Container>
    );
}
