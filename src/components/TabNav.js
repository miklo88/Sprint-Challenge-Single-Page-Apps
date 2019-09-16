import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';


const Nav = function (props) {
    // console.log("Nav Props", props)
    return <NavLink exact activeClassName="active" {...props} />
}

const panes = [
    {
        menuItem: <Menu.Item key="Home" as={Nav} to={`/`}>Home Page</Menu.Item>,
        render: () => <Tab.Pane>
            <Route exact path='/' component={WelcomePage} />
        </Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Characters" as={Nav} to={`/characters`}>Characters</Menu.Item>,
        render: () => <Tab.Pane>
            <Route path='/characters' component={CharacterList} />
        </Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Locations" as={Nav} to={`/locations`}>Locations</Menu.Item>,
        render: () => <Tab.Pane>
            <Route path='/locations' component={LocationsList} />
        </Tab.Pane>
    },
    {
        menuItem: <Menu.Item key="Episodes" as={Nav} to={`/episodes`}>Episodes</Menu.Item>,
        render: () => <Tab.Pane>
            <Route path='/episodes' component={EpisodeList} />
        </Tab.Pane>
    }
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={true} />;
export default TabNav;


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/