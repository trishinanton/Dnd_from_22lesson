
import {ComponentMeta, ComponentStory} from "@storybook/react";
import App from "../App";
import React from "react";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'App',
    component: App,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Primary = Template.bind({});
Primary.args={
    label: 'App'
}