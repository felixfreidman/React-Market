import styled from "styled-components";

import { Z_INDEX_LEVEL_2, HEADER_HEIGHT } from "consts";
import colors from "consts/colors";

export const Wrapper = styled.header`
	padding: 14px 20px;
	display: flex;
	align-items: center;
	transition: all 0.3s ease-out;
	background-color: ${colors.primary};
	height: ${HEADER_HEIGHT}px;
	z-index: ${Z_INDEX_LEVEL_2};
	color: #fff;
`;

export default Wrapper;
