import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export const SubBarMenuListLink = styled(Link)`
  color: #000;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;
export const SubBarMenuListLabel = styled.h3`
  color: #999;
  font-size: 0.8rem;
  line-height: 18px;
  vertical-align: top;
  padding-right: 20px;
  padding-bottom: 12px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const MoreDetailLink = styled(Link)`
  position: relative;
  color: #999;
  font-size: 0.8rem;
  line-height: 18px;
  padding-right: 20px;
  padding-bottom: 12px;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-decoration: none;
  display: block;
  cursor: pointer;
`;

export const LinkIcon = styled(FaChevronRight)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.9rem;
  color: #999;
`;
