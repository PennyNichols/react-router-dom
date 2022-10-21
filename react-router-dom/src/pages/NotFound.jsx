import { Card } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Card className="mt-5 shadow">
      <Card.Body>
        <Card.Title className="text-center">ERROR 404: Page Not Found</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default NotFound