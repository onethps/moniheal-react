import React from 'react';

export type Tab = {
  name: string;
  label: string;
  contentRender: () => React.ReactNode;
  permanent?: boolean;
};

export type AddableTabBarProps = {
  tabs: Record<string, Tab>;
  urgent?: string[];
  onChange?: (index: string) => void;
};
