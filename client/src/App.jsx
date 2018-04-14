import React, {Component} from 'react';
import ReactComponent from '../src/components/Component';
import ReactPureComponent from '../src/components/PureComponent';
import ReactFunctionalComponent from '../src/components/FunctionalComponent';
import './App.css';

class App extends Component {
    render() {
        const title = 'Hello World';
        const className = "title";
        const children = (
          <span>
            {title}
          </span>
        );

        return (
            <div className="App">
                <ReactComponent className={className}>
                  {children}
                </ReactComponent>
                <ReactPureComponent className={className}>
                  {children}
                </ReactPureComponent>
                <ReactFunctionalComponent className={className}>
                  {children}
                </ReactFunctionalComponent >
                {
                  React.createElement('div', {className: className}, React.createElement('span', {}, title))
                }
            </div>
        );
    }
}

export default App;
