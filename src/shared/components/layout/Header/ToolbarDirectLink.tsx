import classNames from 'classnames';
import React from 'react';
import { Size } from '../../../enum/size';
import { Icon } from '../../misc/Icon/Icon';
import { useStyles } from './PageHeader.jss';
import { ToolbarLinkProps } from './type/toolbar-link-props';

type ToolbarDirectLinkProps = Omit<ToolbarLinkProps, 'linkKey' | 'routeParams' | 'queryParams'> & {
  href: string;
  target?: string;
};

export const ToolbarDirectLink = (props: ToolbarDirectLinkProps) => {
  const styles = useStyles();

  return (
    <a
      className={classNames('button_borderless', styles.toolbarLink)}
      href={props.href}
      target={props.target || '_blank'}
    >
      {props.icon !== false && <Icon icon={props.icon || 'add_circle_outline'} outlined size={Size.LARGE} />}
      {props.text}
    </a>
  );
};
