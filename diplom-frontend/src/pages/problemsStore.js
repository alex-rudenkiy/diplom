import logo from '../resources/easylogo.svg';
import React from "react";
import {Button, Col, Container, Image, Jumbotron, Row} from 'react-bootstrap';
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
import TopImagePreview from "../resources/topImagePreview.png";
import sponsorLogo3 from "../resources/sponsor3.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk, faTelegram, faDiscord} from '@fortawesome/free-brands-svg-icons'
import {faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import ViewsIcon from '@material-ui/icons/Visibility';
import MessageIcon from '@material-ui/icons/Message';
import Typography from "@material-ui/core/Typography";
import Pagination from '@material-ui/lab/Pagination';
import {ExampleModalMap} from '../components/ExempleModalMap.js';
import Modal from "react-bootstrap/Modal";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import IconButton from "@material-ui/core/IconButton";
import MapIcon from "../resources/map_icon.svg";
//import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import zvezdi from "../resources/templateImage.png"
import okIcon from "../resources/ok.svg"

import templateImage from "../resources/topImagePreview.png";
import CarouselPage from "../components/CarouselPage";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../resources/avatar.jpg";
import Badge from "@material-ui/core/Badge";
import { Alert, AlertTitle } from '@material-ui/lab';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';

function ProblemsStorePage() {

    const mdbreact = require('mdbreact');
    const { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBModalFooter } = mdbreact;
    var Carousel = require('react-responsive-carousel').Carousel;
    var Blur = require('react-blur').default;

    console.log(zvezdi);

    return (
        <div className="App">

            <div className="d-md-none">
                <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="#">Start Bootstrap</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#">Home
                                        <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <header class="masthead">
                    <div class="container h-100">
                        <div class="row h-100 align-items-center">
                            <div class="col-12 text-center">
                                <h1 class="font-weight-light">Vertically Centered Masthead Content</h1>
                                <p class="lead">A great starter layout for a landing page</p>
                            </div>
                        </div>
                    </div>
                </header>

                <section class="py-5">
                    <div class="container">
                        <h2 class="font-weight-light">Page Content</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ab nulla dolorum autem
                            nisi officiis blanditiis voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
                            cumque magnam enim fugiat reprehenderit expedita.</p>
                    </div>
                </section>
            </div>



{/*
            <MDBModal isOpen={true} size="lg">

                <MDBModalHeader>MDBModal title</MDBModalHeader>

                <MDBModalBody style={{ border: "none", padding:"0px"}}>
                    <div className="row" style={{    marginLeft:' -1em'}}>
                        <div className="col-sm-8 pl-0" style={{background:'url('+zvezdi+')', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                        </div>
                        <div className="col-sm-4 pt-4 pl-4 pr-4 pb-4">

                            <Row className={"d-flex mb-0 ml-1"}>
                                <h3 className="font-weight-light text-left flex-grow-1">Заявка №78 (от 08.02.21)</h3>

                                <PopupState variant="popover" popupId="demo-popup-menu" style={{float:"right"}}>
                                    {(popupState) => (
                                        <React.Fragment>

                                            <IconButton
                                                aria-label="more"
                                                aria-controls="long-menu"
                                                aria-haspopup="true"
                                                style={{    width: "1.5em",
                                                    height: "1.5em", marginRight:"1em"}}
                                                {...bindTrigger(popupState)}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>

                                            <Menu {...bindMenu(popupState)}>
                                                <MenuItem onClick={popupState.close}>Скачать сопутствующие документы</MenuItem>
                                                <MenuItem onClick={popupState.close}>Редактировать</MenuItem>
                                                <MenuItem onClick={popupState.close}>Закрыть</MenuItem>
                                            </Menu>
                                        </React.Fragment>
                                    )}
                                </PopupState>

                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    style={{    width: "1.5em",
                                        height: "1.5em", marginRight:"1em"}}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Row>





                            <div className="row ml-1">
                                <Avatar alt="Remy Sharp" src={avatar} style={{width:"1.0em", height:"1.0em"}}/>
                                <p style={{color:"#919191", fontSize: "11px"}}>&nbsp; @BigJohny &nbsp;</p>
                                <p style={{color:"#919191", fontSize: "11px", textAlign: "left"}}><ViewsIcon fontSize={'small'}/>1082 &nbsp; <MessageIcon fontSize={'small'}/>24</p>
                            </div>




                            <Alert severity="success" style={{textAlign: "left", width: "100%"}}>
                                <AlertTitle>Объект ремонтируется</AlertTitle>
                                Ремонтом объекта занимается волонтёрская команда <strong style={{color:"#4e96ce"}}>БГТУ им В.Г.Шухова</strong>
                            </Alert>

                            <p style={{textAlign:"left"}} className={"mt-3 mb-3"}>Комментарии (9)</p>
                            <List style={{height:"30em", overflow: "auto"}}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Brunch this weekend?"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    Ali Connors
                                                </Typography>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </React.Fragment>
                                        }
                                    />

                                    <PopupState variant="popover" popupId="demo-popup-menu" style={{float:"right"}}>
                                        {(popupState) => (
                                            <React.Fragment>

                                                <IconButton
                                                    aria-label="more"
                                                    aria-controls="long-menu"
                                                    aria-haspopup="true"
                                                    style={{ width: "1.5em", height: "1.5em", marginRight:"1em", marginTop:"0.5em"}}
                                                    {...bindTrigger(popupState)}
                                                >
                                                    <MoreVertIcon />
                                                </IconButton>

                                                <Menu {...bindMenu(popupState)}>
                                                    <MenuItem onClick={popupState.close}>Удалить сообщение</MenuItem>
                                                    <MenuItem onClick={popupState.close}>Заблокировать автора</MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />

                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Oui Oui"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Cindy Baker" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Oui Oui"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    Sandra Adams
                                                </Typography>
                                                {' — Do you have Paris recommendations? Have you ever…'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Travis Howard" src={avatar} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Summer BBQ"
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                >
                                                    to Scott, Alex, Jennifer
                                                </Typography>
                                                {" — Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>

                            </List>

                            <Row className={"d-flex mt-3"}>
                                <TextField className={"flex-grow-1 ml-3"} id="filled-basic" label="Текст сообщения" variant="filled" />
                                <IconButton className={"mx-3"} color="primary" aria-label="upload picture" component="span">
                                    <SendIcon/>
                                </IconButton>
                            </Row>



                        </div>
                    </div>

                </MDBModalBody>

                <MDBModalFooter>
                    <MDBBtn color="secondary" >Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>

            </MDBModal>
*/}





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
                            <Button variant="btn btn-outline-primary ">Войти в личный кабинет</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>


                {/*<IconButton aria-label="delete">
                    <Image style={{maxWidth: "2em"}} src={MapIcon} fluid/>
                </IconButton>*/}

                {/*Page Content*/}

                <section className="pb-0 pt-0">


                    <Container style={{    height: "20em", overflow: "hidden"}}>
                        <div className="card text-white">
                            {/*<img className="card-img" src={templateImage} alt="Card image"/>*/}
                            <Blur img={templateImage} blurRadius={45} enableStyles style={{
                                width: "89em",
                                height: "20em",
                                position: "absolute",
                                transform: "translate(-3em, -1em)",
                            }}>
                                The content.
                            </Blur>

                                <div className="card-img-overlay">
                                    <div className="row pl-5">
                                        <div className="col-8">
                                            <Row>
                                                <h2 className="font-weight-light text-left mb-0" style={{color:"white"}}>Заявление № 671</h2>
                                            </Row>
                                            <Row >
                                                <p style={{color:"white"}}>статус: &nbsp; </p><p style={{color:"#68a5ff", fontWeight: "bold"}}>на рассмотрении </p>
                                            </Row>
                                            <Row >
                                                <p style={{color:"white"}}><ViewsIcon fontSize={'small'}/>1082 &nbsp; <MessageIcon fontSize={'small'}/>24</p>
                                            </Row>

                                            <Row className="w-75">
                                                <p className={"text-break"} style={{textAlign:"justify", color:"white"}}>Комунальные службы уже 2 года обещают исправить эту дорогу, но ни кто так и не собирается даже начить исправлять! Уже терпения ни какого нет!!!</p>
                                            </Row>

                                            <Row className={"row pr-5 mt-3"} style={{color:"white"}}>
                                                <Button variant="btn btn-outline-primary w-25 btn-sm" style={{color:"white"}}>Открыть</Button>
                                            </Row>

                                        </div>
                                        <div className="col">
                                            <Image style={{maxWidth: "18em"}} src={TopImagePreview} fluid/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </Container>
                </section>


                <section className="pb-3 pt-5">
                    <div className="container pl-sm-5">
                        <Row>
                            <h5 className="font-weight-light text-left">Последние созданные</h5>
                        </Row>

                        <Row className={"align-items-stretch mt-3"}>
                            <Col>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title"><Image style={{maxWidth: "8em"}} src={TopImagePreview} fluid/>
                                        </h5>
                                        <p className="card-text">Уже 10 лет одно и тоже!</p>
                                        <button type="button" className="btn btn-primary btn-sm btn-block"
                                                onClick="location.href = '';">открыть
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title"><Image style={{maxWidth: "8em"}} src={TopImagePreview} fluid/>
                                        </h5>
                                        <p className="card-text">Уберите за собой!</p>
                                        <button type="button" className="btn btn-primary btn-sm btn-block"
                                                onClick="location.href = '';" style={{marginTop: "auto"}}>открыть
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title"><Image style={{maxWidth: "8em"}} src={TopImagePreview} fluid/>
                                        </h5>
                                        <p className="card-text">Когда будет тратуар?!</p>
                                        <button type="button" className="btn btn-primary btn-sm btn-block"
                                                onClick="location.href = '';" style={{marginTop: "auto"}}>открыть
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title"><Image style={{maxWidth: "8em"}} src={TopImagePreview} fluid/>
                                        </h5>
                                        <p className="card-text">Качели убиты</p>
                                        <button type="button" className="btn btn-primary btn-sm btn-block"
                                                onClick="location.href = '';" style={{marginTop: "auto"}}>открыть
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>

                <section className="pb-5 pt-0">
                    <div className="container pl-sm-5">
                        <div className="row">

                            <div className="col-6">
                                <Row>
                                    <h5 className="font-weight-light text-left">Наиболее просматриваемые</h5>
                                </Row>


                                <div className="list-group pt-2">
                                    <button type="button" className="list-group-item list-group-item-action">
                                        <Row style={{marginLeft:"1em"}}>
                                        <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                        <Col>
                                            <p className="text-left" style={{marginBottom: "auto"}}>Когда будет тратуар?!</p>
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

                                </div>

                            </div>
                            <div className="col-6">
                                <Row>
                                    <h5 className="font-weight-light text-left">Наиболее комментируемые</h5>
                                </Row>

                                <div className="list-group pt-2">
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

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                    <section className="pb-5 pt-0">
                    <div className="container pl-sm-5">
                        <Row>
                            <h5 className="font-weight-light text-left">Все</h5>
                        </Row>


                            <div className="list-group pt-3">
                                <button type="button" className="list-group-item list-group-item-action">
                                    <Row style={{marginLeft:"1em"}}>
                                        <Image style={{maxWidth: "4em", maxHeight:"4em"}} src={TopImagePreview} fluid/>
                                        <Col>
                                            <p className="text-left" style={{    marginBottom: "auto"}}>Когда будет тратуар?!</p>
                                            <p className="text-left" style={{color:"Silver",     fontSize: "smaller"}}><ViewsIcon fontSize={"small"}/>1082 &nbsp; <MessageIcon fontSize={"small"}/>24</p>
                                        </Col>

                                        <PopupState variant="popover" popupId="demo-popup-menu" style={{float:"right"}}>
                                            {(popupState) => (
                                                <React.Fragment>

                                                    <IconButton
                                                        aria-label="more"
                                                        aria-controls="long-menu"
                                                        aria-haspopup="true"
                                                        style={{ width: "1.5em", height: "1.5em", marginRight:"1em", marginTop:"0.5em"}}
                                                        {...bindTrigger(popupState)}
                                                    >
                                                        <MoreVertIcon />
                                                    </IconButton>

                                                    <Menu {...bindMenu(popupState)}>
                                                        <MenuItem onClick={popupState.close}>Удалить сообщение</MenuItem>
                                                        <MenuItem onClick={popupState.close}>Заблокировать автора</MenuItem>
                                                    </Menu>
                                                </React.Fragment>
                                            )}
                                        </PopupState>

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


                <ExampleModalMap/>


            </div>
        </div>
    );
}

export default ProblemsStorePage;
