import React, { useState, useEffect } from 'react';
import { Modal, Button, Card,  Row, Col,  Descriptions} from 'antd';

const { Meta } = Card;




const Cards = (movies) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Id, setId] = useState([]);
  const [movieSearched, setMovieSearched] = useState([]);

  const showModal = (id) => {
    setId(id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };


  function onPanelChange(value, mode) {
    console.log(value, mode);
  };

  return (
    <>
    <Row style={{margin: "auto 15%"}}>
      {movies.map((movie) => (
        <Col span={8}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={movie.Poster} />}
            actions={[
              <Button
                type="link"
                onClick={() => showModal(movie.imdbID)}
              >
                Ver más
              </Button>,
            ]}
    
          >
            <Meta title={movie.Title} description={movie.Year} />
          </Card>
          <Modal
            title="Detalles de la película"
            visible={isModalVisible}
            onOk={handleOk}
          >
        {movie && (
          <Descriptions bordered>
            <Descriptions.Item label="Título">
              {movie.Title}
              {movie.Year}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
        </Col>
      ))

      }
    </Row>

    </>
  );
};



export default Cards;
