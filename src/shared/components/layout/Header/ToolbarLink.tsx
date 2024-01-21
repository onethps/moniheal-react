import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Size } from '../../../enum/size';
import { useContainer } from '../../../service/di-container/react/useContainer';
import { SERVICE_SPA_ROUTER } from '../../../service/router';
import { IRouter } from '../../../service/router/i-router';
import { Icon } from '../../misc/Icon/Icon';
import { ToolbarLinkProps } from './type/toolbar-link-props';
import { useStyles } from './PageHeader.jss';

export const ToolbarLink = (props: ToolbarLinkProps) => {
  const styles = useStyles();
  const container = useContainer();
  const routerService = container.require<IRouter>(SERVICE_SPA_ROUTER);

  return (
    <Link
      className={classNames('button_borderless', styles.toolbarLink)}
      to={routerService.getUrl(props.linkKey, props.routeParams, props.queryParams)}
    >
      {props.icon !== false && <Icon icon={props.icon || 'add_circle_outline'} outlined size={Size.LARGE} />}
      {props.text}
    </Link>
  );
};
