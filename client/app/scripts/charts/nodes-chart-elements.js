import React from 'react';
import { connect } from 'react-redux';

import NodesChartEdges from './nodes-chart-edges';
import NodesChartNodes from './nodes-chart-nodes';

class NodesChartElements extends React.Component {
  render() {
    const props = this.props;
    return (
      <g className="nodes-chart-elements" transform={props.transform}>
        <NodesChartEdges layoutEdges={props.layoutEdges}
          layoutPrecision={props.layoutPrecision} />
        <NodesChartNodes layoutNodes={props.layoutNodes} nodeScale={props.nodeScale}
          scale={props.scale} selectedNodeScale={props.selectedNodeScale}
          layoutPrecision={props.layoutPrecision} />
      </g>
    );
  }
}

export default connect()(NodesChartElements);
