import logo from '../resources/logo.png';
import React, {useEffect, useState} from "react";
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
import {AccountCircle, Phone} from "@material-ui/icons";
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
import {useDropzone} from "react-dropzone";
import ImageCropper from "../components/ImageCropper";
import Modal from "react-bootstrap/Modal";


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

function Previews(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Перетащите сюда несколько файлов или щелкните, чтобы выбрать файлы</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
}

function RegistrationPage() {
    return (
        <div className="App">
            {/*<RegistrationCarousel/>*/}
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

                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <h2 className="font-weight-light"> Регистрация </h2>

                                <div className="pt-3">
                                    <TextField id="input-with-icon-grid" label={<p>Фамилия</p>}
                                               variant="filled" fullWidth/>
                                    <TextField id="input-with-icon-grid" label={<p>Имя</p>}
                                               variant="filled" fullWidth/>
                                    <TextField id="input-with-icon-grid" label={<p>Отчество</p>}
                                               variant="filled" fullWidth/>

                                    <TextField id="input-with-icon-grid" label={<p><Phone/> &nbsp; Мобильный номер</p>}
                                               variant="filled" fullWidth/>
                                    <TextField id="input-with-icon-grid" label={<p><KeyIcon/> &nbsp; Пароль</p>}
                                               variant="filled"           helperText="Придумайте пароль посложнее и постарайтесь не забыть!"
                                               fullWidth/>
                                               <p className={"my-2 text-left"}>Аватар</p>
                                    <Previews/>


{/*
                                    <ImageCropper src={sponsorLogo2}/>
*/}


                                </div>



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





                            </div>

                            <div className="col-8">
                                    <h2 className="font-weight-light"> Правила и соглашения </h2>

                                <div className={"text-left"}  className="pt-3">
                                    <p style={{ textAlign: "justify" }}>
                                        1.1. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
                                    </p>
                                    <p style={{ textAlign: "justify" }}>
                                        1.2. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.
                                    </p>

                                    <p style={{ textAlign: "justify" }}>
                                        2.1. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
                                    </p>

                                    <p style={{ textAlign: "justify" }}>
                                        2.2. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
                                    </p>

                                    <p style={{ textAlign: "justify" }}>
                                        3.1. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
                                    </p>
                                </div>

                                <div className="d-flex bd-highlight mt-4">

                                    <button type="button" className="btn btn-outline-primary p-2 w-100 bd-highlight"
                                            style={{}}>Подтвердить
                                    </button>

                                </div>
                            </div>





                        </div>

                    </div>
                </section>






            </div>
        </div>
    );
}

export default RegistrationPage;
