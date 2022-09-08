import React from "react";
import styled from "styled-components";

import { faPlus,  faVolumeXmark, faPhoneSlash, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.div`
    background-color: none;
    height: 100%;   
    width: 20%;
    display: flex;
    align-items: flex-end;
    padding: 20px;
    border-radius: 4px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`;

