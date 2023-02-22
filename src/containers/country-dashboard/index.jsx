import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { endpoints } from '../../api/endpoints';
import { axiosInstance } from '../../service/axiosService';
import { BorderCountriesWrapper, BtnWrapper, CountryWrapper, Details, Flag, Info, InfoWrapper, Title, ViewOnMapWrapper } from './index';

export default function CountryDashboard() {
    let { name } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [isLOading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(name);

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

    if (country) console.log(country);

    return (
        <>
            <BtnWrapper>
                <button onClick={goBack}>Back</button>
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
                                    <div className='LeftSide'>
                                        {/* <p>
                                            Native Name: <span>{item.name.nativeName.nld}</span>
                                        </p> */}
                                        <p>
                                            Population: <span>11,319.511</span>
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
                                    </div>
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
                                        className='ViewOnMapBtn'
                                        onClick={handleOpenGoogleMap(item.maps.googleMaps)}
                                    >
                                        View on Map
                                    </button>
                                </ViewOnMapWrapper>
                                <BorderCountriesWrapper>
                                    <Title>Border countries</Title>
                                    <div className='BorderCountries'>
                                        <button>France</button>
                                        <button>Germany</button>
                                        <button>Netherland</button>
                                    </div>
                                </BorderCountriesWrapper>
                            </InfoWrapper>
                        </Info>
                    </CountryWrapper>
                ))}
        </>
    );
}
