import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { http } from './Utils/http'
import { DH_CHECK_P_NOT_PRIME } from 'constants';
import { addListener } from 'cluster';

class App extends React.Component {
  constructor(props: any){
    super(props);
  }

  public sendPage(){
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
      http.prototype.sendRequest(tabs[0]?.url ?? '', 'post',this.packUrlInJson(tabs[0]?.url ?? ''));
    });
  };

  private packUrlInJson(url: string): string{
    return JSON.stringify({'url': url});
  }

  public getHtml(){
    chrome.runtime.onConnect.addListener(function(port){
      port.onMessage.addListener((mes)=>alert(mes));
    });
  }
  
  render(){
    // this.sendPage();
    this.getHtml();
    return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
  );
  }
}

export default App;