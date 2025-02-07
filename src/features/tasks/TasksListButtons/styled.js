import styled from "styled-components";
import { ExtraHeaderButtons } from "../ExtraHeaderButtons";

export const AllTasksDoneButton = styled(ExtraHeaderButtons)`
  &:disabled {
    color: ${({ theme }) => theme.colors.silver};
    transition: none;
  }
`;
