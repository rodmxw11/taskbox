import React from 'react'
import { storiesOf } from "@storybook/react"
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'

import {PureInboxScreen} from "./InBoxScreen";
import { defaultTasks} from "./TaskList.stories";

// a super simple mock of redux store
const store = {
    getState: () => {
        return {
            tasks: defaultTasks
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}

storiesOf('InBoxScreen', module)
    .addDecorator(story => <Provider store={store}>{story()}</Provider>)
    .add("default", () => <PureInboxScreen/>)
    .add('error', () => <PureInboxScreen error="Something" />)