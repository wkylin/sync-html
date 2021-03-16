
const g6Data = {
  edges: {
    '100000': [
      {
        companyCode: '110000',
        risk: 1,
      },
      {
        companyCode: '120000',
        risk: 2
      },
      {
        companyCode: '130000',
        risk: 3
      }
    ],

    '110000': [
      {
        companyCode: '111000',
        risk:1
      },
      {
        companyCode: '120000',
        risk: 2
      }
    ],
    '120000': [
      {
        companyCode: '121000',
        risk:1
      },
      {
        companyCode: '122000',
        risk: 2
      }
    ],
    '130000': [
      {
        companyCode: '131000',
        risk:1
      },
      {
        companyCode: '132000',
        risk: 2
      }
    ]
  },
  nodes: [
    {
      companyCode: '100000',
      companyName: '100000'
    },
    {
      companyCode: '110000',
      companyName: '110000'
    },
    {
      companyCode: '120000',
      companyName: '120000'
    },
    {
      companyCode: '130000',
      companyName: '130000'
    },
    {
      companyCode: '111000',
      companyName: '111000'
    },
    {
      companyCode: '121000',
      companyName: '121000'
    },
    {
      companyCode: '122000',
      companyName: '122000'
    },
    {
      companyCode: '131000',
      companyName: '131000'
    },
    {
      companyCode: '132000',
      companyName: '132000'
    }
  ]
};

const transG6 = (graphData) => {
  const { edges } = graphData;

  const companyCodes = [...edges['100000'].map((edge) => edge.companyCode), 100000];

  const nodesObj ={};
  companyCodes.forEach((code, index) => {
    nodesObj[code] = index;
  });

  const graphEdges = [];
  let initId = 100000000;
  for (const [edgeKey, edgeArr] of Object.entries(edges)) {


    const edgesArray = edgeArr.map((arrItem) => {

      return {
        ...arrItem,
        target: initId++,
        source: nodesObj[edgeKey],
        id: initId++,
      };
    });

    graphEdges.push(...edgesArray);
  }

  console.log('graphEdges', graphEdges);

};


transG6(g6Data);
