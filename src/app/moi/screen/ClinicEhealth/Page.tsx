import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";
import { useTranslation } from "react-i18next";

import { Button, Stack, styled } from "@mui/material";

import { CustomCard } from "../../components/layout/Card/Card";
import { Form, Formik, FormikProps } from "formik";
import { FmAccordion } from "./components/FmAccordion/FmAccordion";
import { AboutCompanyForm } from "./containers/AboutCompanyForm/AboutCompanyForm";
import { AcredetationForm } from "./containers/AcredetationForm/AcredetationForm";
import { LicenseForm } from "./containers/LicenseForm/LicenseForm";
import { AddressForm } from "./containers/AddressForm/AddressForm";
import { AboutOwnerForm } from "./containers/AboutOwnerForm/AboutOwnerForm";
import { ArchiveForm } from "./containers/ArchiveForm/ArchiveForm";
import { FmCheckBox } from "./components/FmCheckBox/FmCheckBox";
import { FmTextField } from "../MyFamily/components/FmTextField/FmTextField";
import ExpandIcon from "./assets/icons/ExpandIcon";

export const initialValues = {
  edrpou: "",
  code: "",
  ZOZ: "",
  email: "",
  web: "",
  oblast: "",
  region: "",
  city: "",
  street: "",
  documentType: "passport1",
};

export default function Page() {
  const { t } = useTranslation();

  return (
    <BaseScreen>
      <PageHeader title={"Медзаклад в eHealth"} />
      <CustomCard>
        <Stack justifyContent="center" alignItems="center">
          <Stack maxWidth="464px">
            <Formik
              initialValues={initialValues}
              onSubmit={async (values, actions) => {
                console.log(values);
              }}
            >
              {(props: FormikProps<typeof initialValues>) => (
                <Form>
                  <Stack marginBottom="50px">
                    {/* about company */}
                    <FmAccordion title="Інформація про медичну організацію">
                      <AboutCompanyForm />
                    </FmAccordion>

                    {/* address */}
                    <FmAccordion title="Фактична адреса надання медичних послуг">
                      <AddressForm />
                    </FmAccordion>

                    {/* acredetation */}
                    <FmAccordion title="Акредитація">
                      <AcredetationForm />
                    </FmAccordion>
                    {/* license */}
                    <FmAccordion title="Ліцензія">
                      <LicenseForm />
                    </FmAccordion>
                    <FmAccordion title="Інформація про власника">
                      <AboutOwnerForm />
                    </FmAccordion>
                    <FmAccordion title="Дані архіву">
                      <ArchiveForm />
                    </FmAccordion>
                    <FmAccordion title="Публічна оферта">
                      <FmCheckBox />
                    </FmAccordion>
                    <FmAccordion title="Підписання даних за допомогою ЕЦП">
                      <Stack gap="20px">
                        <FmTextField
                          label="Особистий ключ"
                          name="file"
                          placeholder="Додати файл"
                          endIcon={<ExpandIcon />}
                        />
                        <FmTextField
                          label="Пароль захисту ключа"
                          name="password"
                          placeholder="Введіть пароль"
                        />
                      </Stack>
                    </FmAccordion>
                  </Stack>
                  <Button
                    type="submit"
                    // className={classes.submitButton}
                    size="large"
                    fullWidth
                    variant="contained"
                    color="success"
                  >
                    Зберегти данні
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </CustomCard>
    </BaseScreen>
  );
}

const PageActionButton = styled(Button)(() => ({
  fontWeight: "700",
  textTransform: "capitalize",
}));
