import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProfileTabs = ({ content1, content2, content3 }) => {
  return (
    <Tabs defaultValue="account" className="max-w-[500px] ">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="profile-image">Profile image</TabsTrigger>
      </TabsList>
      <TabsContent value="account">{content1}</TabsContent>
      <TabsContent value="password">{content2}</TabsContent>
      <TabsContent value="profile-image">{content3}</TabsContent>
    </Tabs>
  );
};

export default ProfileTabs;
