import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import skyImage from '../assets/sky.jpg';

const Styles = styled.div`
    .jumbo {
        background: url(${skyImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome Home!</h1>
                <p>Make your mark in New York and you are a made man. - Mark Twain</p>
            </Container>
        </Jumbo>
    </Styles>
)