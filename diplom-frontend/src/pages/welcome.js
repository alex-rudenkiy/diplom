import logo from '../resources/easylogo.svg';
import React from "react";
import {Button, Col, Image, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import FormControl from "@material-ui/core/FormControl";
import Form from "react-bootstrap/Form";
import col from "react-bootstrap/Col";
import graffityImg from '../resources/graffity_image.png';
import simg1 from "../resources/park.png";
import simg2 from "../resources/vandalism.png";
import simg3 from "../resources/park (1).png";
import simg4 from "../resources/playing.png";
import sponsorLogo1 from "../resources/sponsor1.png";
import sponsorLogo2 from "../resources/sponsor2.png";
import sponsorLogo3 from "../resources/sponsor3.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faTelegram, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import SponsorLogo from "../components/SponsorLogo";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router-dom";
import HeaderNav from "../components/headerNav";
import useBackendApi from "../logic/BackendApiHook";
import CanvasDraw from "react-canvas-draw";
import { ReactSketchCanvas } from "react-sketch-canvas";

function WelcomePage() {

    const history = useHistory();

    function handleClick1() {
        history.push("/makeRequest");
    }

    function handleClick2() {
        history.push("/request");
    }

    const styles = {
        border: "0.0625rem solid #9c9c9c",
        borderRadius: "0.25rem",
    };

    return (
        <div className="App">

            <div>

                <CanvasDraw />
                <ReactSketchCanvas
                    style={styles}
                    width="600"
                    height="400"
                    strokeWidth={4}
                    strokeColor="red"
                />


                <header className="masthead">

                    <HeaderNav/>

                    {/*<div className="container h-100">*/}
                        {/*Page Content*/}
                        <section className="pb-5 pt-5">
                            <div className="container pl-sm-5">

                                <Row>
                                    <Col xl={4} md={4} sm={10} xs={10}>
                                        <Row>
                                            {/*
                                    <h2 className="font-weight-light text-left ">Нашли недостаток?</h2>
*/}
                                            <div className="gradient-all text-left" style={{    height: "1em"}}>Нашли недостаток?</div>

                                        </Row>
                                        <Row>
                                            <p className={"text-left"}>Мы поможем вам исправить</p>
                                        </Row>
                                        <Row className={"row pr-5"} style={{marginBottom: "1em", marginTop: "2em"}}>
                                            <Button variant="btn btn-primary w-100" onClick={handleClick1}>Зафиксировать нарушение</Button>
                                        </Row>
                                        <Row className={"row pr-5"} style={{marginTop: "1em"}}>
                                            <Button variant="btn btn-outline-primary w-100" onClick={handleClick2}>Проверить статус заявления</Button>
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Image style={{maxWidth: "32em"}} src={graffityImg} fluid/>
                                    </Col>
                                </Row>

                            </div>
                        </section>

                        <section className="pb-5 pt-5">
                            <div className="container pl-sm-5">
                                <Row>
                                    <h2 className="font-weight-light text-left">За последнюю неделю</h2>
                                </Row>

                                <Row className={"align-items-stretch mt-3"}>
                                    <Col>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title"><Image style={{maxWidth: "4em"}} src={simg4} fluid/></h5>
                                                <p className="card-text">Отреставрировано 12 детских площадок</p>
                                                <button type="button" className="btn btn-primary btn-sm btn-block"
                                                        onClick="location.href = '';">Посмотреть
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title"><Image style={{maxWidth: "4em"}} src={simg2} fluid/></h5>
                                                <p className="card-text">Закрашено 25 граффити</p>
                                                <button type="button" className="btn btn-primary btn-sm btn-block"
                                                        onClick="location.href = '';" style={{marginTop:"auto"}}>Посмотреть
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title"><Image style={{maxWidth: "4em"}} src={simg1} fluid/></h5>
                                                <p className="card-text">Починено 16 лавочек</p>
                                                <button type="button" className="btn btn-primary btn-sm btn-block"
                                                        onClick="location.href = '';" style={{marginTop:"auto"}}>Посмотреть
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h5 className="card-title"><Image style={{maxWidth: "4em"}} src={simg3} fluid/></h5>
                                                <p className="card-text">Посажено 20 деревьев</p>
                                                <button type="button" className="btn btn-primary btn-sm btn-block"
                                                        onClick="location.href = '';" style={{marginTop:"auto"}}>Посмотреть
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                            </div>

                            <p className={"mt-5"} style={{color: "#a3a2a2"}}>... и ещё 76 новых событий</p>
                        </section>


                    {/*</div>*/}
                </header>




                <section className="pb-5 pt-5" style={{background: "#2e64ff"}}>
                    <div className="container pl-sm-5">
                        <div className="container">
                            <h2 className="font-weight-light" style={{color: "#f8f8f8"}}>Наиболее активные организации</h2>

                            <div className="row pt-4">

                                <div className="col">
                                    <SponsorLogo src={sponsorLogo1} name={'ООО "ЖБК-1"'}/>
                                </div>

                                <div className="col">
                                    <SponsorLogo src={sponsorLogo3} name={'Администрация г.Белгорода'}/>
                                </div>

                                <div className="col">
                                    <SponsorLogo src={sponsorLogo2} name={'АПХ "МИРАТОРГ"'}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                <section className="pb-5 pt-5">
                    <div className="container pl-sm-5">
                        <Row>
                            <h2 className="font-weight-light text-left">Как работает наша система</h2>
                        </Row>
                        <div className="embed-responsive embed-responsive-16by9 mt-5" style={{maxWidth:"50em", marginLeft:"auto", marginRight:"auto"}}>
                            <iframe
                                    src="https://www.youtube-nocookie.com/embed/40VfZ_nIFWI?controls=0" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>


                </section>


                <footer className="footer">
                    <div className="footer-left col-md-2 col-sm-6">
                        <h2> POVTAS </h2>
                        <div className="icons">

                            <a href="#"><i><FontAwesomeIcon icon={faVk}/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faTelegram}/></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faDiscord}/></i></a>

                        </div>
                    </div>
                    <div className="footer-center col-md-3 col-sm-6">
                        <h5>Контактные данные</h5>
                        <div>
                            <i><FontAwesomeIcon icon={faMapMarker}/></i>
                            <p><span>г. Белгород, ул. Костюкова 46</span></p>
                        </div>
                        <div>
                            <i><FontAwesomeIcon icon={faPhone}/></i>
                            <p> (+7) 800 555 35 35</p>
                        </div>
                        <div>
                            <i><FontAwesomeIcon icon={faEnvelope}/></i>
                            <p><a href="#"> alex-rudenkiy@bstu.edu</a></p>
                        </div>
                    </div>
                    <div className="footer-center col-md-3 col-sm-6">
                        <h5>Поддержка</h5>
                        <p className="menu">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Партнерские программы</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Видеоинструкции</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Сообщить об ошибке</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Трудоустройство</a>
                                </li>
                            </ul>

                        </p>
                    </div>
                    <div className="footer-center col-md-4 col-sm-6">
                        <h5>Подписаться на новостную рассылку</h5>
                        <div style={{maxWidth: "30em"}}><FormControl className={"mt-3 pl-2 pr-2 pt-2"} variant="filled"
                                                                     style={{background: "white"}} fullWidth>
                            <Input
                                id="outlined-adornment-weight"
                                //value={values.weight}
                                //onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end"><FontAwesomeIcon
                                    icon={faAt}/></InputAdornment>}
                                placeholder={"ваш электронный адрес"}
                                labelWidth={0}
                            />
                        </FormControl>
                            <Button className={"align-self-end float-right mt-3"}
                                    variant="btn btn-outline-light">Подписаться</Button></div>


                    </div>
                    <p className="name mt-5"> Copyright &copy; ПОВТАС, 2021. Пользовательское соглашение Соглашение об
                        обработке персональных данных. 12+</p>
                </footer>


            </div>
        </div>
    );
}

export default WelcomePage;
