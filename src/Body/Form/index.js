import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage, setSearchParams } from '../../Services/stateService'


function FormComponent({ show, handleClose }) {
    const { q, language, searchIn } = useSelector(state => state) || {};
    const [startDateFrom, setStartDateFrom] = useState(new Date());
    const [startDateTo, setStartDateTo] = useState(new Date());
    const dateFormat = "dd.MM.yyyy";
    const pageSize = useSelector((state) => state.pageSize);
    const dispatch = useDispatch();



    const languages = [
        { label: 'English', code: 'en' },
        { label: 'Russian', code: 'ru' },
        { label: 'Germany', code: 'de' },
        { label: 'French', code: 'fr' },
        { label: 'Spanish', code: 'es' },
    ];

    function capitalize(str) {
        return str[0].toUpperCase() + str.substring(1);
    };
    // Events are the interaction between the user and the application
    // User does something in browser, browser catches this information and passes it to our application, depending on the triggers, the application processes received data
    // Triggers are different, for example, when you click on the mouse button is called on-click
    // Triggers are hung on the elements that we want to monitor
    // Triggers run handlers (regular functions)
    // Browsers pass a full action/event report to our handlers as an object DOM
    // The main property of this object is a target that stores information about the element on which the event occurred

    async function handleSubmit(event) {
        event.preventDefault();
        // PreventDefault - this function causes the browser to stop performing the action it knows about this event
        // In our case, it forces us to cancel sending data to the server

        const data = {
            q: event.target.q.value,
            from: moment(startDateFrom).format("YYYY-MM-DDT00:00:00.000"),
            to: moment(startDateTo).format("YYYY-MM-DDT23:59:59.999"),
            language: event.target.language.value,
            searchIn: [...event.target.searchIn].filter(input => input.checked).map(input => input.value).join(','),
            pageSize, page: 1,
        };

        if (moment(data.from).isAfter(data.to)) {
            dispatch(setErrorMessage("Wrong data from"));
            return;
        }

        // useParams it's a hook react-redux-dom to get a reaction from a link
        dispatch(setSearchParams(data));
        handleClose();
    };

    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search News</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Keywords:</Form.Label>
                        <Form.Control
                            type="text"
                            name="q"
                            placeholder="Enter keyword and phrases"
                            defaultValue={q}
                        />
                        <Form.Text className="text-muted">
                            Advanced search is supported here!
                        </Form.Text>
                    </Form.Group>
                    {['title', 'description', 'content'].map((type) => (
                        <div key={`${type}`} className="mb-3">
                            <Form.Check
                                label={capitalize(type)}
                                name="searchIn"
                                type="checkbox"
                                value={type}
                                id={`inline-${type}-1`}
                                defaultChecked={searchIn.includes(type)}
                            />
                        </div>
                    ))}
                    <Form.Group className="mb-3">
                        <Form.Label>From - To</Form.Label>
                        <InputGroup className="mb-3 flex-nowrap" >
                            <DatePicker
                                className="form-control"
                                selected={startDateFrom}
                                onChange={(date) => setStartDateFrom(date)}
                                name="from"
                                dateFormat={dateFormat}
                            />
                            <DatePicker
                                className="form-control"
                                selected={startDateTo}
                                onChange={(date) => setStartDateTo(date)}
                                name="to"
                                dateFormat={dateFormat}
                            />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select language</Form.Label>
                        <Form.Select name="language" defaultValue={language}>
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.label}</option>
                            )
                            )}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">
                        Search
                    </Button>
                </Form>

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default FormComponent;