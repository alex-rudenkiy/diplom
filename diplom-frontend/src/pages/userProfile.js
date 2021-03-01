import logo from '../resources/logo.png';
import React from "react";
import {Button, Carousel, Col, Image, Row} from 'react-bootstrap';
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
import avatar from "../resources/avatar.jpg";
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
import TopImagePreview from "../resources/topImagePreview.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ViewsIcon from "@material-ui/icons/Visibility";
import MessageIcon from "@material-ui/icons/Message";
import Pagination from "@material-ui/lab/Pagination";
import Calendar from "react-responsive-carousel/lib/styles/carousel.css"
import templateImage from "../resources/default-social-8-96d057f8e815a2ed90ed7e8808a2c7e3.png"
import IconButton from "@material-ui/core/IconButton";
import vkIcon from "../resources/vk_icon.svg";
import googleIcon from "../resources/google_icon.svg";
import okIcon from "../resources/ok_icon.svg";
import Badge from "@material-ui/core/Badge";

function UserProfilePage() {
    var Carousel = require('react-responsive-carousel').Carousel;

    return (

        <div className="App">

            <div>
                <Navbar className={"mb-5"} bg="none" expand="lg">
                    <Navbar.Brand href="#home"><img style={{width: "235px"}} src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Доска почёта</Nav.Link>
                            <Nav.Link href="#link1">Карта проблем</Nav.Link>
                            <Nav.Link href="#link">Архив проблем</Nav.Link>
                            <NavDropdown title="Помощь" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Архив проблем</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form>
                            <Button variant="btn btn-outline-primary">Войти в личный кабинет</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>



                <section className="pb-5 pt-0">
                    <div className="container pl-sm-5">
                        <div className="container">
                            <div className="row">
                                <div className="col">


                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h5 style={{color:"#276dd5"}}>84</h5>
                                                <p style={{lineHeight: "1em", color:"#6c6c6c"}}>Выявленно недостатков</p>
                                            </div>
                                            <div className="col-sm">
                                                <h5 style={{color:"#276dd5"}}>84</h5>
                                                <p style={{lineHeight: "1em", color:"#6c6c6c"}}>Выявленно недостатков</p>
                                            </div>
                                            <div className="col-sm">
                                                <h5 style={{color:"#276dd5"}}>84</h5>
                                                <p style={{lineHeight: "1em", color:"#6c6c6c"}}>Выявленно недостатков</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-2">

                                    <Badge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        badgeContent={<Row><IconButton style={{width:"1em", height:"1em", padding:"0"}} color="primary" aria-label="add to shopping cart">
                                            <Image src={vkIcon} style={{width:"2em"}}/>
                                        </IconButton><IconButton style={{width:"1em", height:"1em", padding:"0"}} color="primary" aria-label="add to shopping cart">
                                            <Image src={googleIcon} style={{width:"2em"}}/>
                                        </IconButton></Row>
                                        }
                                    >
                                        <Avatar alt="Remy Sharp" src={avatar} style={{width:"5em", height:"5em", margin:"auto"}}/>

                                    </Badge>


                                </div>
                                <div className="col text-left">
                                    <h4 style={{color:"#6c6c6c"}}>Астахов Виктор</h4>
                                    <h5 style={{color:"#bfb8b8"}}>@astah84ru</h5>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="pb-5 pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="container pl-sm-5 text-left">

                                    <p>Описание</p>
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.  </h5>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="container pl-sm-5 text-left">
                                    <p>Галерея</p>

                                    <div style={{width:"inherit"}}>
                                        <Carousel showArrows={true}  >
                                            <div>
                                                <img src={templateImage} />
                                                <p className="legend">Legend 1</p>
                                            </div>
                                            <div>
                                                <img src={templateImage} />
                                                <p className="legend">Legend 1</p>
                                            </div>
                                            <div>
                                                <img src={templateImage} />
                                                <p className="legend">Legend 1</p>
                                            </div>
                                            <div>
                                                <img src={templateImage} />
                                                <p className="legend">Legend 1</p>
                                            </div>
                                            <div>
                                                <img src={templateImage} />
                                                <p className="legend">Legend 1</p>
                                            </div>
                                        </Carousel>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="pb-5 pt-0">
                    <div className="container pl-sm-5 text-left">
                        <p>Зафиксированые недостатки</p>

                        <div className="list-group">
                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>

                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>
                            <button type="button" className="list-group-item list-group-item-action">
                                <Row style={{marginLeft:"1em"}}>
                                    <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                    <Col>
                                        <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                        <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                    </Col>
                                </Row>
                            </button>


                            <div className={"pt-4"} style={{alignSelf: "center"}}>
                                <Pagination count={10} page={0} />
                            </div>

                        </div>
                    </div>
                </section>





                        <footer className="footer">
                    <div className="footer-left col-md-2 col-sm-6">
                        <h2> POVTAS </h2>
                        <div className="icons">

                            <a href="#"><i><FontAwesomeIcon icon={faVk} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faTelegram} /></i></a>
                            <a href="#"><i><FontAwesomeIcon icon={faDiscord} /></i></a>

                        </div>
                    </div>
                    <div className="footer-center col-md-2 col-sm-6">
                        <h5>Контактные данные</h5>
                        <div>
                            <i><FontAwesomeIcon icon={faMapMarker} /></i>
                            <p><span>г. Белгород, ул. Костюкова 46</span></p>
                        </div>
                        <div>
                            <i><FontAwesomeIcon icon={faPhone} /></i>
                            <p> (+7) 800 555 35 35</p>
                        </div>
                        <div>
                            <i><FontAwesomeIcon icon={faEnvelope} /></i>
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
                    <div className="footer-center col-md-5 col-sm-6">
                        <h5>Подписаться на новостную рассылку</h5>
                        <div style={{maxWidth:"30em"}}><FormControl className={"mt-3 pl-2 pr-2 pt-2"} variant="filled" style={{background:"white"}} fullWidth>
                            <Input
                                id="outlined-adornment-weight"
                                //value={values.weight}
                                //onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end"><FontAwesomeIcon icon={faAt} /></InputAdornment>}
                                placeholder={"ваш электронный адрес"}
                                labelWidth={0}
                            />
                        </FormControl>
                            <Button className={"align-self-end float-right mt-3"}
                                    variant="btn btn-outline-light">Подписаться</Button></div>


                    </div>
                    <p className="name mt-5"> Copyright &copy; ПОВТАС, 2021. Пользовательское соглашение Соглашение об обработке персональных данных. 12+</p>
                </footer>

            </div>
        </div>
    );
}

export default UserProfilePage;
