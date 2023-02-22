import { Form, Search, SearchIcon, Wrapper } from './index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Select({ placeholder }) {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        console.log(e);
    };

    return (
        <Wrapper>
            <Form onSubmit={handleSubmit}>
                <button type='submit'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                <Search
                    placeholder={placeholder}
                    type='text'
                    onChange={handleChange}
                />
            </Form>
        </Wrapper>
    );
}
