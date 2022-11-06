import React from "react";
import "./url-detection.css";
import { urls } from "./urls";

type Props = {};

const InitialState = {
  text: "",
  detection: {},
};

type State = typeof InitialState;

export default class UrlDetection extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = InitialState;

    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChange(event: any) {
    this.setState({detection: {}})
    this.setState({ text: event.target.value });
    this.detectUrl(urls, event.target.value);
  }

  handelSubmit(event: any) {
    console.log(this);
    event.preventDefault();
  }

  detectUrl(urlsDetection: any, url: string) {
    for (let i = 0; i < urlsDetection.detection.length; i++) {
        let pattern = urlsDetection.detection[i].pattern;
        let n = url.match(pattern);
        if(n && n.length > 0) {
            this.setState({detection: urlsDetection.detection[i]})
        }
    }
  }

  render(): React.ReactNode {
    return (
      <div>
        <form action="" onSubmit={this.handelSubmit}>
          <label htmlFor="">
            Please input your content
            <input
              className="search-content"
              type="text"
              value={this.state.text}
              onChange={this.handelChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
        Suggest: 
        profiles-latest.dev-x-nabx.nabx.extnp.national.com.au Hip mapped ALB,
        dev-x.ewcs.extnp.nab.com.au Akamai,
        profiles-latest.dev-x-nabx.nabxnonprod HIP,
        stg01.cohomelend.intapi.extnp.national.com.au service gateway,
        sit1-home-lending-details.lz164.awsnp.national.com.au service link,
        customer-gw-sit01-outbound.api.extnp.national.com.au
        </div>
        <div className="detection-result">
            <code>
            {JSON.stringify(this.state.detection)}

            </code>
        </div>
      </div>
    );
  }
}
