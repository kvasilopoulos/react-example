'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }
        return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);


<DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>