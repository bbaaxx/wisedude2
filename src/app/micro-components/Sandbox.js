import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';
import {Clock} from '../micro-components/Clock';

export class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div>

        <Button
          primary
          onClick={this.handleToggleClick}
          content={this.state.isToggleOn ? 'Again' : 'Click Here'}
          />

        <Button secondary content={<Clock/>}/>

        <Button primary animated>
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name="right arrow"/>
          </Button.Content>
        </Button>

      </div>
    );
  }
}
