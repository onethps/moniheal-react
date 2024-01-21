import React, { ChangeEvent, useEffect, useReducer } from 'react';
import { createSetCurrentTab } from './store/factory';
import { initialState, reducer } from './store/reducer';
import { AddableTabBarProps } from './type/props';
import { Tab as TabType } from './type/props';
import { Box, Tab, Tabs, styled } from '@mui/material';
// import TabImage from '../../../../assets/images/active_tab.png';

export const AddableTabBar = (props: AddableTabBarProps) => {
  const query = new URLSearchParams(document.location.search);
  const hash = window.location.hash.replace(/^#!?/, '');
  const tab = query.get('tab') || hash || '';

  useEffect(() => {
    if (!hash.length && Object.keys(props.tabs).length > 0) {
      window.location.hash = Object.keys(props.tabs)[0];
    }

    if (!Object.keys(props.tabs).some(key => key === tab)) {
      window.location.hash = Object.keys(props.tabs)[0] || '';
      return;
    }

    dispatch(createSetCurrentTab(tab));
    if (props?.onChange) props.onChange(tab);
    window.location.hash = tab;
  }, [tab]);

  const permanent = Object.values(props.tabs).reduce((acc: string[], current: TabType) => {
    if (current.permanent) {
      acc.push(current.name);
    }

    return acc;
  }, [] as string[]);

  initialState.currentIndex = permanent?.[0] || '';
  const [state, dispatch] = useReducer(reducer, initialState);

  const tabsChangeHandler = (_: ChangeEvent<{}>, key: string) => {
    dispatch(createSetCurrentTab(key));
    if (props?.onChange) props.onChange(key);
    window.location.hash = key;
  };

  const content = props.tabs[state.currentIndex]?.contentRender();

  return (
    <Box>
      <Box sx={{ marginLeft: '20px' }}>
        <Tabs
          value={state.currentIndex}
          onChange={tabsChangeHandler}
          TabIndicatorProps={{ hidden: true }}
          variant="scrollable"
          visibleScrollbar
          sx={{
            '& button': {
              borderTopLeftRadius: '15px',
              borderTopRightRadius: '15px',
              backgroundColor: '#FFFFFF80',
              color: '#90A4BE',
            },
            '& button.Mui-selected': {
              backgroundColor: '#fff',
              color: '#333333',
            },
          }}
        >
          {Object.keys(props.tabs).map(tab => (
            <TabWrapper label={props.tabs[tab].label} key={props.tabs[tab].name} value={props.tabs[tab].name} />
          ))}
        </Tabs>
      </Box>
      {content}
    </Box>
  );
};

const TabWrapper = styled(Tab)(() => ({
  fontWeight: '500',
  fontSize: '14px',
  textTransform: 'none',
}));
