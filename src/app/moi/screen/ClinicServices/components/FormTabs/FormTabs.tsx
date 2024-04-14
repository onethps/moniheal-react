import { useTranslation } from "react-i18next";

import { AddableTabBar } from "../../../../components/form/tabs/AddableTabBar/AddableTabBar";
import Active from "../../containers/Active";
import Moderated from "../../containers/Moderated";
import Archive from "../../containers/Archive";

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

export const FormTabs = () => {
  const { t } = useTranslation();

  const availableTabs: Record<string, Tab> = {};

  availableTabs.active = {
    name: "active",
    label: "active",
    permanent: true,
    contentRender() {
      return <Active />;
    },
  };

  availableTabs.moderated = {
    name: "moderated",
    label: "moderated",
    permanent: true,
    contentRender() {
      return <Moderated />;
    },
  };

  availableTabs.archive = {
    name: "archive",
    label: "archive",
    permanent: true,
    contentRender() {
      return <Archive />;
    },
  };

  return <AddableTabBar tabs={availableTabs} />;
};
