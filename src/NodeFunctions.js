const addNode = (nodeType, graphState) => {
  const id = graphState.graph.nodes.length + 1;
  const x =
    graphState.graph.nodes.length === 0
      ? 258.3976135253906
      : graphState.graph.nodes[graphState.graph.nodes.length - 1].x + 10;
  const y =
    graphState.graph.nodes.length === 0
      ? 331.9783248901367
      : graphState.graph.nodes[graphState.graph.nodes.length - 1].y + 10;
  const node = {
    id: id,
    title: `Node A${id}`,
    titleCopy: `Node A${id}`,
    x: x,
    y: y,
    type: nodeType,
  };

  const newGraphState = {
    ...graphState,
    graph: {
      ...graphState.graph,
      nodes: [...graphState.graph.nodes, node],
    },
  };

  return newGraphState;
};

const addEdge = (sourceId, targetId, graphState) => {
  const edge = {
    id: graphState.graph.edges.length + 1,
    handleText: "EdgeLabel",
    handleTextCopy: "EdgeLabel",
    source: sourceId,
    target: targetId,
    type: "emptyEdge",
  };

  const newGraphState = {
    ...graphState,
    graph: {
      ...graphState.graph,
      edges: [...graphState.graph.edges, edge],
    },
  };

  return newGraphState;
};

const updateNodeTitle = (nodeId, nodeTitle, graphState) => {
  const newGraphState = {
    ...graphState,
    graph: {
      ...graphState.graph,
      nodes: graphState.graph.nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            title: nodeTitle,
          };
        }
        return node;
      }),
    },
  };

  return newGraphState;
};

const updateEdgeHandleText = (edgeId, edgeHandleText, graphState) => {
  const newGraphState = {
    ...graphState,
    graph: {
      ...graphState.graph,
      edges: graphState.graph.edges.map((edge) => {
        if (edge.id === edgeId) {
          return {
            ...edge,
            handleText: edgeHandleText,
          };
        }
        return edge;
      }),
    },
  };
  return newGraphState;
};

export { addNode, addEdge, updateEdgeHandleText, updateNodeTitle };
