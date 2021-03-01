import logo from '../resources/logo.png';
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
import Grid from "@material-ui/core/Grid";
import {AccountCircle} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import KeyIcon from '@material-ui/icons/VpnKey';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import DividerWithText from "../components/DividerWithText";
import vkIcon from "../resources/vk_icon.svg";
import googleIcon from "../resources/google_icon.svg";
import okIcon from "../resources/ok_icon.svg";
import IconButton from "@material-ui/core/IconButton";
import RegistrationCarousel from "../components/RegistrationCarousel";
import { MDBContainer} from 'mdbreact'
import YouTube from '@u-wave/react-youtube';
import Video from 'react-video-renderer';
import viderurl from "../resources/video.mp4";
import Container from "@material-ui/core/Container";
import 'video-react/dist/video-react.css'; // import css
import { Player } from 'video-react';
import ReactPlayer from 'react-player/lazy'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import {Menu} from "semantic-ui-react";

function SettingsPage() {
    const EmbedsPage = () => {
        return (
            <Container >

                <ReactPlayer
                    url={viderurl}
                    playing={true}
                    muted={true}
                    config={{
                        file: {
                            playerVars: { showinfo: 1, playing:true },

                        }
                    }}
                />

            </Container>

        )
    }

    function handleItemClick() {

    }

    return (
        <div className="App">
{/*
            <RegistrationCarousel/>
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
                            <Button variant="btn btn-outline-primary">Войти в личный кабинет</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                {/*Page Content*/}
                <section className="pb-5 pt-5">
                    <div className="container pl-sm-5">

                        <div className="row">

                            <div className="col-8 px-5">
                                <h3 className={"text-left"}>Настройки</h3>
                                <Menu secondary vertical>
                                    <Menu.Item
                                        name='Основные данные'
                                        // active={activeItem === 'closest'}
                                        onClick={handleItemClick}
                                        className={"text-left"}
                                    />
                                    <Menu.Item
                                        name='Уведомления'
                                        // active={activeItem === 'mostComments'}
                                        onClick={handleItemClick}
                                        className={"text-left"}
                                    />
                                    <Menu.Item
                                        name='Безопасность'
                                        // active={activeItem === 'mostPopular'}
                                        onClick={handleItemClick}
                                        className={"text-left"}
                                    />
                                    <br/>
                                    <Menu.Item
                                        name='Выход'
                                        // active={activeItem === 'mostPopular'}
                                        onClick={handleItemClick}
                                        className={"text-left"}
                                    />

                                </Menu>

                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <h2 className="font-weight-light" > Авторизация </h2>

                                <div className="mt-5" >
                                    <TextField id="input-with-icon-grid" label={<p><AccountCircle /> &nbsp; Почта/логин</p>} variant="filled" fullWidth/>
                                    <TextField id="input-with-icon-grid" label={<p><KeyIcon /> &nbsp; Пароль</p>} variant="filled" fullWidth/>
                                </div>

                                <div className="mt-3">
                                <DividerWithText> или </DividerWithText>
                                </div>

                                <Row className="d-flex justify-content-center">
                                    <IconButton style={{width:"2.5em", height:"2.5em"}} color="primary" aria-label="add to shopping cart">
                                        <Image src={vkIcon} style={{width:"2.5em"}}/>
                                    </IconButton>

                                    <IconButton style={{width:"2.6em", height:"2.6em"}} color="primary" aria-label="add to shopping cart">
                                        <Image src={googleIcon} style={{width:"3em"}}/>
                                    </IconButton>

                                    <IconButton style={{width:"2.5em", height:"2.5em"}} color="primary" aria-label="add to shopping cart">
                                        <Image src={okIcon} style={{width:"1.8em", height:"1.8em"}}/>
                                    </IconButton>
                                </Row>

{/*                                <div className="pt-5" style={{display: "flex"}}>
                                    <FormControlLabel
                                        style={{ float: 'left' }}
                                    control={
                                        <Checkbox
                                            //checked={state.checkedB}
                                            //onChange={handleChange}
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Запомнить пароль"
                                />
                                    <button type="button" className="btn btn-none" style={{ float: 'right' }}>Забыл пароль</button>

                                </div>*/}


                                <div class="d-flex bd-highlight mt-4">

                                    <button type="button"  className="btn btn-outline-primary p-2 w-100 bd-highlight" style={{}}>Войти</button>

                                    <button type="button" className="btn btn-none p-2 flex-shrink-1 bd-highlight" style={{float:"right", color:"#a7a7a7"}}>зарегистрироваться</button>
                                </div>


                            </div>




                        </div>

                    </div>
                </section>






            </div>
        </div>
    );
}

export default SettingsPage;
