import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from "../components/ChannelGrid";
import * as React from "react";
export default class extends React.Component {

    static async getInitialProps() {
        let req = await fetch('https://api.audioboom.com/channels/recommended');
        let {body: channels} = await req.json();
        return {channels}
    }
    render() {
        const { channels } = this.props;
        return (
            <Layout title="App Postcasts">
                <ChannelGrid channels={channels} />
            </Layout>
        )
    }
}