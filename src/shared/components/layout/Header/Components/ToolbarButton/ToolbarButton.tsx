import classNames from 'classnames';
import React from 'react';
import { Size } from '../../../../../enum/size';
import { Icon } from '../../../../misc/Icon/Icon';
import { useStyles } from './ToolbarButton.jss';
import { ToolbarButtonProps } from './type/props';

export const ToolbarButton = React.memo((props: ToolbarButtonProps) => {
  const styles = useStyles();

  return (
    <span className={classNames('button_borderless', styles.button)} onClick={props.onClick}>
      <Icon icon={props.icon || 'add_circle_outline'} outlined size={Size.LARGE} />
      {props.text}
    </span>
  );
});
