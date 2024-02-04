import { Col, Card, Button} from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>
          <Button variant="success" href={url} target="_blank" >View Project</Button> </p>
          
        </div>
      </div>
    </Col>
  )
}