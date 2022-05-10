import React, { useCallback } from 'react';
import { ButtonKeybind } from '../../components/ButtonKeybind';
import { Background } from './Background';
import { Logo } from './Logo';
import './TitleScreen.style.css';
import { useNavigate } from 'react-router-dom';

export const TitleScreen = () => {
  const navigate = useNavigate();
  const goToMainMenu = useCallback(() => navigate('/menu'), [navigate]);

  return (
    <div className='td-pts'>
      <Logo />
      <div className='td-pts-buttons'>
        <ButtonKeybind onClick={goToMainMenu} keybind='space' label='Press to Start' />
        <ButtonKeybind onClick={() => alert('esc pressed')} keybind='esc' label='Quit' />
      </div>
      <Background />
    </div>
  );
}
