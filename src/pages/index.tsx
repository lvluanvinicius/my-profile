import Introduction from "@/components/introduction";
import { HomeContainer } from "@/styles/pages/home";

export default function Home(props) {
  return (
    <HomeContainer>
      <Introduction />
    </HomeContainer>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await wpServiceApi.get("", {});

//   return {
//     props: {
//       test: response.data,
//     },
//   };
// };
