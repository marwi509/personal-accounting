import { Button, Card, Form, Row, Stack } from "react-bootstrap"
import { BankAccountTypeList } from "./constants"

export const BankAdmin = () => {

    return <>
        <Row>
  <h1>Bank admin</h1>
</Row>
<Row>
  <Stack className={'d-flex justify-content-start m-1'} direction={'horizontal'} gap={2}>
    <Card>
      <Card.Header>Add new bank account</Card.Header>
      <Card.Body>
        <Stack direction={'vertical'} gap={1}>
        <Form.Label>
          Name
        <Form.Control
        id='bankName'
          type='text'
        />
        </Form.Label>
        <Form.Label>
          Type
          <Form.Select>
            {BankAccountTypeList.map(t => <option value={t.type}>{t.name}</option>)}
          </Form.Select>
        </Form.Label>
        </Stack>

      </Card.Body>
      <Card.Footer><Button>Add</Button></Card.Footer>
    </Card>
    <Card>

    </Card>
    </Stack>
    </Row>
    </>
}