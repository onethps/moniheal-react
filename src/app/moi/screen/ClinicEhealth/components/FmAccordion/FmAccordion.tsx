import React, { FC, PropsWithChildren } from "react";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material";
import ExpandIcon from "../../assets/icons/ExpandIcon";

interface FmAccordionProps {
  title: string;
}

export const FmAccordion: FC<PropsWithChildren<FmAccordionProps>> = (props) => {
  const { title, children } = props;
  return (
    <AccordionWrapper>
      <AccordionSummary aria-controls="panel1-content" id="panel1-header">
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionWrapper>
  );
};

const AccordionWrapper = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 0,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandIcon />} {...props} />
))(({ theme }) => ({
  padding: 0,
  fontWeight: 600,
  backgroundColor: "transparent",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "7px",
  },
}));

const AccordionDetails = styled((props: AccordionSummaryProps) => (
  <MuiAccordionDetails expandIcon={<ExpandIcon />} {...props} />
))(({ theme }) => ({
  marginTop: 20,
  padding: 0,
}));
