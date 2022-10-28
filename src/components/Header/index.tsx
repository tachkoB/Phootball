// Styles
import { Header, Link, BigNav, SmallNav, Input } from './styled'

// Images
import Football from 'images/football.png'
import Menu from 'images/menu.png'


/**
 *  App geader
 */
const PageHeader = () => {
    return (
        <Header>
            <Link to={'/'} >
                <div>

                    <img src={Football} alt='Football' />
                    <p>Phootball</p>

                </div>
            </Link>
            <BigNav>
                <ul>
                    <li>
                        <Link to={'/'} end>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/team-builder'} >
                            Team builder
                        </Link>
                    </li>
                </ul>
            </BigNav>
            <SmallNav>
                <label>
                    <Input type={'checkbox'} />
                    <img src={Menu} alt="" width={40} />
                    <ul>
                        <li>
                            <Link to={'/'} end>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={'/team-builder'} >
                                Team builder
                            </Link>
                        </li>
                    </ul>
                </label>
            </SmallNav>
        </Header >
    )
}

export default PageHeader