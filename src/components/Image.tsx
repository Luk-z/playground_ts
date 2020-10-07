import styled from "styled-components";

interface Props {
  url: string;
}

export default styled.div`
  background-image: url(${({ url }: Props) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
