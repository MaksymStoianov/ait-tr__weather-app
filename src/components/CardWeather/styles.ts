import styled from "@emotion/styled";

export const StyledCardWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5px 0;
  box-shadow: 0 4px 8px rgb(0 0 0 / 50%);
  border-radius: 25px;
  background: linear-gradient(#6a8497cf, #394753cf);
  padding: 15px;
  width: 100%;
  max-width: 180px;
  color: white;

  &:hover {
    box-shadow: 0 5px 9px rgb(0 0 0 / 50%);
  }
`;

const textShadow1 = `text-shadow: 0px 2px 7px rgb(0 0 0 / 25%);`;

export const StyledCity = styled.span`
  font-weight: 700;
  ${textShadow1}
`;

export const StyledIcon = styled.img`
  width: 24px;
`;

export const StyledDescription = styled.span`
  font-weight: 700;
  ${textShadow1}
`;

export const StyledTemperature = styled.span`
  margin-top: 10px;
  margin-bottom: -5px;
  font-weight: 500;
  font-size: 55px;
  ${textShadow1}

  &:after {
    content: "°";
    vertical-align: text-top;
    font-size: 25px;
  }
`;

export const StyledTemperatureMin = styled.span`
  font-weight: 700;
  ${textShadow1}

  &:before {
    content: "↓";
    vertical-align: text-top;
    font-family: monospace;
  }

  &:after {
    content: "°";
  }
`;

export const StyledTemperatureMax = styled.span`
  font-weight: 700;
  ${textShadow1}

  &:before {
    content: "↑";
    vertical-align: text-top;
    font-family: monospace;
  }

  &:after {
    content: "°";
  }
`;
