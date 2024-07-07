import {
  IntroductionContainer,
  IntroductionInfo,
} from "@/styles/components/introduction";
import Avatar from "./avatar";

export default function Introduction() {
  return (
    <IntroductionContainer>
      <Avatar />

      <IntroductionInfo>
        <h1>Luan V. P. Santos</h1>
        <div className="icons-socials">...</div>
        <p>
          Desenvolvedor Full Stack e DevOps, apaixonado por aprender
          continuamente e buscar soluções inovadoras. Habilidades sólidas em
          desenvolvimento de aplicações e automação de processos, comprometido
          com a excelência técnica e o sucesso dos projetos.
        </p>

        <a href="">GitHub</a>
      </IntroductionInfo>
    </IntroductionContainer>
  );
}
