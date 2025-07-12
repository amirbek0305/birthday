
import React from 'react';
import styled from 'styled-components';

const ResultWrapper = styled.div`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.2;
`;

const Line = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Highlight = styled.span`
  color: #854dff;
`;

function Result({ years, months, days }) {
  return (
    <ResultWrapper>
      <Line><Highlight>{years}</Highlight> years</Line>
      <Line><Highlight>{months}</Highlight> months</Line>
      <Line><Highlight>{days}</Highlight> days</Line>
    </ResultWrapper>
  );
}

export default Result;
