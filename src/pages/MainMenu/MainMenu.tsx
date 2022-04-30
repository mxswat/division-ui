import React from 'react';
import { Button } from '../../components/Button';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="td-MainMenu">
      <div className="left-side">
        <Button>
          <Text>Hello</Text>
        </Button>
        <Button>
          <Text className='giga-font'>Hello</Text>
        </Button>
        <Button>
          <Text>Hello</Text>
        </Button>
        <Button>
          <Text className='giga-font'>Hello</Text>
        </Button>
        <Button>
          <Text>Hello</Text>
        </Button>
        <Button>
          <Text className='giga-font'>Hello</Text>
        </Button>
        <Button>
          <Text>Hello</Text>
        </Button>
      </div>
      <div className="right-side">
        <Separator />
        <div className='nexus-logos'>
          <img src="https://www.nexusmods.com/bootstrap/images/vortex/nmm-logomark.svg" alt="Nexus Mods Logo" />
          <img src="https://www.nexusmods.com/bootstrap/images/vortex/vortex-logomark.svg" alt="Vortex Logo" />
        </div>
        <div className="player-info">
          <Text className='font-1-2'>Current Location</Text>
          <Text className='font-1 gray'>United Kingdom</Text>
        </div>
        <div className="player-info">
          <Text className='font-1-2'>Current Position</Text>
          <Text className='font-1 gray'>Vortex Node & Front-End Developer</Text>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
