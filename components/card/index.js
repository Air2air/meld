import React from "react";

import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CardHeader from "./card-header";
import CardFooter from "./card-footer";
import services from "../../data";

const Card = () => {
  return (
    <Row xs={1} sm={1} md={2} lg={2} xl={3}>
      {services.map((service) => {
        const {
          serviceId,
          serviceName,
          serviceDesc,
          isCompleted,
          startTime,
          endTime,
          color,
          image,
          jobStatus,
          completion,
        } = service;
        return (
          <Col key={serviceId} className="mb-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 1 }}
              transition={{ duration: 0.15 }}
              className="card"
            >
              <CardHeader
                color={color}
                serviceName={serviceName}
                serviceDesc={serviceDesc}
                jobStatus={jobStatus}
              />

              <div className="card-body">



              </div>
              <CardFooter></CardFooter>
            </motion.div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Card;
