import React from 'react';
import { Separator } from '../../components/Separator';
import { Text } from '../../components/Text';
import { Image } from '../../components/Image';
import { Link } from '../../components/Link';

const YoE = `0${new Date().getFullYear() - 2016}`;

const MainMenuRight = () => {
    return (
        <div className="right-side">
            <Separator />
            <div className='nexus-logos'>
                <img src="https://www.nexusmods.com/bootstrap/images/vortex/nmm-logomark.svg" alt="Nexus Mods Logo" />
                <img src="https://www.nexusmods.com/bootstrap/images/vortex/vortex-logomark.svg" alt="Vortex Logo" />
            </div>
            <div className="player-info">
                <Text className='font-1-2'>Location</Text>
                <Text className='font-1 gray'>United Kingdom</Text>
            </div>
            <div className="player-info">
                <Text className='font-1-2'>Company</Text>
                <Text className='font-1 gray'>Nexus Mods</Text>
            </div>
            <div className="player-info">
                <Text className='font-1-2'>Position</Text>
                <Text className='font-1 gray'>Vortex Node & Front-End Developer</Text>
            </div>
            <Separator />
            <div className='years-box td-border'>
                <Text className='num font-3 '>
                    {YoE}
                </Text>
                <div>
                    <Text className='yoe font-1-2'>Years of Experience</Text>
                    <Text className='yoe font-1 gray'>(As Front-End Dev)</Text>
                </div>
            </div>
            <Separator />
            <div className="social">
                <Image className='social--img' src='https://cdn3.iconfinder.com/data/icons/inficons/512/github.png' alt='GitHub Logo' />
                <Link className='social--link' target="_blank" rel="noreferrer" href="https://github.com/mxswat/">
                    github.com/mxswat
                </Link>
            </div>
            <div className="social">
                <Image className='social--img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' alt='LinkedIn Logo' />
                <Link className='social--link' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/massimomx/">
                    linkedin.com/in/massimomx/
                </Link>
            </div>
        </div>
    )
}

export default MainMenuRight;
