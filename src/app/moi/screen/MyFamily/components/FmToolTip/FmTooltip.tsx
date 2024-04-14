import {
  Box,
  ClickAwayListener,
  Fade,
  Paper,
  Popper,
  PopperPlacementType,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import { useStyles } from "./styles";

interface Props {
  content: ReactElement;
  children: ReactElement;
  open: boolean;
  onClose?: () => void;
  arrow?: boolean;
  placement?: PopperPlacementType;
}

export const FmToolTip = ({
  placement = "top",
  arrow = true,
  open,
  onClose = () => {},
  content,
  children,
}: Props) => {
  const classes = useStyles();
  const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);
  const [childNode, setChildNode] = React.useState<HTMLElement | null>(null);

  return (
    <div>
      {React.cloneElement(children, { ...children.props, ref: setChildNode })}
      <Popper
        open={open}
        anchorEl={childNode}
        placement={placement}
        transition
        className={classes.popper}
        modifiers={{
          preventOverflow: {
            enabled: true,
            boundariesElement: "window",
          },
          arrow: {
            enabled: arrow,
            element: arrowRef,
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={onClose}>
                <Paper elevation={0} className={classes.popoverRoot}>
                  {arrow ? (
                    <span className={classes.arrow} ref={setArrowRef} />
                  ) : null}
                  <Box className={classes.content}>{content}</Box>
                </Paper>
              </ClickAwayListener>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};
