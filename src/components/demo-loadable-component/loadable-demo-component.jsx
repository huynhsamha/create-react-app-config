import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from './../loading/loading';

const LoadableComponent = Loadable({
    loader: () => import('./demo-loadable-component.jsx'),
    loading: Loading,
    delay: 300, // default is 200
    timeout: 10000
});

export class LoadableDemoComponent extends Component {
    render() {
        return <LoadableComponent/>
    }
}