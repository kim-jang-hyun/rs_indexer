import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

export default function StatisticsInformation({
  chart_name1,
  statistics_information1,
  chart_name2,
  statistics_information2,
  statistics_information3,
  statistics_information4,
  statistics_information5
}) {
  return (
    <React.Fragment>
      <Title>{chart_name1} 통계 안내</Title>
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
        {statistics_information1}
      </Typography>
      <br />
      <Title>{chart_name1} 경향성</Title>
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
        {statistics_information4}
      </Typography>
      <br />
      <Title>{chart_name2} 통계 안내</Title>
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
        {statistics_information2}
      </Typography>
      <br />
      <Title>{chart_name2} 경향성</Title>
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
        {statistics_information5}
      </Typography>
      <br />
      <Title>
        {chart_name1}, {chart_name2} 연관성
      </Title>
      <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
        {statistics_information3}
      </Typography>
    </React.Fragment>
  );
}
