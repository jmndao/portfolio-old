import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import parse from 'html-react-parser';
import JCodeSVG from "../images/project.svg";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AppMenu from "../components/AppMenu";
import { Card, Col, Image, Result, Row, Spin, Tooltip } from "antd";
import { EllipsisOutlined, GithubOutlined, LoadingOutlined } from "@ant-design/icons";
import Meta from "antd/lib/card/Meta";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { listJCode } from "../actions/jcode.action";
import { Link } from "react-router-dom";
import AppFooter from "../components/AppFooter";

const Jcode = () => {
  const dispatch = useDispatch();

  const jcodeList = useSelector(state => state.jcodeList);
  const { loading, error, jcodes } = jcodeList;

  useEffect(() => {
    dispatch(listJCode());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Jmndao Portfolio | JCode</title>
        <meta name='description' content='JCode: learn to code with Jmndao' />
        <meta name='keywords' content='code, learn programming, becoming software developer, learn python, learn js, learn react' />
      </Helmet>
      <AppMenu
        currentPage="jCode"
      />
      <ParallaxProvider>
        <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
          <div className="jcode-top-img">
            <Image
              src={JCodeSVG}
              width={"100%"}
              height={"100%"}
              preview={false}
              className="home-image"
            />
          </div>
        </Parallax>
        <div className='jcode-text-content'>
          <span className='jcode-text-content-h'>
            Learn to code with me
          </span>
          <p>
            JCode is a space where we can tackle different code subject of different programming Language with me.
          </p>
        </div>
        <div className="jcode-content">
          {loading ? <Spin style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }} tip='Loading...' size='large' indicator={<LoadingOutlined />} />
            : error ? <Result
              status="500"
              title="500"
              subTitle="Sorry, something went wrong."
            /> : (
              <Fade cascade>
                <Row gutter={[16, 8]}>
                  {jcodes && jcodes.map(jcode => (
                    <Col sm={12} md={7} key={jcode._id} className="gutter-row m-1">
                      <Card
                        style={{ width: 300 }}
                        cover={
                          <img
                            alt={jcode.project}
                            src={jcode.image}
                          />
                        }
                        actions={[
                          <Tooltip placement="bottom" title="Github">

                            <a href={jcode.link} target="_blank" rel="noreferrer">
                              <GithubOutlined key="setting" />
                            </a>
                          </Tooltip>,
                          <Tooltip placement="bottom" title="See more">
                            <Link to={`/jCode/${jcode._id}`}>
                              <EllipsisOutlined key="ellipsis" />
                            </Link>
                          </Tooltip>,
                        ]}
                      >
                        <Meta
                          title={jcode.name}
                          description={jcode.description.length > 100 ? parse(jcode.description.substring(0, 100) + "...") : parse(jcode.description)}
                        />
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Fade>
            )
          }
        </div>
        <AppFooter />
      </ParallaxProvider>
    </div>
  );
};

export default Jcode;
