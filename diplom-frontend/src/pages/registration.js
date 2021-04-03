import logo from '../resources/logo.png';
import React, {useContext, useEffect, useState} from "react";
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
import HeaderNav from "../components/headerNav";
import useBackendApi from "../logic/BackendApiHook";
import SocialNetworkUsing from "../components/SocialNetworkUsing";
import axios from 'axios';
import {AvatarDragAndDropUploader} from "../components/AvatarDragAndDropUploader";
// import {ApiContext} from "../index";







function RegistrationPage() {
    //const {authentication, registration} = useContext(ApiContext);
    const { authentication, registration, fileUpload } = useBackendApi();
        const [ textFieldsData, settextFieldsData ] = useState({});




    return (
        <div className="App">
            {/*<RegistrationCarousel/>*/}
            <div>
                <HeaderNav/>

                {/*Page Content*/}
                <section className="pb-5 pt-5">
                    <div className="container pl-sm-5">

                        <div className="row">

                            <div className="col-md-4 col-sm-6 col-xs-6">
                                <h2 className="font-weight-light"> Регистрация </h2>

                                <div className="pt-3">
                                    <TextField id="input-with-icon-grid" label={<p>Логин</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"login":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p>Фамилия</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"surname":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p>Имя</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"name":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p>Отчество</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"patronymic":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p><Phone/> &nbsp; Мобильный номер</p>}
                                               variant="filled" fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"mobilenumber":e.target.value}})}}/>
                                    <TextField id="input-with-icon-grid" label={<p><KeyIcon/> &nbsp; Пароль</p>}
                                               variant="filled"           helperText="Придумайте пароль посложнее и постарайтесь не забыть!"
                                               fullWidth onChange={e=>{settextFieldsData({...textFieldsData,...{"passwordHash":e.target.value}})}}/>
                                               <p className={"my-2 text-left"}>Аватар</p>
                                    <AvatarDragAndDropUploader onUploaded={(data)=>{settextFieldsData({...textFieldsData,...{"avatarFileFakeUrl":data.fileFakeName}})}} />
                                    <p className={"my-2 text-left"}>Ваши контактные данные (будут видны всем)</p>
                                    <SocialNetworkUsing setHeader={(e)=>settextFieldsData({...textFieldsData,...{"socialLink":e}})}/>


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
                                            onClick={()=>registration(
                                                textFieldsData
                                            )}
                                            style={{}}>
                                        Подтвердить
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
