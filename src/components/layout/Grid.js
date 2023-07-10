import { Grid as MantineGrid } from "@mantine/core";

const Grid = ({ data, renderItem }) => {
  return (
    <MantineGrid>
      {data.map((item) => (
        <MantineGrid.Col span={4}>{renderItem(item)}</MantineGrid.Col>
      ))}
    </MantineGrid>
  );
};

export default Grid;
