import { OrganizationList } from "@clerk/nextjs";

export const OrgSelectView = () => {
  return (
    <OrganizationList
      afterCreateOrganizationUrl="/"
      afterSelectPersonalUrl="/"
      hidePersonal
      skipInvitationScreen
    />
  );
};
