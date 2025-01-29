import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import { setCountries } from "../homeSlice";
import Footer from '../../Common/Component/Footer';
import Header from '../../Common/Component/Header';
import { COUNTRY_API_URL } from '../constants';

const HomePage = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.home.countries);
  const [itemsToShow, setItemsToShow] = useState(10);
  const activeFilter = useSelector((state)=>state.common.activeFilter);

  useEffect(() => {
    axios.get(COUNTRY_API_URL).then((response) => {
      let filteredData = response.data;
      if (activeFilter && activeFilter !== "All") {
        filteredData = response.data.filter((country) => country.region === activeFilter);
      }
      dispatch(setCountries(filteredData));
    });
  }, [dispatch, activeFilter]);

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 10);
  };

  return (
    <Container className='p-2'>
      <Header />
      <Carousel>
        {countriesData?.slice(0, 4).map((item, index) => (
          <Carousel.Item key={index}>
            <div style={{ textAlign: "center" }}>
              <img
                src={item?.flag || ""}
                alt={"flag"}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {countriesData?.slice(0, itemsToShow)?.reduce((rows, val, index) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(val);
        return rows;
      }, [])?.map((row, rowIndex) => (
        <Row key={rowIndex} className="mt-3">
          {row?.map((val, colIndex) => (
            <Col key={colIndex} xs={12} sm={6} md={6} lg={6} xl={6} className="mb-3">
              <Card className="h-100">
                <Card.Body>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <div>
                      <img
                        style={{ width: "100px", height: "75px", objectFit: "cover", borderRadius: "5px" }}
                        alt="flag"
                        src={val?.flag || ""}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h5 style={{ margin: 0 }}>{val?.name}</h5>
                      <p style={{ margin: 0, fontSize: "14px", color: "gray" }}>{val?.region}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      {/* Load More Button */}
      {countriesData.length > itemsToShow && (
        <div className="d-flex justify-content-center mt-4 mb-3">
          <Button onClick={handleLoadMore} style={{ width: "200px", backgroundColor: "#3C3C3C", border: "none" }}>
            Load More
          </Button>
        </div>
      )}
      <Footer />
    </Container>
  );
};

export default HomePage;











