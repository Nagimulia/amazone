import Container from "@/components/Container";
import ProfileInfo from "@/components/ProfileInfo";
import Title from "@/components/Title";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/");
  }
  return (
    <Container>
      <Title title="Profile Information" />
      <ProfileInfo />
    </Container>
  );
};

export default page;
