import useBackendApi from "../logic/BackendApiHook";
import React, {useEffect, useState} from "react";
import {useDropzone} from "react-dropzone";
import {Image, Row} from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import vkIcon from "../resources/vk_icon.svg";
import googleIcon from "../resources/google_icon.svg";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../resources/avatar.jpg";
import Badge from "@material-ui/core/Badge";

export function UserAvatar(props) {
    const {authentication, registration, fileUpload, getUserInfo} = useBackendApi();

    const [userData, setUserData] = useState();
    const [socialLinks, setSocialLinks] = useState();

    /*    const thumbs = files.map(file => (
            <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                    <img
                        src={file.preview}
                        style={img}
                    />
                </div>
            </div>
        ));*/

    useEffect(() => {
        console.log("here we go");
        getUserInfo(props.userId).then((e) => console.log(e));

        getUserInfo(props.userId).then((e) => setUserData(e));

    }, []);

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        //files.forEach(file => URL.revokeObjectURL(file.preview));
        //console.log(userData);

    }, [userData]);

    return (
        <Badge
            overlap="circle"
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            badgeContent={
                <Row>
                    {userData&&userData.socialLink&&userData.socialLink.map(s => <IconButton style={{width: "1em", height: "1em", padding: "0"}} color="primary"
                                                              aria-label="add to shopping cart">

                        <Image src={s.socialType.logoUrl} style={{width: "2em"}}/>

                    </IconButton>)}
{/*                    <IconButton style={{width: "1em", height: "1em", padding: "0"}} color="primary"
                                aria-label="add to shopping cart">
                        <Image src={vkIcon} style={{width: "2em"}}/>
                    </IconButton>
                    <IconButton style={{width: "1em", height: "1em", padding: "0"}} color="primary"
                                aria-label="add to shopping cart">
                        <Image src={googleIcon} style={{width: "2em"}}/>
                    </IconButton>*/}
                </Row>
            }
        >
            <Avatar alt="Remy Sharp" src={avatar} style={{width: "5em", height: "5em", margin: "auto"}}/>
        </Badge>

    );
}
