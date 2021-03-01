import logo from '../resources/easylogo.svg';
import React from "react";
import {Button, Col, Container, Image, ListGroup, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CustomizedTabs from "../components/menuTabs";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Card from "react-bootstrap/Card";
import { Icon, Step } from 'semantic-ui-react'
import Table from "react-bootstrap/Table";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../resources/avatar.jpg";
import ListItemText from "@material-ui/core/ListItemText";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import FolderList from "../components/FolderList";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(2),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(0),
    },
    demo1: {
        backgroundColor: theme.palette.background.paper,
    }
}));


function RequestControlPanel() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App">
            <Navbar bg="none" expand="lg">
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

            <br />

            <div className={"mx-5"}>
                <Row>

                <Col>


                <div className={classes.root}>
                    <div className={classes.demo1}>
                        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                            <AntTab value={0} label="История (1)" />
                            <AntTab value={1} label="Приложения (4)" />
                            <AntTab value={2} label="Документы (0)" />
                            <AntTab value={3} label="Комментарии (6)" />
                            <AntTab value={4} label="Действия" />
                        </AntTabs>
                        <Typography className={classes.padding} />

                        <TabPanel value={value} index={0}>
                            <FolderList/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={3}>
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
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Card>
                                <Card.Body style={{ textAlign: "left" }}>
                                    <Row>
                                        <Col sm={2}><Button variant="primary" className={"w-100"}>Закрыть заявление</Button></Col>
                                        <Col>Закрыв ваше заявление, мы перестанем его поддерживать и вы больше не сможете в дальнейшем его продолжить.</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body style={{ textAlign: "left" }}>
                                    <Row>
                                        <Col sm={2}><Button variant="primary" className={"w-100"}>Получить данные агента</Button></Col>
                                        <Col>Данное действие позволит вам получить данные агента который следит за вашим делом.</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card>
                                <Card.Body style={{ textAlign: "left" }}>
                                    <Row>
                                        <Col sm={2}><Button variant="primary" className={"w-100"}>Сменить агента</Button></Col>
                                        <Col>Если агент вас по каким-то причинам не устраивает, то вы можете его сменить, но на этапе рассмотрения, это бессмысленно, так как скорость рассмотрения от агента ни как не зависит.</Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </TabPanel>
                    </div>

                </div>
                </Col>

                    <Col sm={4}>

                        <Row style={{placeContent: "center"}}>
                            <h2 className="font-weight-light" >Заявление №671</h2>
                        </Row>
                        <Row style={{justifyContent: "center"}}>
                            <p style={{justifyContent: "center"}}>статус: <b style={{color:"#007bff"}}>на рассмотрении</b></p>
                        </Row>

                        <Step.Group size='mini' className={"mt-4"}>
                            <Step>
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>Этап 1</Step.Title>
                                    <Step.Description>Модерация</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step>
                                <Icon name='payment' />
                                <Step.Content>
                                    <Step.Title>Этап 2</Step.Title>
                                    <Step.Description>Отправка</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step active>
                                <Icon name='info' />
                                <Step.Content>
                                    <Step.Title>Этап 3</Step.Title>
                                    <Step.Description>Рассмотрение</Step.Description>
                                </Step.Content>
                            </Step>

                            <Step disabled>
                                <Icon name='info' />
                                <Step.Content>
                                    <Step.Title>Этап 4</Step.Title>
                                    <Step.Description>Исполнение</Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>

                        <br />
                        <br />

                        <Card className={"mb-5"} style={{ width: '100%', textAlign: "left" }}>
                            <Card.Body>
                                <Card.Title>Текст обращения</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">15.02.2021 18:22</Card.Subtitle>
                                <Card.Text>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere est id tincidunt rutrum. In ultricies diam et semper iaculis. Nunc dolor enim, dignissim at vulputate quis, lobortis sed orci. Sed fringilla at ex nec maximus. Quisque finibus magna urna, faucibus malesuada nibh semper at. In molestie commodo lectus a fermentum. Duis suscipit turpis ac venenatis convallis. Donec non purus lorem. Fusce non mi dictum augue rhoncus venenatis at non metus. Donec imperdiet nunc sagittis, ullamcorper risus sed, molestie ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam id dui metus. Vivamus dignissim tellus at placerat consequat. Nullam ut posuere lectus.
</p>
    <p>                               Vivamus pharetra porttitor lorem. Suspendisse in mauris lobortis dui ultrices fringilla. Curabitur venenatis id velit et hendrerit. Donec nec ipsum in mi vulputate aliquet sit amet nec dui. Aliquam a enim eu enim fermentum laoreet vitae at lectus. Nulla ut ultricies lacus, vel euismod purus. Proin eleifend semper magna, vitae vehicula neque venenatis mollis. Sed in dui at quam ornare porttitor. Donec volutpat, quam eu lacinia convallis, eros odio fringilla nibh, ac placerat sem lectus sit amet lorem. Pellentesque elementum, ligula luctus laoreet hendrerit, odio tellus elementum dui, eu convallis nulla nisl at felis. Sed sed orci id eros gravida pellentesque. Vivamus aliquet finibus ex, ut efficitur elit ullamcorper a.
    </p>
                                    <p>                               Vivamus pharetra porttitor lorem. Suspendisse in mauris lobortis dui ultrices fringilla. Curabitur venenatis id velit et hendrerit. Donec nec ipsum in mi vulputate aliquet sit amet nec dui. Aliquam a enim eu enim fermentum laoreet vitae at lectus. Nulla ut ultricies lacus, vel euismod purus. Proin eleifend semper magna, vitae vehicula neque venenatis mollis. Sed in dui at quam ornare porttitor. Donec volutpat, quam eu lacinia convallis, eros odio fringilla nibh, ac placerat sem lectus sit amet lorem. Pellentesque elementum, ligula luctus laoreet hendrerit, odio tellus elementum dui, eu convallis nulla nisl at felis. Sed sed orci id eros gravida pellentesque. Vivamus aliquet finibus ex, ut efficitur elit ullamcorper a.

                                        Proin eu imperdiet elit. Aliquam facilisis massa suscipit, facilisis magna et, tristique enim. Sed consequat massa vel arcu venenatis, eget dictum leo placerat. Donec purus mi, vestibulum quis mauris quis, dictum egestas tellus. Suspendisse accumsan lorem ante, a condimentum tortor iaculis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tempor sagittis odio sit amet ornare. Aliquam finibus tincidunt quam at ultricies. Vivamus sit amet massa ut diam euismod mollis. Vivamus a sapien nec turpis consequat mollis. Curabitur congue velit a odio congue tincidunt. Nam commodo consequat tortor, nec tristique dolor pretium et. Aenean nisi ligula, laoreet id ante et, porta scelerisque augue. Aliquam tempor lacus et efficitur sagittis.
                                </p>
                            </Card.Text>
                                <Button variant={"outline-primary"}>Редактировать</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </div>



        </div>
    );
}

export default RequestControlPanel;
