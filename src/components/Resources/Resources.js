import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "./ResourceCard";
import Resources2 from "./Resources2";


function Resources() {
    return (
        <section>
            <><Container fluid className="resources-section">
                <Container>
                    <h1 className="resources-heading">
                        resources
                    </h1>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={6} className="resource-card">
                            <ResourceCard
                                name="for members" />
                        </Col>

                        <Col md={6} className="resource-card">
                            <ResourceCard
                                name="general resources" />
                        </Col>
                    </Row>
                </Container>
            </Container><Resources2 /></>
        </section>
    );
}

export default Resources;