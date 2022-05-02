import React from 'react';
import { Button } from '../../components/Button';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import './MainMenu.css';
import MainMenuRight from './MainMenuRight';

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
      <MainMenuRight />
    </div>
  );
}

export default MainMenu;
