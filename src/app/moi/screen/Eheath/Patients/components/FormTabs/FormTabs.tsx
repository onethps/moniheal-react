import { useTranslation } from "react-i18next";
import Patients from "../../containers/patients/Patients";
import Requests from "../../containers/requests/Requests";
import { AddableTabBar } from "../../../../../components/form/tabs/AddableTabBar/AddableTabBar";

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

  availableTabs.patients = {
    name: "patients",
    label: "Patients",
    permanent: true,
    contentRender() {
      return <Patients />;
    },
  };

  availableTabs.requests = {
    name: "requests",
    label: "requests",
    permanent: true,
    contentRender() {
      return <Requests />;
    },
  };

  return <AddableTabBar tabs={availableTabs} />;
};
