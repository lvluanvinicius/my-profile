import { AvatarContainer } from "@/styles/components/avatar";
import Image from "next/image";

export default function Avatar() {
  return (
    <AvatarContainer>
      <Image
        src={`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-content/uploads/2024/06/cropped-44438249.png`}
        width={100}
        height={100}
        alt=""
      />
    </AvatarContainer>
  );
}
