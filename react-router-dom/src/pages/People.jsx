import React, { useState, useEffect } from 'react'; 
import { Row, Col, Card, Button} from'react-bootstrap'

const People = () => {
  const [users, setUsers] = useState([])

  const fetchUsers = async() => { 
    const res = await fetch('https://randomuser.me/api/?results=50')
    const { results } = await res.json();

    setUsers(results)
  }

  useEffect(() => { 
    fetchUsers()
  }, [])


  return (
    <Row className="mt-5">
      { users.map((user) => (
        <Col key={ user.id.value }>
          <Card style={ { width: '18rem' } } className="my-3 shadow">
            <Card.Img variant="top" src={ user.picture.large } />
            <Card.Body>
              <Card.Title>{ user.name.first } { user.name.last }</Card.Title>
              <Card.Text>
                { user.location.country }
              </Card.Text>
              <Button variant="primary">Profile</Button>
            </Card.Body>
          </Card>
        </Col>
      )
   )}
   </Row>
  )
}

export default People