
import {ComponentMeta, ComponentStory} from "@storybook/react";
import App from "../App";
import React from "react";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";
import {ItemElement} from "../ItemElement";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Item',
    component: ItemElement
} as ComponentMeta<typeof ItemElement>;

const dragOverHandlerCallback = action('drag item over ')
const dragLeaveHandlerCallback = action('drag item leave ')
const dragStartHandlerCallback = action('drag item start ')
const dragEndHandlerCallback = action('drag item end ')
const dropHandlerCallback = action('drop item ')

const Template: ComponentStory<typeof ItemElement> = (args) => <ItemElement {...args} />;

export const Item = Template.bind({});
Item.args={
    dragOverHandler:dragOverHandlerCallback,
    dragLeaveHandler:dragLeaveHandlerCallback,
    dragStartHandler:dragStartHandlerCallback,
    dragEndHandler:dragEndHandlerCallback,
    dropHandler:dropHandlerCallback,
    title: 'Anton',
    board: {id: 2, title: 'Mentors', items: [{id: 4, title: 'Dimych'},{id: 5, title: 'Ignat'}]},
    item: {id: 4, title: 'Dimych'}
}
