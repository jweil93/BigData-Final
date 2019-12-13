import React from "react";
import { Graph } from 'react-d3-graph';

const config = {
  nodeHighlightBehavior: true,
  node: {
    size: 360,
    highlightStrokeColor: 'blue'
  },
  link: {
    highlightColor: 'lightblue'
  }
};

class PGraph extends React.Component {
  render() {
    return (
      <Graph
        id={this.props.id}
        data={this.props.data}
        config={config}
      />
    );
  }
}

export { PGraph }
