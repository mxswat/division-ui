import React from 'react';
import { Button } from '../../components/Button';
import { PerspectiveContainer } from '../../components/Perspectivecontainer';
import { Text } from '../../components/Text';
import './MainMenu.css';
import MainMenuRight from './MainMenuRight';

const MainMenu = () => {
  return (
    <PerspectiveContainer className="td-MainMenu--background" classNameScroller="td-MainMenu">
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
      </div>
      <MainMenuRight />
    </PerspectiveContainer>
  );
}

export default MainMenu;
