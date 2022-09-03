import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: brown;
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
    font-weight: bolder;
    margin: none;
    padding: 10px;
`;

const LiftCam = styled.div`
    background-image: url('/meet.jpg');
    display: flex;
    flex: 0 0 33%;
    justify-content: flex-start;
    align-items: flex-start;
`;

const OperatorCam = styled.div`
    background-color: blue;
    display: flex;
    flex: 0 0 33%;
    
`;

const Chatting = styled.div`
    background-color: white;
    height: 100%;   
    width: 20%;
    display: flex;
    padding: 20px;
    border-radius: 10px;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8.4px);
    -webkit-backdrop-filter: blur(8.4px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`;

export default function OperatorPage() {
    return (
        <Wrapper>
            <CallerCam>
                <LiftCam>
                    <Title>Cam 1</Title>
                </LiftCam>
                <LiftCam>
                    <Title>Cam 2</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 3</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 4</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 5</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 6</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 7</Title>
                </LiftCam> 
                <LiftCam>
                    <Title>Cam 8</Title>
                </LiftCam>  
                <OperatorCam />
            </CallerCam>
            <Chatting />
        </Wrapper>
    );
}