import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>MACERAYA HAZIR MIYIZ?</h1>
            <p>Öyleyse, BAŞLAYALIM!</p>
            <div className='hero-btns'>
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    Başlat
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                   Fragmanı İzle <i className='far 
                   fa-play-circle' />
                </Button>

            </div>
        </div>
    );
}

export default HeroSection;
