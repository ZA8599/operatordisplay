import React from "react";
import styled from "styled-components";
import { useRef, useState } from "react";

import { faPlus,  faCamera, faVolumeXmark, faPhoneSlash, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = styled.div`
    padding: 10px;
    width: fit-content;
    height: ${props => props.active ? 10 : 6 }vh;
    position: fixed;
    bottom: 0%;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    width: fit-content;
    display: flex;
    align-items: flex-end;
    padding: 10px 20px;

    transition: .3s height;
`;   

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding-top: 10px;

    transition: .3s transform;
    transform: translateY(${props => props.active ? '0' : '120%'});
`;

const IconNav = styled.div`
    color: #03083e;
    font-size: 4vh;
    display: flex;
    /* flex: 1 1 80%;
    justify-content: space-around; */
    padding-bottom: 20px;
    border-radius: 5px;

    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(${props => !props.active ? '40%' : '-120%'});

    transition: .3s all;
    opacity: ${props => !props.active ? '1' : '0'};

    pointer-events: ${props => !props.active ? 'all' : 'none'};
`;

const Icon = styled.div`
    background: #03083e;
    color: white;
    font-size: 3vh;
    display: flex;
    flex: 1 1 80%;
    justify-content: space-around;
    padding: 20px;
    border-radius: 5px;
`;

export default function Footer() {
    const navRef = useRef(Navbar);

    const [active, setActive] = useState(false);

    const toggleNav = (flag) => {
        setActive(flag);
    }

    return (
        <Navbar ref={navRef} active={active}>
            <IconNav onClick={() => toggleNav(true)} active={active}>
                <FontAwesomeIcon icon={faAngleUp} />
            </IconNav>
            <Icons active={active}>
                <Icon>
                    <FontAwesomeIcon icon={faPlus} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faCamera} />
                </Icon>
                <Icon>
                    <FontAwesomeIcon icon={faVolumeXmark} />
                </Icon>
                <Icon>  
                    <FontAwesomeIcon icon={faPhoneSlash} />
                </Icon>
                <Icon onClick={() => toggleNav(false)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                </Icon>
            </Icons>
        </Navbar>
    );
}