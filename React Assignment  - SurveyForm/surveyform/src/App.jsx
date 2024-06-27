import { Container } from "react-bootstrap"
import SurveyForm from "./SurveyForm"

function App() {
  
  return (
    <>
      <Container className="my-5 text-light bg-danger">
      <h1 className ="text-center my-0 text-light mt-4" >Survey Form</h1>
      <SurveyForm />
      </Container>
    </>
  )
}

export default App
