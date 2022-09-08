
import React from "react";
import styled from "styled-components";

import { faMessage,  faVolumeXmark, faPhoneSlash, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    background: rgb(19,143,144) ;
    background: linear-gradient(0deg, rgba(19,143,144,1) 0%, rgba(3,8,62,1) 100%);
    height: 100vh;   
    width: 100vw;
    display: flex;
    padding: 20px;
    gap: 10px;
`;

const CallerCam = styled.div`
    height: 100%;   
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    border-radius: 20px;
`;

const Title = styled.div`
    color: white;
    font-size: 20px;
    font-weight: bolder;
    margin: none;
    padding: 10px;
`;

const Icons = styled.div`
    display: flex;
    flex: 1 1 70%;
    justify-content: flex-end;
    gap: 10px;
    padding: 10px;
`;

const Icon = styled.div`
    background: #03083e;
    color: white;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-radius: 5px;
`;


const LiftCam = styled.div`
    background-image: url('/meet.jpg');
    display: flex;
    flex: 1 1 33%;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 5px;
`;

const OperatorCam = styled.div`
    background-color: black;
    display: flex;
    flex: 1 1 33%;
    border-radius: 5px;
    
`;

const Chatbox = styled.div`
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

const Chatmessages = styled.div`
    background-color: white;     
    height: 5%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border-radius: 10px;
`;

const Chatbutton = styled.div`
    background-color: #03083e;
    height: 100%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 10px 10px 0;
`;

const lifts = [ 
    {
        name: "Camera 1",
        id: 1
    },
    {       
        name: "Camera 2",
        id: 2
    },
    {
        name: "Camera 3",
        id: 3
    },
    {
        name: "Camera 4",
        id: 4
    },
    {
        name: "Camera 5",
        id: 5
    },
    {
        name: "Camera 6",
        id: 6
    },
    {
        name: "Camera 7",
        id: 7
    },
    {
        name: "Camera 8",
        id: 8
    }
];

export default function OperatorPage() {
    return (
        <Wrapper>
            <CallerCam>
                 {lifts.map((lift) => (
                    <LiftCam key={lift.id}>
                        <Title>{lift.name}</Title>
                        <Icons>
                            <Icon><FontAwesomeIcon icon={faVolumeXmark} /></Icon>
                            <Icon><FontAwesomeIcon icon={faPhoneSlash} /></Icon>
                            <Icon><FontAwesomeIcon icon={faMessage} /></Icon>
                        </Icons>
                    </LiftCam>
                ))}
                <OperatorCam>
                    <Title>Operator Cam </Title>
                </OperatorCam>
            </CallerCam>
            <Chatbox>
                <Chatmessages>
                    <Chatbutton>
                        <Title><FontAwesomeIcon icon={faPaperPlane} /></Title>
                    </Chatbutton>
                </Chatmessages>
            </Chatbox>
        </Wrapper>
    );
}