import React, { useEffect, useRef, useState } from "react";

import { GraphView } from "react-digraph";
import { GraphStyles } from "./GraphStyle";
import Popup from "./utils/Popup";
import { GraphConfig, sample } from "./config";
import {
  addEdge,
  addNode,
  updateEdgeHandleText,
  updateNodeTitle,
} from "./NodeFunctions";

const onDeleteHandler = () => {
  console.log("nodeId, nodeArr");
};

const NewGraph = () => {
  const NODE_KEY = "id";
  const GraphViewRef = useRef(null);
  const editTitleInput = useRef(null);
  const [graphState, setGraphState] = useState({ graph: sample, selected: {} });
  const [selected, setSelected] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("Data")) {
      setGraphState(JSON.parse(sessionStorage.getItem("Data")));
    }
  }, []);

  const addCircle = () => {
    const newGraphState = addNode("empty", graphState);
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  const addRectangle = () => {
    const newGraphState = addNode("rect", graphState);
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
    //   console.log(graphState.graph.nodes);
  };

  const addEclipse = () => {
    const newGraphState = addNode("custom", graphState);
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  const onCreateEdge = (sourceViewNode, targetViewNode) => {
    const newGraphState = addEdge(
      sourceViewNode.id,
      targetViewNode.id,
      graphState
    );
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  const onSelect = (viewNode) => {
    if (viewNode.nodes) {
      const newSelected = [...viewNode.nodes][0][1];
      setSelected(newSelected);
      editTitleInput.current.value = [...viewNode.nodes][0][1].title;
    } else if (viewNode.edges) {
      setSelected([...viewNode.edges][0][1]);
      editTitleInput.current.value = [...viewNode.edges][0][1].handleText;
    }
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOnChangeTitle = (e) => {
    const id = selected.id;
    if (e.keyCode === 13 && selected.title && e.target.value) {
      const nodeTitle = e.target.value;
      const newSelected = { ...selected, title: nodeTitle };
      setSelected(newSelected);
      const newGraphState = updateNodeTitle(id, nodeTitle, graphState);
      setGraphState(newGraphState);
      sessionStorage.setItem("Data", JSON.stringify(newGraphState));
    } else if (e.keyCode === 13 && selected.handleText && e.target.value) {
      const edgeHandleText = e.target.value;
      const newSelected = { ...selected, handleText: edgeHandleText };
      setSelected(newSelected);
      const newGraphState = updateEdgeHandleText(
        id,
        edgeHandleText,
        graphState
      );
      setGraphState(newGraphState);
      sessionStorage.setItem("Data", JSON.stringify(newGraphState));
    } else if (e.target.value === "" && e.keyCode === 13) {
      togglePopup();
    }
  };

  const onFilterChangeHandle = (e) => {
    const filterText = e.target.value.trim();
    if (filterText !== "") {
      const newGraphState = {
        ...graphState,
        graph: {
          ...graphState.graph,
          nodes: graphState.graph.nodes.map((node) => {
            if (node.title.toLowerCase().includes(filterText.toLowerCase())) {
              return {
                ...node,
                type: node.type.includes("H") ? node.type : `${node.type}H`,
              };
            } else {
              return {
                ...node,
                type: node.type.includes("H")
                  ? node.type.replace("H", "")
                  : node.type,
              };
            }
            //return node;
          }),
        },
      };
      // console.log(newGraphState.graph.nodes);
      setGraphState(newGraphState);
    } else {
      const newGraphState = {
        ...graphState,
        graph: {
          ...graphState.graph,
          nodes: graphState.graph.nodes.map((node) => {
            return {
              ...node,
              type: node.type.includes("H")
                ? node.type.replace("H", "")
                : `${node.type}`,
            };
          }),
        },
      };
      //console.log(newGraphState.graph.nodes);
      setGraphState(newGraphState);
    }
  };

  const onMoveNodeHandler = (viewNode) => {
    const newGraphState = {
      ...graphState,
      graph: {
        ...graphState.graph,
        nodes: graphState.graph.nodes.map((node) => {
          if (node.id === viewNode.id) {
            return viewNode;
          }
          return node;
        }),
      },
    };
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  const onCreateNodeHandler = (x, y) => {
    const id = graphState.graph.nodes.length + 1;
    // const x = x;
    // const y = y;
    const node = {
      id: id,
      title: selected.title,
      x,
      y,
      type: selected.type,
    };
    //console.log(GraphViewRef.nodeTypes);
    const newGraphState = {
      ...graphState,
      graph: {
        ...graphState.graph,
        nodes: [...graphState.graph.nodes, node],
      },
    };
    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  const onSwapEdgeHandler = (sourceViewNode, targetViewNode, viewEdge) => {
    console.log(sourceViewNode, targetViewNode, "swap edges");

    const newGraphState = {
      ...graphState,
      graph: {
        ...graphState.graph,
        edges: graphState.graph.edges.map((edge) => {
          if (edge.id === viewEdge.id) {
            return {
              ...edge,
              source: sourceViewNode.id,
              target: targetViewNode.id,
            };
          } else {
            return edge;
          }
        }),
      },
    };

    setGraphState(newGraphState);
    sessionStorage.setItem("Data", JSON.stringify(newGraphState));
  };

  return (
    <div id="graph" className={GraphStyles}>
      <div className="sidePanel">
        <button
          type="button"
          name="circle"
          className="sidePanel-Button"
          onClick={addCircle}
        >
          Add Circle
        </button>
        <button
          type="button"
          className="sidePanel-Button"
          onClick={addRectangle}
        >
          Add Diamond
        </button>
        <button type="button" className="sidePanel-Button" onClick={addEclipse}>
          Add Rectangle
        </button>
        <input
          type="text"
          className="sidePanel-Input"
          placeholder="Edit Title"
          ref={editTitleInput}
          onKeyDown={handleOnChangeTitle}
        />
        <input
          type="text"
          className="sidePanel-Input"
          placeholder="Filter by Title"
          onChange={onFilterChangeHandle}
          onKeyDown={onFilterChangeHandle}
        />
      </div>

      <GraphView
        ref={GraphViewRef}
        style={{ height: "50rem" }}
        showGraphControls={true}
        nodeKey={NODE_KEY}
        nodes={graphState.graph.nodes}
        edges={graphState.graph.edges}
        selected={selected}
        onSelect={onSelect}
        nodeTypes={GraphConfig.NodeTypes}
        nodeSubtypes={GraphConfig.NodeSubtypes}
        edgeTypes={GraphConfig.EdgeTypes}
        onCreateEdge={onCreateEdge}
        onUpdateNode={onMoveNodeHandler}
        onCreateNode={onCreateNodeHandler}
        onSwapEdge={onSwapEdgeHandler}
        canDeleteSelected={onDeleteHandler}
        allowMultiselect={false}
        initialBBox={{ x: 0, y: 0, width: 1000, height: 300 }}
        maxTitleChars={100000}
        readOnly={false}
      />
      {isOpen && (
        <Popup
          text="Invalid title, title can not be empty !"
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default NewGraph;
