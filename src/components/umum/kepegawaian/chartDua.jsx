import { ResponsivePie } from "@nivo/pie";

const data = [
  {
    id: "IIa",
    label: "IIa",
    value: 5,
    color: "hsl(31, 70%, 50%)",
  },
  {
    id: "IIb",
    label: "IIb",
    value: 3,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IIc",
    label: "IIc",
    value: 8,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IId",
    label: "IId",
    value: 12,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IIIa",
    label: "IIIa",
    value: 7,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IIIb",
    label: "IIIb",
    value: 6,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IIIc",
    label: "IIIc",
    value: 8,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IIId",
    label: "IIId",
    value: 3,
    color: "hsl(53, 70%, 50%)",
  },
  {
    id: "IVa",
    label: "IVa",
    value: 6,
    color: "hsl(53, 70%, 50%)",
  },
];

const MyResponsivePie = () => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: "color",
      modifiers: [["darker", 0.2]],
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: "color" }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: "color",
      modifiers: [["darker", 2]],
    }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "rgba(255, 255, 255, 0.3)",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "IIIb",
        },
        id: "lines",
      },
      {
        match: {
          id: "IId",
        },
        id: "lines",
      },
      {
        match: {
          id: "IIId",
        },
        id: "dots",
      },
      {
        match: {
          id: "IIa",
        },
        id: "dots",
      },
    ]}
    legends={[
      {
        anchor: "bottom",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: 56,
        itemsSpacing: 0,
        itemWidth: 100,
        itemHeight: 18,
        itemTextColor: "#999",
        itemDirection: "left-to-right",
        itemOpacity: 1,
        symbolSize: 18,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000",
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsivePie;
