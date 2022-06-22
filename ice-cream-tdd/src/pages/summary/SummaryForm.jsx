import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SummaryForm() {
    const [isChecked, setIsChecked] = useState(false)

    const checkboxLabel = (
        <>Terms and Conditions</>
    );

    return (
        <Form>
            <Form.Group>
                <Form.Check
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    label={checkboxLabel}
                     />
            </Form.Group>
            <Button variant='primary' type='submit' disabled={!isChecked}> Confirm Order </Button>
        </Form>
    )
}