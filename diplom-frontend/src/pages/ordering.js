import logo from '../resources/easylogo.svg';
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
import {Reveal, Step} from 'semantic-ui-react'
import CustomizedSteppers from "../components/MaterialStepper";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import CallIcon from '@material-ui/icons/Call';
import {useDropzone} from 'react-dropzone';
import 'react-dropzone/examples/theme.css';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ModalExampleDimmer from "../components/ModalAgreeText";
import Modal from "react-bootstrap/Modal";
import HeaderNav from "../components/headerNav";
import {Map} from "leaflet";
import {Marker, Popup, TileLayer} from "react-leaflet";
import {EditableOpenMap} from "../components/Openmap";
import Alert from "react-bootstrap/Alert";
import {SelectableHorizontalGallery} from "../components/SelectableGallery";
import {tileData} from './tileData';
import useBackendApi from "../logic/BackendApiHook";

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

function AgreeModal(props) {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)} style={{margin: "auto",
                marginRight: "1em"}}>
                Отправить
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Правила и соглашение
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        1.1. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.
                    </p>
                    <p>
                        1.2. Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия. Таким образом реализация намеченных плановых заданий позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.
                    </p>

                    <p>
                        2.1. Повседневная практика показывает, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.
                    </p>

                    <p>
                        2.2. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции позволяет оценить значение модели развития. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
                    </p>

                    <p>
                        3.1. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании новых предложений. Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.
                    </p>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>Отказываюсь</Button>
                    <Button variant="primary" onClick={props.onAgree}>Соглашаюсь и подтверждаю</Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

const RevealExampleFade = () => {
    const SemanticImage = require("semantic-ui-react").Image;
    return(
    <Reveal animated='fade'>
        <Reveal.Content visible>
            <SemanticImage src='https://pbs.twimg.com/profile_images/1205883807854923776/8JtuZOpL_400x400.jpg' size='small'/>
        </Reveal.Content>
        <Reveal.Content hidden>
            <SemanticImage src='https://pbs.twimg.com/profile_images/1205883807854923776/8JtuZOpL_400x400.jpg' size='small'/>
        </Reveal.Content>
    </Reveal>
    );
}

function OrderingPage() {
    const {authentication, registration, fileUpload, getUserInfo, checkAuth, logout} = useBackendApi();
    const [changedAddress, setChangedAddress] = useState("");
    const [registrationFieldShow, setRegistrationFieldShow] = useState(true);
    const [ textFieldsData, settextFieldsData ] = useState({});

    useEffect(() => {
        getUserInfo().then(e => {
            console.log('id=',e.id, !(e.id>0));
            e&&setRegistrationFieldShow(!(e.id>0));

        }).catch(
            c=>{setRegistrationFieldShow(true)
            }
            );

    }, []);
/*
    useEffect(()=>{alert(changedAddress);},[changedAddress]);
*/

    const StepExampleOrdered = () => (
        <Step.Group ordered>
            <Step completed>
                <Step.Content>
                    <Step.Title>Shipping</Step.Title>
                    <Step.Description>Choose your shipping options</Step.Description>
                </Step.Content>
            </Step>

            <Step completed>
                <Step.Content>
                    <Step.Title>Billing</Step.Title>
                    <Step.Description>Enter billing information</Step.Description>
                </Step.Content>
            </Step>

            <Step active>
                <Step.Content>
                    <Step.Title>Confirm Order</Step.Title>
                </Step.Content>
            </Step>
        </Step.Group>
    )

    let handleAgree = ()=>{
        if(registrationFieldShow){
            registration({
                ...textFieldsData,
                ...{
                    passwordHash:"",
                    avatarFileFakeUrl:"",
                    login:"",
                    description:"",
                    socialLink:[],
                    temporal:true,
                    enabled:false
                }}).then(
                    e=>console.log("successful",e)
            );
        }else{

        }
        //alert("ok");
    };

    return (


        <div className="App">
            <div>
                <HeaderNav/>


                {/*Page Content*/}
                <section className="pb-5 pt-5">
{/*
                    <CustomizedSteppers/>
*/}

                    <div className="container pl-sm-5">

                        <div className="row mt-3">
                            {registrationFieldShow?
                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <h3 className="font-weight-light text-left"> Основные данные </h3>

                                <div>
                                    <TextField id="input-with-icon-grid" label={<p>Фамилия</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"surname":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p>Имя</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"name":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p>Отчество</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"patronymic":e.target.value}})}}/>

                                    <TextField id="input-with-icon-grid" label={<p><CallIcon/> &nbsp; Мобильный номер</p>}
                                               variant="filled"
                                               helperText={<p style={{textAlign: "justify"}}>* Мобильный номер вам нужно указать для того, чтобы вы могли создать временный личный кабинет и контролировать свою заявку</p>}
                                               fullWidth
                                               onChange={e=>{settextFieldsData({...textFieldsData,...{"mobilenumber":e.target.value}})}}
                                    />
                                </div>
                            </div>:""}

                            <div className="flex-fill">

                                <h3 className="font-weight-light text-left"> <EditOutlinedIcon/> Подробное описание проблемы </h3>

                                <Paper className={"p-3"} style={{minHeight:"20em"}}>

                                    <InputBase
                                        placeholder="Проблему описывать здесь"
                                        fullWidth
                                        multiline

                                    />

                                </Paper>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-5 pt-5">
                    <div className="container pl-sm-5">
                        <h3 className="font-weight-light text-left"> <ImageOutlinedIcon/> Местоположение недостатка </h3>
                        <p className={'text-left'}>{changedAddress.display_name}</p>

                        <div  data-content="The default theme's basic popup removes the pointing arrow." data-variation="basic">
                            <EditableOpenMap setChangedAddress={setChangedAddress}/>
                        </div>
                        <Alert className={'mt-2 text-left'} variant={'warning'}>
                            <i className="exclamation icon"></i> Постарайтесь указать позицию происшествия как можно <Alert.Link href="#">более точнее</Alert.Link>, от этого будет зависеть дальнейшая судьба вашего обращения.
                        </Alert>
                    </div>
                </section>

                <section className="pb-5 pt-0">
                    <div className="container pl-sm-5">

                        <h3 className="font-weight-light text-left"> <ImageOutlinedIcon/> Категория происшествия </h3>

                        <SelectableHorizontalGallery tileData={tileData}/>

                    </div>
                </section>

                <section className="pb-5 pt-0">
                    <div className="container pl-sm-5">

                    <h3 className="font-weight-light text-left"> <ImageOutlinedIcon/> Приложения </h3>

                        <Previews/>

                        <AgreeModal onAgree={handleAgree}/>

                    </div>


                </section>



            </div>

        </div>
    );
}

export default OrderingPage;
