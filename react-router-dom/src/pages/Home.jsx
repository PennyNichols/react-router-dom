import { Card , Button} from 'react-bootstrap'

const Home = () => {
  return (

    <Card className="mt-5 w-50 m-auto shadow">
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

      <Card.Body className="text-center">
        <Button variant="primary"> Locate Now</Button>
      </Card.Body>
    </Card>
  )
}

export default Home