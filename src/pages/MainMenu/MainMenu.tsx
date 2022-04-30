import React from 'react';
import { Button } from '../../components/Button';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="td-MainMenu preserve-3d">
      <div className="left-side preserve-3d">
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
      <div className="right-side preserve-3d">
        <Separator />
        <div className='nexus-logos'>
          <img height={160} src="https://www.nexusmods.com/bootstrap/images/vortex/nmm-logomark.svg" alt="Nexus Mods Logo" />
          <img height={160} src="https://www.nexusmods.com/bootstrap/images/vortex/vortex-logomark.svg" alt="Vortex Logo" />
        </div>
        <div className="player-info">
          <Text>Current Location</Text>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
