export const GraphConfig = {
  NodeTypes: {
    empty: {
      // required to show empty nodes
      typeText: "None",
      shapeId: "#empty", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 100 100"
          id="empty"
          key="0"
          width="100"
          height="100"
        >
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
    emptyH: {
      // required to show empty nodes
      typeText: "None",
      shapeId: "#emptyH", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 100 100"
          id="emptyH"
          key="0"
          width="100"
          height="100"
          style={{ fill: "blue", stroke: "pink", strokeWidth: 5, opacity: 0.5 }}
        >
          <circle cx="50" cy="50" r="45"></circle>
        </symbol>
      ),
    },
    custom: {
      // required to show empty nodes
      typeText: "Custom",
      shapeId: "#custom", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 115 115"
          id="custom"
          key="1"
          width="115"
          height="115"
        >
          <rect width="109" height="109" />
        </symbol>
      ),
    },
    customH: {
      // required to show empty nodes
      typeText: "Custom",
      shapeId: "#customH", // relates to the type property of a node
      shape: (
        <symbol
          viewBox="0 0 115 115"
          id="customH"
          key="1"
          width="115"
          height="115"
          style={{ fill: "blue", stroke: "pink", strokeWidth: 5, opacity: 0.5 }}
        >
          <rect width="109" height="109" />
        </symbol>
      ),
    },
    rect: {
      // required to show empty nodes
      typeText: "Rect",
      shapeId: "#rect", // relates to the type property of a node
      shape: (
        //   <symbol viewBox="0 0 50 25" id="rect" key="0">
        //     <rect cx="50" cy="25" rx="50" ry="25"></rect>
        //   </symbol>

        <symbol
          viewBox="-27 0 154 154"
          id="rect"
          key="2"
          width="154"
          height="154"
        >
          <rect transform="translate(50) rotate(45)" width="109" height="109" />
        </symbol>
      ),
    },
    rectH: {
      // required to show empty nodes
      typeText: "Rect",
      shapeId: "#rectH", // relates to the type property of a node
      shape: (
        //   <symbol viewBox="0 0 50 25" id="rect" key="0">
        //     <rect cx="50" cy="25" rx="50" ry="25"></rect>
        //   </symbol>

        <symbol
          viewBox="-27 0 154 154"
          id="rectH"
          key="2"
          width="154"
          height="154"
          style={{ fill: "blue", stroke: "pink", strokeWidth: 5, opacity: 0.5 }}
        >
          <rect transform="translate(50) rotate(45)" width="109" height="109" />
        </symbol>
      ),
    },
  },
  NodeSubtypes: {},
  EdgeTypes: {
    emptyEdge: {
      // required to show empty edges
      shapeId: "#emptyEdge",
      shape: (
        //   <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
        //     <circle cx="25" cy="25" r="8" fill="currentColor"> </circle>
        //   </symbol>
        <symbol viewBox="0 0 0 0" id="emptyEdge">
          <circle cx="25" cy="25" r="8" fill="currentColor" />
        </symbol>
      ),
    },
  },
};

export const sample = {
  edges: [],
  nodes: [
    {
      id: 1,
      title: "Node A",
      x: 258.3976135253906,
      y: 331.9783248901367,
      type: "empty",
      titleCopy: "Node A",
    },
    {
      id: 2,
      title: "Node B",
      x: 593.9393920898438,
      y: 260.6060791015625,
      type: "rect",
      titleCopy: "Node B",
    },
    {
      id: 3,
      title: "Node C",
      x: 237.5757598876953,
      y: 61.81818389892578,
      type: "custom",
      titleCopy: "Node C",
    },
  ],
};
